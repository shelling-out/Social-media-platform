const path=require('path');
const socketIO = require('socket.io');
const {User,Relationship,Chat}=require(path.join(__dirname,'..','models'));
const jwt = require('jsonwebtoken');
const { Op } = require('sequelize');


const initializeSocket=async(server)=>
{
    const io = socketIO(server);
    io.on('connection',async(socket)=>{

        console.log('A user connected');
        socket.on('Send Message',async(data) =>{
            try {
                console.log('triggerd');
                let authToken=null,user={};
                if(!data.token||!data.id||!data.message)
                    return;
                authToken=data.token;
                const payload = jwt.verify(authToken, process.env.ACCESS_TOKEN_SECRET);
                user = { id: payload.id, username: payload.username };
                let refreshToken=await User.findOne({where:{id:payload.id},attributes:['refreshToken']});
                refreshToken=refreshToken.dataValues.refreshToken;
                if(refreshToken===null||refreshToken!==authToken)
                    return;
                let firstUserId=user.id;
                let secondUserId=data.id;
                const found=await Relationship.findOne({
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
                if(!found)
                    return;

                let chatMessage= await Chat.create({
                    senderUserId:firstUserId,
                    reciverUserId:secondUserId,
                    message:data.message,
                });
                chatMessage=chatMessage.dataValues;
                socket.to(secondUserId).emit('Receive Message',{id:firstUserId,message:chatMessage});
            } catch (error) {
                console.log(error);
            }
        });
        socket.on('disconnect',async()=>{
            console.log('A user disconnected');
        });
  });
};

module.exports = initializeSocket;