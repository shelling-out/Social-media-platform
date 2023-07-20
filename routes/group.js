const path=require('path');
const express=require('express');
const router=express.Router();

// const {}=require(path.join(__dirname,'..','middlewares','validation'));
const groupController = require(path.join(__dirname , '..' , 'controllers' , 'group.js' )) ;
const groupAdmin = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' , 'groupAdmin.js')) ; 

router.get('/'              ,groupAdmin, groupController.MyGroups );
router.post('/'             ,groupAdmin ,  groupController.createGroup ) ;
router.patch('/:groupId'    ,groupAdmin , groupController.editGroup ) ; 
router.delete('/:groupId'   ,groupAdmin ,  groupController.deleteGroup ) ;
router.get('/my'                        , groupController.MyGroups ) ;

router.post('/join/:groupId'            , groupController.joinRequest ) ;
router.get('/join/:groupId' ,groupAdmin, groupController.showJoinRequests );

module.exports = router;