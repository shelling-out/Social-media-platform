const path = require('path') ;
const {Group , GroupUser , User }= require(path.join(__dirname , '..' , 'models'  )) ;



const createGroup = async (req , res) =>{
    let user = req.user ; 
    let group = await Group.create({groupName:req.body.groupName , groupDescription: req.body.groupDescription});
    let groupUser = await GroupUser.create({userId: user.id , groupId: group.id , state:'Owner'}) ; 
    return res.json({msg:'Group created successfully' , group: group}) ;
}

const deleteGroup = async (req , res)=>{
    let user = req.user ;
    await Group.destroy({where:{ id: req.params.groupId}}); 
    return res.json({msg:"Group deleted successfully"}); 
}
const editGroup = async (req , res )=>{
    let user = req.user ;
    let group = {} ;
    if(req.body.groupName){
        group.groupName = req.body.groupName ;
    }
    if(req.body.groupDescription){
        group.groupDescription = req.body.groupDescription ; 
    }
    let Updatedgroup = await Group.update(group , {where:{id: req.params.groupId}}) ;
    return res.json({msg:"group updated successfully" , group:Updatedgroup}) ;
}

const MyGroups = async (req , res )=>{
    let user =await User.findOne({where:{id:req.user.id} , include:Group } );
    return res.json({groups:user.groups});
}
const joinRequest = async (req , res )=>{
    let groupUser = await GroupUser.create({userId: req.user.id , groupId: req.params.groupId , state:'pending'}) ;
    return res.json({msg:'join request has been sent successfully'});
}
const showJoinRequests  = async (req , res )=>{
    let users = await GroupUser.findAll({ where:{groupId: req.params.groupId , state:'pending' },  include:{model:User , attributes:['username']  } , attributes:['userId' , 'state' , 'createdAt' ]}); 
    return res.json({users});
}
const modifyRole = async (req , res )=>{
    await GroupUser.update({state:'normal'} ,{where:{groupId: req.params.groupId , userId:req.params.userId }});
    return res.json({msg:'updated successfully' , newRole: req.body.state }) ;
}
const groupMemebers = async (req , res )=>{
    let users = await GroupUser.findAll({where:{groupId: req.params.groupId , state:['Admin' , 'Owner', 'normal' ]}}) ; 
    return res.json({users:users}) ;
}




let groupController = {
    createGroup ,
    editGroup,
    deleteGroup,
    MyGroups,
    joinRequest,
    modifyRole,
    showJoinRequests,
    groupMemebers

};
module.exports = groupController ;