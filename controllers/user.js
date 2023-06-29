const path=require('path');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { StatusCodes } = require('http-status-codes')
const {User}=require(path.join(__dirname,'..','models'));

const getUser=async(req,res)=>
{
    const user=await User.findOne({where:{id:req.params.id},attributes:{exclude:['password','socket_io_id','refreshToken']}});
    res.status(StatusCodes.OK).json(user);
};

const updateUser=async(req,res)=>
{
    res.sendStatus(200);
};

const deleteUser=async(req,res)=>
{
    res.sendStatus(200);
};


const userController={
    getUser,
    updateUser,
    deleteUser,
};
module.exports=userController;