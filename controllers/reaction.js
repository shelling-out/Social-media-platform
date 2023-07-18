const path=require('path');
const {StatusCodes}=require('http-status-codes');
const { User,Reaction}=require(path.join(__dirname,'..','models'));



const createReaction=async(req,res)=>
{
    const reaction=await Reaction.create({
        userId:req.user.id,
        postId:req.params.id,
        state:req.body.state
    });
    res.status(StatusCodes.CREATED).json(reaction.dataValues);
};








const reactionController={
    createReaction,
    // editReaction,
    // deleteReaction,
    // getReactionById,
    // getAllReactions
};

module.exports=reactionController;