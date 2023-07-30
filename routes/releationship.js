const path=require('path');
const express=require('express');
const router=express.Router();
const {releationshipController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,relationshipValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const relationshipAuth=require(path.join(__dirname,'..','middlewares','authorization','relationship.js'));

router.post('/sendFriendRequest/:id',
    userValidation.checkIdUserExestence,
    relationshipValidation.isItSelfLoop,
    relationshipValidation.pendingRequestOrInRelation,
    releationshipController.createRequest
);

router.get('/mySentRequests',releationshipController.getSentRequests);
router.get('/myReceivedRequests',releationshipController.getReceivedRequests);

router.delete('/request/:id',
    relationshipValidation.checkIdRelationshipExestence,
    relationshipAuth.isPartInTheRelation,
    relationshipValidation.isPendingRequest,
    relationshipAuth.isSender,
    releationshipController.deletePendingRequest,
);

router.post('/response/accept/:id',
    relationshipValidation.checkIdRelationshipExestence,
    relationshipAuth.isPartInTheRelation,
    relationshipValidation.isPendingRequest,
    relationshipAuth.isReceiver,
    releationshipController.acceptRequest
);

router.delete('/response/reject/:id',
    relationshipValidation.checkIdRelationshipExestence,
    relationshipAuth.isPartInTheRelation,
    relationshipValidation.isPendingRequest,
    relationshipAuth.isReceiver,
    releationshipController.deletePendingRequest
);

router.delete('/removeFriend/:id',
    userValidation.checkIdUserExestence,
    relationshipValidation.isItSelfLoop,
    relationshipAuth.isMyFriend,
    releationshipController.deleteFriend
);

router.get('/myFriends',
    releationshipController.getMyFriends
);
module.exports = router;