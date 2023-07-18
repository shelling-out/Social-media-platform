const path=require('path');
const Validator=require('validatorjs');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','..','errors'));
const {Reaction}=require(path.join(__dirname,'..','..','models'));



const checkIdReactionExestence=async (req,res,next)=>
{
    let data={id:req.params.id};
    const validationRule={
        id: "required|numeric",
    };
    let validation=new Validator(data,validationRule);
    const found = await Reaction.findOne({
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
            validation.errors.errors.reaction=[];
            validation.errors.errors.reaction.push("Reaction not found");
            statusCode=StatusCodes.OK;
        }
    }
    return res.status(statusCode).json(validation.errors.errors);
}
const reactionData=async(req,res,next)=>
{
    let data=req.body;
    const expectedValues=['like','dislike'];
    const validationRule={
        state:`string|in:${expectedValues.join(',')}`,
    };
    let validation=new Validator(data,validationRule);
    if(validation.passes()){
        return next();
    }
    return res.status(StatusCodes.BAD_REQUEST).json(validation.errors.errors);
}
const userValidation={
    checkIdReactionExestence,
    reactionData
}
module.exports = userValidation;