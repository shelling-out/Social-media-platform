const path=require('path');
const reg_login_logout=require(path.join(__dirname,'docs','reg_login_logout'));
const user=require(path.join(__dirname,'docs','user'));
const post=require(path.join(__dirname,'docs','post'));
const comment=require(path.join(__dirname,'docs','comment'));
const reaction=require(path.join(__dirname,'docs','reaction'));
const relationship=require(path.join(__dirname,'docs','relationship'));


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
            patch:user.updateProfileById,
            delete:user.deleteUserById
        },
        "/api/post/create":{
            post:post.createPost
        },
        "/api/post/edit/{id}":{
            patch:post.editPost,
        },
        "/api/post/delete/{id}":{
            delete:post.deletePost
        },
        "/api/post/{id}":{
            get:post.getPostById
        },
        "/api/post/all/{id}":{
            get:post.getAllPostsById
        },
        "/api/comment/add/{id}":{
            post:comment.createComment
        },
        "/api/comment/edit/{id}":{
            patch:comment.editComment
        },
        "/api/comment/delete/{id}":{
            delete:comment.deleteComment
        },
        "/api/comment/{id}":{
            get:comment.getCommentById
        },
        "/api/comment/all/{id}":{
            get:comment.getAllCommentsById
        },
        "/api/reaction/add/{id}":{
            post:reaction.createReaction
        },
        "/api/reaction/edit/{id}":{
            patch:reaction.editReaction
        },
        "/api/reaction/delete/{id}":{
            delete:reaction.deleteReaction
        },
        "/api/reaction/{id}":{
            get:reaction.getReactionById
        },
        "/api/reaction/all/{id}":{
            get:reaction.getAllReactionsById
        },
        "/api/relationship/sendFriendRequest/{id}":{
            post:relationship.createFriendRequest
        },
        "/api/relationship/mySentRequests":{
            get:relationship.getSentRequests
        },
        "/api/relationship/myReceivedRequests":{
            get:relationship.getReceivedRequests
        },
        "/api/relationship/request/{id}":{
            delete:relationship.deleteSentRequest
        },
        "/api/relationship/response/accept/{id}":{
            patch:relationship.acceptReceivedRequest
        },
    }
}


module.exports=swaggerDocument;