const path=require('path');
const express=require('express');
const router=express.Router();
const {releationshipController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,relationshipValidation}=require(path.join(__dirname,'..','middlewares','validation'));


router.get('/sendFriendRequest/:id',
    userValidation.checkIdUserExestence,
    relationshipValidation.isItSelfLoop,
    relationshipValidation.pendingRequestOrInRelation,
    releationshipController.createRequest
);




module.exports = router;