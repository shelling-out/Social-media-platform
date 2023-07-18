const path=require('path');
const express=require('express');
const router=express.Router();
const {commentController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,postValidation,commentValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const commentOwnerShip=require(path.join(__dirname,'..','middlewares','authorization','commentOwner'));


router.post('/add/:id',postValidation.checkIdPostExestence,commentController.createComment);
router.patch('/edit/:id',commentValidation.checkIdCommentExestence,commentOwnerShip,commentController.editComment);
router.delete('/delete/:id',commentValidation.checkIdCommentExestence,commentOwnerShip,commentController.deleteComment);

// add authorization to get your comments or your friends comments
router.get('/:id',commentValidation.checkIdCommentExestence,commentController.getCommentById);
router.get('/all/:id',userValidation.checkIdUserExestence,commentController.getAllComments);

module.exports=router;