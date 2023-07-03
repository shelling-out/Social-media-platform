const path=require('path');
const {unauthorized}=require(path.join(__dirname,'..','..','errors'));
const {Post}=require(path.join(__dirname,'..','..','models'));

const postOwnerShip=async(req,res,next)=>
{
    let authenticatedId=req.user.id;
    let postId=req.params.id;
    let postOwnerId=req.params.id;
    if(Number(authenticatedId)!==Number(postId))
        throw new unauthorized('You can only modify your post');
    return next();
};

module.exports=postOwnerShip;

