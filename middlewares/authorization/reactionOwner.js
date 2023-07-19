const path=require('path');
const {unauthorized}=require(path.join(__dirname,'..','..','errors'));
const {Reaction}=require(path.join(__dirname,'..','..','models'));

const reactionOwnerShip=async(req,res,next)=>
{
    let authenticatedId=req.user.id;
    let reactionId=req.params.id;
    let reactionOwnerId=await Reaction.findOne({where:{id:reactionId}});
    reactionOwnerId=reactionOwnerId.dataValues.userId;
    if(Number(authenticatedId)!==Number(reactionOwnerId))
        throw new unauthorized('You can only modify your reactions');
    return next();
};

module.exports=reactionOwnerShip;

