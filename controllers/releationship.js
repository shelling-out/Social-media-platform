const path=require('path');
const { StatusCodes } = require('http-status-codes');
const {User,Relationship}=require(path.join(__dirname,'..','models'));
const { Op ,Sequelize} = require('sequelize');


const createRequest=async(req,res)=>
{
    let firstUserId=req.user.id;
    let secondUserId=req.params.id;
    const relationship= await Relationship.create({
        firstUserId:firstUserId,
        secondUserId:secondUserId,
        state:"pending",
    });
    res.status(StatusCodes.CREATED).json({msg:"request sent successfully",relationship:relationship.dataValues});
};

const getSentRequests=async(req,res)=>
{
    let id=req.user.id;
    let requests=await Relationship.findAll({
        include:[
            {
                model: User,
                as:'secondUser',
                attributes: ['id','username', 'picturePath']   
            },
        ],
        where:{
            firstUserId:id,
            state:"pending",
        },
    });
    requests = JSON.stringify(requests.map((item) => {
        const { secondUser, ...rest } = item.toJSON();
        return {
          requestRecevier: secondUser,
          ...rest
        };
    }));
    requests = JSON.parse(requests);
    res.status(StatusCodes.OK).json(requests);
};

const getReceivedRequests=async(req,res)=>
{
    let id=req.user.id;
    let requests=await Relationship.findAll({
        include:[
            {
                model: User,
                as:'firstUser',
                attributes: ['id','username', 'picturePath']   
            },
        ],
        where:{
            secondUserId:id,
            state:"pending",
        },
    });
    requests.forEach((request) => {
        request.state = "received";
    });
    requests = JSON.stringify(requests.map((item) => {
        const { firstUser, ...rest } = item.toJSON();
        return {
          requestSender: firstUser,
          ...rest
        };
    }));
    requests = JSON.parse(requests);
    res.status(StatusCodes.OK).json(requests);
};


const deletePendingRequest=async(req,res)=>
{
    let requestId=req.params.id;
    const result=await Relationship.destroy({ where: { id: requestId }});
    res.status(StatusCodes.OK).json({msg:"request has been deleted"});
};

const acceptRequest=async(req,res)=>
{
    let patchUpdate={};
    patchUpdate.state="friends";
    await Relationship.update(patchUpdate, {where: {id:req.params.id}});
    const relationship=await Relationship.findOne({ where: { id: req.params.id }});
    res.status(StatusCodes.OK).json({msg:`request accepted successfully .. you are friends now !!`,relationship:relationship.dataValues});
};

const deleteFriend=async(req,res)=>
{
    let firstUserId=req.user.id;
    let secondUserId=req.params.id;
    const result=await Relationship.destroy({
        where:{
            [Op.or]: [
                {
                    firstUserId:firstUserId,
                    secondUserId:secondUserId,
                    state:"friends"
                },
                {
                    firstUserId:secondUserId,
                    secondUserId:firstUserId,
                    state:"friends"
                }
            ] 
        }
    });
    res.status(StatusCodes.OK).json({msg:"friend has been removed"});
};

const getMyFriends=async(req,res)=>
{
    let id=req.user.id;
    let query1=await Relationship.findAll({
        include:[
            {
                model: User,
                as:'secondUser',
                attributes: ['id','username', 'picturePath']   
            },
        ],
        where:{
            firstUserId:id,
            state:"friends",
        },
    });
    query1 = JSON.stringify(query1.map((item) => {
        const { secondUser, ...rest } = item.toJSON();
        return {
          friend: secondUser,
          ...rest
        };
    }));
    query1 = JSON.parse(query1);
    let query2=await Relationship.findAll({
        include:[
            {
                model: User,
                as:'firstUser',
                attributes:['id','username', 'picturePath']   
            },
        ],
        where:{
            secondUserId:id,
            state:"friends",
        },
    });
    query2 = JSON.stringify(query2.map((item) => {
        const { firstUser, ...rest } = item.toJSON();
        return {
          friend: firstUser,
          ...rest
        };
    }));
    query2 = JSON.parse(query2);
    let friends=[...query1,...query2];
    res.status(StatusCodes.OK).json(friends);
}
const releationshipController={
    createRequest,
    getSentRequests,
    getReceivedRequests,
    deletePendingRequest,
    acceptRequest,
    deleteFriend,
    getMyFriends
};
module.exports=releationshipController;