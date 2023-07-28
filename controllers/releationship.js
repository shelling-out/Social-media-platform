const path=require('path');
const { StatusCodes } = require('http-status-codes')
const {User,Releationship}=require(path.join(__dirname,'..','models'));


const createRequest=async(req,res)=>
{
    res.sendStatus(200);
};

const releationshipController={
    createRequest
};
module.exports=releationshipController;