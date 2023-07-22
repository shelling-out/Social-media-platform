const path=require('path');
const { StatusCodes } = require('http-status-codes')
const {User,Relationship}=require(path.join(__dirname,'..','models'));


const createRequest=async(req,res)=>
{
    let firstUserId=req.user.id;
    let secondUserId=req.params.id;
    const relathionship= await Relationship.create({
        firstUserId:firstUserId,
        secondUserId:secondUserId,
        state:"pending",
    });
    res.status(StatusCodes.CREATED).json({msg:"request sent successfully",relationship:relathionship.dataValues});
};

const releationshipController={
    createRequest
};
module.exports=releationshipController;