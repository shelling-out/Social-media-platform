const path=require('path');
const {StatusCodes}=require('http-status-codes');
const { User,Reaction}=require(path.join(__dirname,'..','models'));



const createReaction=async(req,res)=>
{
    res.sendStatus(200);
};








const reactionController={
    createReaction,
    // editReaction,
    // deleteReaction,
    // getReactionById,
    // getAllReactions
};

module.exports=reactionController;