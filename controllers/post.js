const path=require('path');
const { StatusCodes } = require('http-status-codes')
const {Post}=require(path.join(__dirname,'..','models'));


const createPost=async(req,res)=>
{
    let data={};
    data.text=null;
    data.picture=null;
    if(req.body.data){
        const {text}= JSON.parse(req.body.data);
        data.text=text;
    }
    if(req.file){
        data.picture=req.file.filename;
    }
    data.userId=Number(req.user.id);
    const post= await Post.create({
        userId:data.userId,
        text:data.text,
        picture:data.picture
    });
    res.status(StatusCodes.CREATED).json(post.dataValues);
};

const editPost=async(req,res)=>
{
    let patchUpdate={};
    if(req.body.data)
    {
        const {text}= JSON.parse(req.body.data);
        patchUpdate.text=text;
    }
    if(req.file){
        patchUpdate.picture=req.file.filename;
    }
    await Post.update(patchUpdate, {where: {id:req.params.id}});
    const data=await Post.findOne({ where: { id: req.params.id },attributes:{exclude:['UserId']}});
    res.status(StatusCodes.OK).json(data.dataValues);
};
const postController={
    createPost,
    editPost
};
module.exports=postController;