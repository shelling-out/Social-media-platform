const path=require('path');
const express=require('express');
const router=express.Router();

const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerDocument=require(path.join(__dirname,'..','config','documentation.js'));

const authRouter=require(path.join(__dirname,'authentication.js'));


router.get('/', (req, res) =>{
    res.send('<h1>Social Media Application API</h1><a href="/api-docs">Documentation</a>');
});
router.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
router.use('/api/auth',authRouter);



module.exports=router;