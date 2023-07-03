const path=require('path');
const express=require('express');
const router=express.Router();
const {postController}=require(path.join(__dirname,'..','controllers'));
const {postValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const postOwnerShip=require(path.join(__dirname,'..','middlewares','authorization','postOwner'));
const uploadImage=require(path.join(__dirname,'..','middlewares','uploadImage'));


router.post('/create',uploadImage,postController.createPost);
router.patch('/edit/:id',postValidation.checkIdPostExestence,postOwnerShip,uploadImage,postController.editPost);

module.exports = router;