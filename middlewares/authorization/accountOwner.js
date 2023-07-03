const path=require('path');
const {unauthorized}=require(path.join(__dirname,'..','..','errors'));


const accountOwnerShip=async(req,res,next)=>
{
    let authenticatedId=req.user.id;
    let requestedId=req.params.id;
    if(Number(authenticatedId)!==Number(requestedId))
        throw new unauthorized('You can only modify your account');
    return next();
};

module.exports=accountOwnerShip;

