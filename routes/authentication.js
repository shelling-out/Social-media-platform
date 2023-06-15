const path=require('path');
const express=require('express');
const router=express.Router();
const {authController}=require(path.join(__dirname,'..','controllers'));
const {authValidation}=require(path.join(__dirname,'..','middlewares','validation'));



router.post('/register',authValidation.register,authController.register);
router.post('/login',authValidation.login,authController.login);

module.exports = router;




