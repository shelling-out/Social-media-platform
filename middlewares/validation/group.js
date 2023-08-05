const path=require('path');
const Validator=require('validatorjs');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require(path.join(__dirname,'..','..','errors'));
const {Group, User, Post , Comment , Reaction } = require(path.join(__dirname , '..', '..' ,'models')); 

// Validator.registerAsync('groupExists',  (groupId, attribute, req, passes)=> {
//     console.log(groupId , attribute , req , passes) ;
//     Group.findOne({where:{id:groupId}} , ) ;
//     if(!group){
//        passes(false, 'Group Not Found'); 
//        return ;
//     }
//     passes(); 
// }, 'the :attribute is not found.');
Validator.registerAsync('groupExists', async (value, attribute, req, passes) => {
    const group = await Group.findOne({where:{id : value }}); // Assuming email is the unique identifier for the user in your database
    if (group) {
        passes();
    } 
    else {
        passes(false, 'group not found');
    }
    return ;
});

Validator.registerAsync('postExist' , async (value , attribute , req ,passes )=>{
    const post = await Post.findOne({where:{id:value}}) ; 
    if(post){
        passes() ; 
    }
    else{
        passes(false,'comment ont found') ;
    }
return ;
});
Validator.registerAsync('commentExists' , async (value , attribute , req ,passes )=>{
    const comment = await Comment.findOne({where:{id:value}}) ; 
    if(comment){
        passes() ; 
    }
    else{
        passes(false,'comment ont found') ;
    }
return ;
});
Validator.registerAsync('reactionExists' , async (value , attribute , req ,passes )=>{
    const reaction = await Reaction.findOne({where:{id:value}}) ; 
    if(reaction){
        passes() ; 
    }
    else{
        passes(false,'reaction ont found') ;
    }
return ;
});

const checkGroupData = async (req, res , next)=>{
    let validationRule = {
        groupName:'required|string',
        groupDescription:'required|string'
    };
    let validator = new Validator(req.body,validationRule) ;
    if(validator.passes()){
        return next() ; 
    }
    return res.status(400).json({msg:'failed' , errors:validator.errors.errors});
}
const checkPostData = async (req,res,next)=>{
    let validationRule = {
        text:'required|string',
        // image: 'image...
    };
    let validator = new Validator(req.body, validationRule); 
    if(validator.passes()){
        return next() ; 
    }
    return res.status(400).json({msg:'failed' , errors:validator.errors.errors}) ; 
}

const checkForGroupExistance = async (req,res,next)=>{
    let data = {
        groupId:req.params.groupId
    };
    let validationRule = {
        groupId:'required|numeric|groupExists'
    }; 
    
    let validator = new Validator(data , validationRule) ;
    await validator.checkAsync(()=>{
         next() ;
    } , ()=>{
        return res.json({msg:'failed' , errors:validator.errors.errors}) ;
    });
}
const checkForPostExistance = async (req,res,next)=>{
    let data = {
        postId:req.params.id || req.params.postId
    };
    let validationRule = {
        postId: 'required|numeric|postExists'
    };
    let validator = new Validator(data , validationRule) ;
    await validator.checkAsync(()=>{
         next() ;
    } , ()=>{
        return res.json({msg:'failed' , errors:validator.errors.errors}) ;
    });    
};

const checkForCommentExistance = async (req,res,next)=>{
    let data = {
        commentId:req.params.id 
    };
    let validationRule = {
        commentId: 'required|numeric|commentExists'
    };
    let validator = new Validator(data , validationRule) ;
    await validator.checkAsync(()=>{
         next() ;
    } , ()=>{
        return res.json({msg:'failed' , errors:validator.errors.errors}) ;
    });    
};

const checkForReactionExistance = async (req,res,next)=>{
    let data = {
        reactionId:req.params.id
    };
    let validationRule = {
        reactionId: 'required|numeric|reactionExists'
    };
    let validator = new Validator(data , validationRule) ;
    await validator.checkAsync(()=>{
         next() ;
    } , ()=>{
        return res.json({msg:'failed' , errors:validator.errors.errors}) ;
    });    
};

const checkUserExistance = async (req ,res ,next)=>{
    let groupUser = await GroupUser.findOne({where:{groupId:req.params.groupId , userId: req.params.userId}}) ;
    if(!groupUser){
        return res.status(404).json({msg:'user not found'} ) ;
    }
    return next() ;
}
const checkModifyRole = async (req, res, next)=>{
    let states = ['kicked' ,'normal', 'Admin' ] ;
    let validationRule = {
        state:`required|in:${states.join(',')}`
    };
    let validator = new Validator(req.body.state , validationRule) ;
    if(validator.passes()){
        return next() ; 
    }
    return res.status(400).json({msg:'failed' , errors: validator.errors.errors});
}
let groupValidation ={
    checkGroupData ,
    checkForGroupExistance,
    checkUserExistance,
    checkModifyRole,
    checkPostData,
    checkForCommentExistance,
    checkForPostExistance,
    checkForReactionExistance
};
module.exports = groupValidation ; 