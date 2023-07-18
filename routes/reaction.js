const path=require('path');
const express=require('express');
const router=express.Router();
const {reactionController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,postValidation,reactionValidation}=require(path.join(__dirname,'..','middlewares','validation'));


router.post('/add/:id',
    postValidation.checkIdPostExestence,
    reactionValidation.reactOnceOnly,
    reactionValidation.reactionData,
    reactionController.createReaction
);







module.exports=router;