const path=require('path');

const userAuth=require(path.join(__dirname,'user'));
const postAuth=require(path.join(__dirname,'post'));
const commentAuth=require(path.join(__dirname,'comment'));
const reactionAuth=require(path.join(__dirname,'reaction'));

module.exports={
    userAuth,
    postAuth,
    commentAuth,
    reactionAuth
}