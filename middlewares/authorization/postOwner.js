const path=require('path');
const {unauthorized}=require(path.join(__dirname,'..','..','errors'));
const {Post}=require(path.join(__dirname,'..','..','models'));

const postOwnerShip=async(req,res,next)=>
{
    let authenticatedId=req.user.id;
    let postId=req.params.id;
    let postOwnerId=await Post.findOne({where:{id:postId}});
    postOwnerId=postOwnerId.dataValues.userId;
    if(Number(authenticatedId)!==Number(postOwnerId))
        throw new unauthorized('You can only modify your posts');
    return next();
};

module.exports=postOwnerShip;

