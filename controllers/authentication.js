const path=require('path');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','errors'));
const {User}=require(path.join(__dirname,'..','models'));

const register=async (req,res)=>
{
    // const user= await User.create({username:req.body.username,email:req.body.email,password:req.body.password});
    res.status(StatusCodes.CREATED).json({msg:"created successfully"});
}


const login=async (req,res)=>
{
    res.status(StatusCodes.CREATED).json({msg:"logged in successfully"});
}



const authController={register,login};
module.exports=authController;