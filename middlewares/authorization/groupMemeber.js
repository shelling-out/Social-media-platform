const path=require('path');
const {GroupUser}=require(path.join(__dirname,'..','..','models'));

const groupMemeber =async(req,res,next)=>
{
    let user = req.user; 
    let groupUser = await GroupUser.findOne({where:{userId:user.id , groupId: req.params.groupId }}) ;
    if(!groupUser){
        return res.status(404).json({msg:"Group Not found "});
    }
    if((groupUser.state == 'pending' || groupUser.state == 'kicked')){
        return res.status(400).json({msg:"Forbidden Operation Not allowed"});
    }
    return next();
};

module.exports= groupMemeber  ;

