const path=require('path');
const { StatusCodes } = require('http-status-codes')
const {Post}=require(path.join(__dirname,'..','models'));


const createPost=async(req,res)=>
{
    const { userId,text } = req.body;
    // const userId=1;
    const post= await Post.create({userId:userId,text:text});
    res.status(StatusCodes.CREATED).json({msg:"created successfully"});
};


const postController={
    createPost,
};
module.exports=postController;