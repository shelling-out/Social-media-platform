const path=require('path');
const postAuth=require(path.join(__dirname,'post'));
const commentAuth=require(path.join(__dirname,'comment'));


module.exports={
    postAuth,
    commentAuth
}