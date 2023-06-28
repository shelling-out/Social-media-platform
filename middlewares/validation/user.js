const path=require('path');
const Validator=require('validatorjs');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','..','errors'));
const {User}=require(path.join(__dirname,'..','..','models'));



const checkIdUserExestence=async (req,res,next)=>
{
    let data={id:req.params.id};
    const validationRule={
        id: "required|numeric",
    };
    let validation=new Validator(data,validationRule);
    const found = await User.findOne({
        where: {
            id:data.id,
        },
    });
    let statusCode=StatusCodes.BAD_REQUEST;
    if(validation.passes()&&found){
        return next();
    }
    if(!found)
    {
        if(validation.errors.errors.id===undefined)
        {
            validation.errors.errors.user=[];
            validation.errors.errors.user.push("User not found");
            statusCode=StatusCodes.OK;
        }
    }
    return res.status(statusCode).json(validation.errors.errors);
}
const userValidation={
    checkIdUserExestence,
}
module.exports = userValidation;