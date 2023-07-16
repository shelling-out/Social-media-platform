const path=require('path');
const {unauthorized}=require(path.join(__dirname,'..','..','errors'));
const {Comment}=require(path.join(__dirname,'..','..','models'));

const commentOwnerShip=async(req,res,next)=>
{
    let authenticatedId=req.user.id;
    let commentId=req.params.id;
    let commentOwnerId=await Comment.findOne({where:{id:commentId}});
    commentOwnerId=commentOwnerId.dataValues.userId;
    if(Number(authenticatedId)!==Number(commentOwnerId))
        throw new unauthorized('You can only modify your comments');
    return next();
};

module.exports=commentOwnerShip;

