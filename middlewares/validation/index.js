const path=require('path');
const authValidation=require(path.join(__dirname,'authentication'));
const userValidation=require(path.join(__dirname,'user'));
const postValidation=require(path.join(__dirname,'post'));


module.exports=
{
    authValidation,
    userValidation,
    postValidation
}