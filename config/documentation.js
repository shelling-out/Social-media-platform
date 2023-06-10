const path=require('path');
const reg_login_logout=require(path.join(__dirname,'docs','reg_login_logout'));

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
    }
}


module.exports=swaggerDocument;