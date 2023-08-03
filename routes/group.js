const path=require('path');
const express=require('express');

const router=express.Router();

// const {}=require(path.join(__dirname,'..','middlewares','validation'));
const {groupController} = require(path.join(__dirname , '..' , 'controllers' )) ;
const groupAdmin = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' , 'groupAdmin.js')) ; 
const groupMemeber = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' , 'groupMemeber.js')) ; 
const uploadImage = require(path.join(__dirname , '..' , 'middlewares' , 'uploadImage.js' )) ; 

router.get('/'                                          , groupController.MyGroups );
router.post('/'                                         , groupController.createGroup ) ;
router.get('/my'                                        , groupController.MyGroups ) ;
router.post('/join/:groupId'                            , groupController.joinRequest ) ;
router.get('/members/:groupId'                          , groupController.groupMemebers );
router.get('/:groupId'                                  , groupController.getGroup ) ;

// need admin privliages 
router.delete('/:groupId'                   ,groupAdmin , groupController.deleteGroup ) ;
router.patch('/:groupId'                    ,groupAdmin , groupController.editGroup ) ; 
router.get('/join/:groupId'                 ,groupAdmin , groupController.showJoinRequests );
router.post('/join/:groupId/:userId'        ,groupAdmin , groupController.modifyRole ); 

module.exports = router;