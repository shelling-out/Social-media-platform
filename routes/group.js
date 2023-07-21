const path=require('path');
const express=require('express');
const router=express.Router();

// const {}=require(path.join(__dirname,'..','middlewares','validation'));
const {groupController} = require(path.join(__dirname , '..' , 'controllers' )) ;
const groupAdmin = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' , 'groupAdmin.js')) ; 

router.get('/'                                          , groupController.MyGroups );
router.post('/'                                         , groupController.createGroup ) ;
router.patch('/:groupId'                    ,groupAdmin , groupController.editGroup ) ; 
router.delete('/:groupId'                   ,groupAdmin , groupController.deleteGroup ) ;
router.get('/my'                                        , groupController.MyGroups ) ;

router.post('/join/:groupId'                            , groupController.joinRequest ) ;
router.get('/join/:groupId'                 ,groupAdmin , groupController.showJoinRequests );
router.post('/join/:groupId/:userId'        ,groupAdmin , groupController.modifyRole ); 
router.get('/members/:groupId'                          , groupController.groupMemebers );

module.exports = router;