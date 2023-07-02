const path=require('path');
const authController=require(path.join(__dirname,'authentication.js'));
const userController=require(path.join(__dirname,'user.js'));
const postController=require(path.join(__dirname,'post.js'));


module.exports=
{
    authController,
    userController,
    postController
}