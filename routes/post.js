const path=require('path');
const express=require('express');
const router=express.Router();
const {postController}=require(path.join(__dirname,'..','controllers'));

router.post('/create',postController.createPost);

module.exports = router;