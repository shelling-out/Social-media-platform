const path=require('path');
const authValidation=require(path.join(__dirname,'authentication'));
const userValidation=require(path.join(__dirname,'user'));


module.exports=
{
    authValidation,
    userValidation,
}