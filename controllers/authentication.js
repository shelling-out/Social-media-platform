const path=require('path');
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','errors'));


const register=async (req,res)=>
{
    res.status(StatusCodes.CREATED).json({msg:"created successfuly"});
}


const login=async (req,res)=>
{
    res.status(StatusCodes.CREATED).json({msg:"logged in sucessfuly"});
}



const authController={register,login};
module.exports=authController;