const path=require('path');
const express=require('express');
const router=express.Router();
const {userController}=require(path.join(__dirname,'..','controllers'));
const {userValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const accountOwnerShip=require(path.join(__dirname,'..','middlewares','authorization','accountOwner'));


router.get('/profile/:id',userValidation.checkIdUserExestence,userController.getUser);
router.patch('/profile/:id',userValidation.checkIdUserExestence,accountOwnerShip,userController.updateUser);
router.delete('/profile/:id',userValidation.checkIdUserExestence,accountOwnerShip,userController.deleteUser);




module.exports = router;