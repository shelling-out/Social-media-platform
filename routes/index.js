const path=require('path');
const express=require('express');
const router=express.Router();

const swaggerUI = require('swagger-ui-express');
const swaggerDocument=require(path.join(__dirname,'..','config','documentation.js'));

const DisableTryItOutPlugin=function(){
    return {
        statePlugins: {
            spec: {
                wrapSelectors: {
                    allowTryItOutFor: () => () => false
                }
            }
        }
    }
}
const options = {
    swaggerOptions: {
        plugins: [
             DisableTryItOutPlugin
        ]
    }
};


const authRouter=require(path.join(__dirname,'authentication.js'));
const userRouter=require(path.join(__dirname,'user.js'));
const postRouter=require(path.join(__dirname,'post.js'));
const commentRouter=require(path.join(__dirname,'comment.js'));
const reactionRouter=require(path.join(__dirname,'reaction.js'));

const authenticated=require(path.join(__dirname,'..','middlewares','authentication.js'));



router.get('/', (req, res) =>{
    res.send('<h1>Social Media Application API</h1><a href="/api-docs">Documentation</a>');
});
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument,options));
router.use('/api/auth',authRouter);
router.use('/api/user',authenticated,userRouter);
router.use('/api/post',authenticated,postRouter);
router.use('/api/comment',authenticated,commentRouter);
router.use('/api/reaction',authenticated,reactionRouter);


module.exports=router;