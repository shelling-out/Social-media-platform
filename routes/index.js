const path=require('path');
const express=require('express');
const router=express.Router();

const authRouter=require(path.join(__dirname,'authentication.js'));


router.get('/',(req,res)=>{
    res.send('<h1>server is up</h1>');
});

router.use('/api/auth',authRouter);



module.exports=router;