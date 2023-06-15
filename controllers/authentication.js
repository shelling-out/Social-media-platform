const path=require('path');
const { StatusCodes } = require('http-status-codes')
const jwt = require('jsonwebtoken');
const {User}=require(path.join(__dirname,'..','models'));

const register=async (req,res)=>
{
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const user= await User.create({username:req.body.username,email:req.body.email,password:req.body.password});
    res.status(StatusCodes.CREATED).json({msg:"created successfully"});
}


const login=async (req,res)=>
{
    const {email} = req.body;
    const user=await User.findOne({where:{email:email}});
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