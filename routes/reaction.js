const path=require('path');
const express=require('express');
const router=express.Router();
const {reactionController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,postValidation,reactionValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const reactionOwnerShip=require(path.join(__dirname,'..','middlewares','authorization','reactionOwner'));


router.post('/add/:id',
    postValidation.checkIdPostExestence,
    reactionValidation.reactOnceOnly,
    reactionValidation.reactionData,
    reactionController.createReaction
);

router.patch('/edit/:id',
    reactionValidation.checkIdReactionExestence,
    reactionOwnerShip,
    reactionValidation.reactionData,
    reactionController.editReaction  
);

router.delete('/delete/:id',
    reactionValidation.checkIdReactionExestence,
    reactionOwnerShip,
    reactionController.deleteReaction
);




module.exports=router;