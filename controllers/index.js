const path=require('path');
const authController=require(path.join(__dirname,'authentication.js'));
const userController=require(path.join(__dirname,'user.js'));
const postController=require(path.join(__dirname,'post.js'));
const commentController=require(path.join(__dirname,'comment.js'));
const reactionController=require(path.join(__dirname,'reaction.js'));
const groupController=require(path.join(__dirname , 'group.js')) ;

module.exports=
{
    authController,
    userController,
    postController,
    commentController,
    reactionController,
    groupController
};