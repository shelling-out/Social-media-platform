const path=require('path');
const authController=require(path.join(__dirname,'authentication.js'));
const userController=require(path.join(__dirname,'user.js'));

module.exports=
{
    authController,
    userController
}