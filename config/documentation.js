const path=require('path');
const reg_login_logout=require(path.join(__dirname,'docs','reg_login_logout'));
const user=require(path.join(__dirname,'docs','user'));


  

const swaggerDocument=
{
    openapi:"3.0.0",
    info:{
        title:"Social Media Application Api",
        version:"0.8",
        description:"Documentation of the api .."
    },
    servers:[
        {
            url:String(process.env.SERVER_SIDE_URL),
            description:"local dev server"
        }
    ],
    paths:{
        "/api/auth/register":{
            post:reg_login_logout.register
        },
        "/api/auth/login":{
            post:reg_login_logout.login
        },
        "/api/auth/logout":{
            get:reg_login_logout.logout
        },
        "/api/user/profile/{id}":{
            get:user.getOneUserProfile,
            patch:user.updateProfileById
        },
    }
}


module.exports=swaggerDocument;