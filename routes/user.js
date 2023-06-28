const path=require('path');
const express=require('express');
const router=express.Router();
const {userController}=require(path.join(__dirname,'..','controllers'));
const {userValidation}=require(path.join(__dirname,'..','middlewares','validation'));


router.get('/profile/:id',userValidation.checkIdUserExestence,userController.getUser);


module.exports = router;