const path=require('path');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','errors'));
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {User}=require(path.join(__dirname,'..','models'));

const register=async (req,res)=>
{
    try {
        if(req.body.password.length<8||req.body.password.length>20)
            throw new BadRequestError('password must have 8 chars at least and 20 chars at most');
        if(req.body.username===""||req.body.username===null)
            throw new BadRequestError(" name can't be empty Please enter your username");
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        const user= await User.create({username:req.body.username,email:req.body.email,password:req.body.password});
        res.status(StatusCodes.CREATED).json({msg:"created successfully"});
    } catch (error) {
        throw new BadRequestError(error);        
    }    
}


const login=async (req,res)=>
{
    const {email,password} = req.body;
    if(!email)
        throw new BadRequestError('Please enter your email');
    if(!password)
        throw new BadRequestError('Please enter your password');
    const user=await User.findOne({where:{email:email}});
    if(!user)
        throw new UnauthenticatedError('Invalid Credentials');
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if(!isPasswordCorrect)
    {
        throw new UnauthenticatedError('Invalid Credentials');
    }
    const token=jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET,
        {
          expiresIn: process.env.JWT_LIFETIME,
        }
    );
    res.status(StatusCodes.OK).json({ user: {id:user.id ,username: user.username } , token });
}



const authController={register,login};
module.exports=authController;