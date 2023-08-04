const path=require('path');
const express=require('express');

const router=express.Router();

// const {}=require(path.join(__dirname,'..','middlewares','validation'));
const {groupController, commentController , reactionController} = require(path.join(__dirname , '..' , 'controllers' )) ;
const {groupAuth} = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' )) ; 
const uploadImage = require(path.join(__dirname , '..' , 'middlewares' , 'uploadImage.js' )) ; 
const postMiddleware = require(path.join(__dirname , '..' , 'middlewares' , 'authorization' , 'post.js')) ;



router.get('/', groupController.MyGroups );
router.post('/', groupController.createGroup ) ;
router.get('/my', groupController.MyGroups ) ;
router.post('/:groupId/join', groupController.joinRequest ) ;
router.get('/:groupId/members', groupController.groupMemebers );
router.get('/:groupId', groupController.getGroup ) ;


// Posts
// need to be group member
router.post('/:groupId/post', [groupAuth.groupMember , uploadImage ], groupController.createPost  );

router.get('/:groupId/post', groupAuth.groupMember, groupController.getPosts ) ;
router.delete('/:groupId/post/:postId', groupAuth.groupMember , groupAuth.postOwnerOrAdmin , groupController.deletePost) ;
router.patch('/:groupId/post/:postId', groupAuth.groupMember , groupAuth.postOwner , groupController.editPost );
router.get('/:groupId/post/:postId', groupAuth.groupMember , groupController.getPost) ; 


// comments
// id for post
router.post('/:groupId/comment/:id', groupAuth.groupMember , commentController.createComment ) ;
router.patch('/:groupId/comment/:id', groupAuth.groupMember , groupAuth.commentOwner , commentController.editComment ) ; 
router.delete('/:groupId/comment/:id', groupAuth.groupMember , groupAuth.commentOwnerOrAdmin , commentController.deleteComment) ;
router.get('/:groupId/comment/:id', groupAuth.groupMember , commentController.getCommentById) ; 
// id for post 
router.get('/:groupId/comment/all/:id' , groupAuth.groupMember , commentController.getAllComments) ;



// reaction 
// id for post
router.post('/:groupId/reaction/:id', groupAuth.groupMember , reactionController.createReaction ) ;
router.patch('/:groupId/reaction/:id', groupAuth.groupMember , groupAuth.reactionOwner , reactionController.editReaction ) ; 
router.delete('/:groupId/reaction/:id', groupAuth.groupMember , groupAuth.reactionOwnerOrAdmin , reactionController.deleteReaction) ;
router.get('/:groupId/reaction/:id', groupAuth.groupMember , reactionController.getReactionById) ; 
// id for post 
router.get('/:groupId/reaction/all/:id' , groupAuth.groupMember , reactionController.getAllReactions) ;



// need admin privliages 
router.delete('/:groupId'                   ,groupAuth.groupAdmin , groupController.deleteGroup ) ;
router.patch('/:groupId'                    ,groupAuth.groupAdmin , groupController.editGroup ) ; 
router.get('/:groupId/join'                 ,groupAuth.groupAdmin , groupController.showJoinRequests );
router.post('/:groupId/join/:userId/'        ,groupAuth.groupAdmin , groupController.modifyRole ); 

module.exports = router;