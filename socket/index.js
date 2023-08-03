const path=require('path');
const socketIO = require('socket.io');
const httpServer=require(path.join('..','server.js'));

const initializeSocket=async(server)=>
{
    const io = socketIO(server);

    io.on('connection',async(socket)=>{

        console.log('A user connected');
        socket.on('login', (user) => {
            // Generate a Socket.IO ID for the user
            const socketId = socket.id;
   
            // Store the Socket.IO ID in the database for the user
            // ...
   
            // Emit an event to confirm successful login
            console.log(socketId);
            console.log('success');
            socket.emit('loginSuccess', { socketId });
        });
        socket.on('register',async(userId) =>{
            socket.userId = userId;
            console.log(`User ${userId} registered with socket ID ${socket.id}`);
        });

        socket.on('chat message',async(data) =>{
            const recipientSocket = io.sockets.connected[data.recipientId];
            if (recipientSocket) {
                recipientSocket.emit('new message', {
                senderId: socket.userId,
                message: data.message,
                });
            }
        });

        socket.on('disconnect',async()=>{
            console.log('A user disconnected');
        });
  });
  return io;
};
const io=initializeSocket(httpServer);
module.exports = io;