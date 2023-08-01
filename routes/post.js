const path=require('path');
const express=require('express');
const router=express.Router();
const {postController}=require(path.join(__dirname,'..','controllers'));
const {userValidation,postValidation}=require(path.join(__dirname,'..','middlewares','validation'));
const {PostAuth}=require(path.join(__dirname,'..','middlewares','authorization'));
const uploadImage=require(path.join(__dirname,'..','middlewares','uploadImage'));


router.post('/create',uploadImage,postController.createPost);

router.patch('/edit/:id',
    postValidation.checkIdPostExestence,
    PostAuth.postOwnerShip,
    uploadImage,
    postController.editPost
);
router.delete('/delete/:id',
    postValidation.checkIdPostExestence,
    PostAuth.postOwnerShip,
    postController.deletePost
);


// add authorization for posts (user can show his posts and his friends posts only)
router.get('/:id',postValidation.checkIdPostExestence,postController.getPostById);
router.get('/all/:id',userValidation.checkIdUserExestence,postController.getAllPosts);

module.exports = router;