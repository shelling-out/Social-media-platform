const path=require('path');
const authController=require(path.join(__dirname,'authentication.js'));

module.exports=
{
    authController,
}