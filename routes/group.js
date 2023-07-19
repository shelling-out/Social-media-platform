const path=require('path');
const express=require('express');
const router=express.Router();

// const {}=require(path.join(__dirname,'..','middlewares','validation'));
const groupController = require(path.join(__dirname , '..' , 'controllers' )) ;

router.post('/create' , groupController.create ) ;

module.exports = router;