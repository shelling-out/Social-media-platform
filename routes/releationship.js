const path=require('path');
const express=require('express');
const router=express.Router();
const {releationshipController}=require(path.join(__dirname,'..','controllers'));



router.get('/',releationshipController.createRequest);




module.exports = router;