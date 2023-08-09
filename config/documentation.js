const path=require('path');
const reg_login_logout=require(path.join(__dirname,'docs','reg_login_logout'));
const user=require(path.join(__dirname,'docs','user'));
const post=require(path.join(__dirname,'docs','post'));
const comment=require(path.join(__dirname,'docs','comment'));
const reaction=require(path.join(__dirname,'docs','reaction'));
const relationship=require(path.join(__dirname,'docs','relationship'));
const home=require(path.join(__dirname,'docs','home'));
const chat=require(path.join(__dirname,'docs','chat'));

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
        "/api/home/search{?text=queryString}":{
            get:home.search
        },
        "/api/home/news":{
            get:home.news
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
        "/api/relationship/response/reject/{id}":{
            delete:relationship.rejectReceivedRequest
        },
        "/api/relationship/removeFriend/{id}":{
            delete:relationship.removeFriend
        },
        "/api/relationship/myFriends":{
            get:relationship.getMyFriends
        },
        "/api/relationship/blockAFriend/{id}":{
            patch:relationship.blockAFriend
        },
        "/api/relationship/unblockAUser/{id}":{
            patch:relationship.unBlockAUser
        },
        "/api/relationship/myBlockedList":{
            get:relationship.getBlockedList
        },
        "/api/relationship/whoBlockedMeList":{
            get:relationship.getListOfPersonsWhoBlockedMe
        },
        "/api/chat/messages/{id}":{
            get:chat.getMessages
        },
        "/group": {
            "post": {
            "tags": [
                "group"
            ],
            "summary": "Create Group",
            "operationId": "CreateGroup",
            "parameters": [],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/CreateGroupRequest"
                        },
                        {
                        "example": {
                            "groupName": "name",
                            "groupDescription": "des..."
                        }
                        }
                    ]
                    },
                    "example": {
                    "groupName": "name",
                    "groupDescription": "des..."
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK"
                        },
                        {
                            "example": {
                            "msg": "Group created successfully",
                            "group": {
                                "createdAt": "2023-08-08T13:03:58.695Z",
                                "updatedAt": "2023-08-08T13:03:58.696Z",
                                "id": 2,
                                "groupName": "name",
                                "groupDescription": "des..."
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Group created successfully",
                        "group": {
                        "createdAt": "2023-08-08T13:03:58.695Z",
                        "updatedAt": "2023-08-08T13:03:58.696Z",
                        "id": 2,
                        "groupName": "name",
                        "groupDescription": "des..."
                        }
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequest1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupName": [
                                "The groupName field is required."
                                ],
                                "groupDescription": [
                                "The groupDescription field is required."
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupName": [
                            "The groupName field is required."
                        ],
                        "groupDescription": [
                            "The groupDescription field is required."
                        ]
                        }
                    }
                    }
                }
                },
                "401": {
                "description": "Unauthorized",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/UnAuthorized1"
                        },
                        {
                            "example": {
                            "msg": "Authentication invalid"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Authentication invalid"
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{id}": {
            "delete": {
            "tags": [
                "group"
            ],
            "summary": "Delete Group (Admin)",
            "operationId": "DeleteGroup(Admin)",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK4"
                        },
                        {
                            "example": {
                            "msg": "Group deleted successfully"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Group deleted successfully"
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/NotAdmin1"
                        },
                        {
                            "example": {
                            "msg": "Forbidden Operation Not allowed"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Forbidden Operation Not allowed"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/NotFound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "get": {
            "tags": [
                "group"
            ],
            "summary": "Get Group",
            "operationId": "GetGroup",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK_12"
                        },
                        {
                            "example": {
                            "msg": "success",
                            "group": {
                                "id": 1,
                                "groupName": "name",
                                "groupDescription": "des...",
                                "groupPicture": null,
                                "createdAt": "2023-08-01T23:10:34.000Z",
                                "updatedAt": "2023-08-08T13:06:11.000Z"
                            },
                            "role": "Owner"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "success",
                        "group": {
                        "id": 1,
                        "groupName": "name",
                        "groupDescription": "des...",
                        "groupPicture": null,
                        "createdAt": "2023-08-01T23:10:34.000Z",
                        "updatedAt": "2023-08-08T13:06:11.000Z"
                        },
                        "role": "Owner"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/GroupNotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "patch": {
            "tags": [
                "group"
            ],
            "summary": "Edit Group",
            "operationId": "EditGroup",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "string"
                },
                "required": true
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/EditGroupRequest"
                        },
                        {
                        "example": {
                            "groupName": "name",
                            "groupDescription": "des..."
                        }
                        }
                    ]
                    },
                    "example": {
                    "groupName": "name",
                    "groupDescription": "des..."
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK1"
                        },
                        {
                            "example": {
                            "msg": "group updated successfully",
                            "group": [
                                1
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "group updated successfully",
                        "group": [
                        1
                        ]
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequest1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupName": [
                                "The groupName field is required."
                                ],
                                "groupDescription": [
                                "The groupDescription field is required."
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupName": [
                            "The groupName field is required."
                        ],
                        "groupDescription": [
                            "The groupDescription field is required."
                        ]
                        }
                    }
                    }
                }
                },
                "401": {
                "description": "Unauthorized",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/UnAuthroized1"
                        },
                        {
                            "example": {
                            "msg": "Authentication invalid"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Authentication invalid"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/GroupNotfound1"
                        },
                        {
                            "example": {
                            "msg": "Group Not found "
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Group Not found "
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/my": {
            "get": {
            "tags": [
                "group"
            ],
            "summary": "My Groups",
            "operationId": "MyGroups",
            "parameters": [],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK2"
                        },
                        {
                            "example": {
                            "groups": [
                                {
                                "id": 1,
                                "groupName": "name",
                                "groupDescription": "des...",
                                "groupPicture": null,
                                "createdAt": "2023-08-01T23:10:34.000Z",
                                "updatedAt": "2023-08-08T13:06:11.000Z",
                                "GroupUser": {
                                    "id": 1,
                                    "groupId": 1,
                                    "userId": 2,
                                    "state": "Owner",
                                    "createdAt": "2023-08-01T23:10:34.000Z",
                                    "updatedAt": "2023-08-01T23:10:34.000Z",
                                    "GroupId": 1,
                                    "UserId": 2
                                }
                                },
                                {
                                "id": 2,
                                "groupName": "name",
                                "groupDescription": "des...",
                                "groupPicture": null,
                                "createdAt": "2023-08-08T13:03:58.000Z",
                                "updatedAt": "2023-08-08T13:03:58.000Z",
                                "GroupUser": {
                                    "id": 2,
                                    "groupId": 2,
                                    "userId": 2,
                                    "state": "Owner",
                                    "createdAt": "2023-08-08T13:03:59.000Z",
                                    "updatedAt": "2023-08-08T13:03:59.000Z",
                                    "GroupId": 2,
                                    "UserId": 2
                                }
                                }
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "groups": [
                        {
                            "id": 1,
                            "groupName": "name",
                            "groupDescription": "des...",
                            "groupPicture": null,
                            "createdAt": "2023-08-01T23:10:34.000Z",
                            "updatedAt": "2023-08-08T13:06:11.000Z",
                            "GroupUser": {
                            "id": 1,
                            "groupId": 1,
                            "userId": 2,
                            "state": "Owner",
                            "createdAt": "2023-08-01T23:10:34.000Z",
                            "updatedAt": "2023-08-01T23:10:34.000Z",
                            "GroupId": 1,
                            "UserId": 2
                            }
                        },
                        {
                            "id": 2,
                            "groupName": "name",
                            "groupDescription": "des...",
                            "groupPicture": null,
                            "createdAt": "2023-08-08T13:03:58.000Z",
                            "updatedAt": "2023-08-08T13:03:58.000Z",
                            "GroupUser": {
                            "id": 2,
                            "groupId": 2,
                            "userId": 2,
                            "state": "Owner",
                            "createdAt": "2023-08-08T13:03:59.000Z",
                            "updatedAt": "2023-08-08T13:03:59.000Z",
                            "GroupId": 2,
                            "UserId": 2
                            }
                        }
                        ]
                    }
                    }
                }
                },
                "401": {
                "description": "Unauthorized",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/UnAuthorized1"
                        },
                        {
                            "example": {
                            "msg": "Authentication invalid"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Authentication invalid"
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{id}/join": {
            "post": {
            "tags": [
                "group"
            ],
            "summary": "Join Request",
            "operationId": "JoinRequest",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Canceling"
                        },
                        {
                            "example": {
                            "msg": "canceled successfully"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "canceled successfully"
                    }
                    }
                }
                },
                "401": {
                "description": "Unauthorized",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/UnAuthorized1"
                        },
                        {
                            "example": {
                            "msg": "Authentication invalid"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Authentication invalid"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/GroupNotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "get": {
            "tags": [
                "group"
            ],
            "summary": "get Join Requests (Admin)",
            "operationId": "getJoinRequests(Admin)",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK3"
                        },
                        {
                            "example": {
                            "users": [
                                {
                                "userId": 2,
                                "state": "pending",
                                "createdAt": "2023-08-08T13:20:45.000Z",
                                "User": {
                                    "username": "potatUser"
                                }
                                }
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "users": [
                        {
                            "userId": 2,
                            "state": "pending",
                            "createdAt": "2023-08-08T13:20:45.000Z",
                            "User": {
                            "username": "potatUser"
                            }
                        }
                        ]
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/NotAdmin1"
                        },
                        {
                            "example": {
                            "msg": "Forbidden Operation Not allowed"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Forbidden Operation Not allowed"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/GroupNotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{id}/members": {
            "get": {
            "tags": [
                "group"
            ],
            "summary": "Members",
            "operationId": "Members",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK5"
                        },
                        {
                            "example": {
                            "users": [
                                {
                                "id": 1,
                                "groupId": 1,
                                "userId": 2,
                                "state": "Owner",
                                "createdAt": "2023-08-01T23:10:34.000Z",
                                "updatedAt": "2023-08-01T23:10:34.000Z",
                                "GroupId": 1,
                                "UserId": 2
                                }
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "users": [
                        {
                            "id": 1,
                            "groupId": 1,
                            "userId": 2,
                            "state": "Owner",
                            "createdAt": "2023-08-01T23:10:34.000Z",
                            "updatedAt": "2023-08-01T23:10:34.000Z",
                            "GroupId": 1,
                            "UserId": 2
                        }
                        ]
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/NotFound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{id}/modifyRole/3": {
            "post": {
            "tags": [
                "group"
            ],
            "summary": "Modify Role (Admin)",
            "operationId": "ModifyRole(Admin)",
            "parameters": [
                {
                "in": "path",
                "name": "id",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/ModifyRoleAdminRequest"
                        },
                        {
                        "example": {
                            "state": "kicked"
                        }
                        }
                    ]
                    },
                    "example": {
                    "state": "kicked"
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK_11"
                        },
                        {
                            "example": {
                            "msg": "updated successfully",
                            "newRole": "normal"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "updated successfully",
                        "newRole": "normal"
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/NewRequest1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "state": [
                                "The state field is required."
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "state": [
                            "The state field is required."
                        ]
                        }
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/usernotfound1"
                        },
                        {
                            "example": {
                            "msg": "user not found"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "user not found"
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/post": {
            "get": {
            "tags": [
                "Group Post"
            ],
            "summary": "Get Posts",
            "operationId": "GetPosts",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK8"
                        },
                        {
                            "example": {
                            "posts": [
                                {
                                "postId": 5,
                                "Post": {
                                    "id": 5,
                                    "text": "potato",
                                    "picture": null,
                                    "createdAt": "2023-08-04T12:46:53.000Z",
                                    "state": null,
                                    "updatedAt": "2023-08-04T12:46:53.000Z",
                                    "userId": 2,
                                    "UserId": 2,
                                    "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                    },
                                    "Comments": [
                                    {
                                        "id": 3,
                                        "text": "comment",
                                        "createdAt": "2023-08-04T13:07:37.000Z",
                                        "updatedAt": "2023-08-04T13:07:37.000Z",
                                        "userId": 2,
                                        "postId": 5,
                                        "User": {
                                        "id": 2,
                                        "username": "potatUser",
                                        "picturePath": "image-1691430498994.png"
                                        }
                                    }
                                    ],
                                    "Reactions": []
                                }
                                },
                                {
                                "postId": 2,
                                "Post": {
                                    "id": 2,
                                    "text": null,
                                    "picture": null,
                                    "createdAt": "2023-08-03T22:09:14.000Z",
                                    "state": null,
                                    "updatedAt": "2023-08-03T22:09:14.000Z",
                                    "userId": 2,
                                    "UserId": 2,
                                    "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                    },
                                    "Comments": [],
                                    "Reactions": []
                                }
                                },
                                {
                                "postId": 3,
                                "Post": {
                                    "id": 3,
                                    "text": "potato",
                                    "picture": null,
                                    "createdAt": "2023-08-04T11:05:34.000Z",
                                    "state": null,
                                    "updatedAt": "2023-08-04T11:05:34.000Z",
                                    "userId": 2,
                                    "UserId": 2,
                                    "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                    },
                                    "Comments": [],
                                    "Reactions": []
                                }
                                },
                                {
                                "postId": 6,
                                "Post": {
                                    "id": 6,
                                    "text": null,
                                    "picture": null,
                                    "createdAt": "2023-08-08T13:53:26.000Z",
                                    "state": "private",
                                    "updatedAt": "2023-08-08T13:53:26.000Z",
                                    "userId": 2,
                                    "UserId": 2,
                                    "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                    },
                                    "Comments": [],
                                    "Reactions": []
                                }
                                }
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "posts": [
                        {
                            "postId": 5,
                            "Post": {
                            "id": 5,
                            "text": "potato",
                            "picture": null,
                            "createdAt": "2023-08-04T12:46:53.000Z",
                            "state": null,
                            "updatedAt": "2023-08-04T12:46:53.000Z",
                            "userId": 2,
                            "UserId": 2,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            },
                            "Comments": [
                                {
                                "id": 3,
                                "text": "comment",
                                "createdAt": "2023-08-04T13:07:37.000Z",
                                "updatedAt": "2023-08-04T13:07:37.000Z",
                                "userId": 2,
                                "postId": 5,
                                "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                }
                                }
                            ],
                            "Reactions": []
                            }
                        },
                        {
                            "postId": 2,
                            "Post": {
                            "id": 2,
                            "text": null,
                            "picture": null,
                            "createdAt": "2023-08-03T22:09:14.000Z",
                            "state": null,
                            "updatedAt": "2023-08-03T22:09:14.000Z",
                            "userId": 2,
                            "UserId": 2,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            },
                            "Comments": [],
                            "Reactions": []
                            }
                        },
                        {
                            "postId": 3,
                            "Post": {
                            "id": 3,
                            "text": "potato",
                            "picture": null,
                            "createdAt": "2023-08-04T11:05:34.000Z",
                            "state": null,
                            "updatedAt": "2023-08-04T11:05:34.000Z",
                            "userId": 2,
                            "UserId": 2,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            },
                            "Comments": [],
                            "Reactions": []
                            }
                        },
                        {
                            "postId": 6,
                            "Post": {
                            "id": 6,
                            "text": null,
                            "picture": null,
                            "createdAt": "2023-08-08T13:53:26.000Z",
                            "state": "private",
                            "updatedAt": "2023-08-08T13:53:26.000Z",
                            "userId": 2,
                            "UserId": 2,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            },
                            "Comments": [],
                            "Reactions": []
                            }
                        }
                        ]
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestnotmember5"
                        },
                        {
                            "example": {
                            "msg": "Forbidden Operation Not allowed"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Forbidden Operation Not allowed"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestgroupnotfound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "post": {
            "tags": [
                "Group Post"
            ],
            "summary": "Create Post",
            "operationId": "CreatePost",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "text/plain": {
                    "schema": {
                    "type": "object",
                    "example": {}
                    },
                    "example": {}
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK6"
                        },
                        {
                            "example": {
                            "msg": "Post created successfully",
                            "post": {
                                "createdAt": "2023-08-08T14:29:12.156Z",
                                "updatedAt": "2023-08-08T14:29:12.159Z",
                                "id": 7,
                                "userId": 2,
                                "text": "creating new post",
                                "state": "private"
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Post created successfully",
                        "post": {
                        "createdAt": "2023-08-08T14:29:12.156Z",
                        "updatedAt": "2023-08-08T14:29:12.159Z",
                        "id": 7,
                        "userId": 2,
                        "text": "creating new post",
                        "state": "private"
                        }
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequestnotmember1"
                        },
                        {
                            "example": {
                            "msg": "Forbidden Operation Not allowed"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Forbidden Operation Not allowed"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/GroupNotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/post/{postId}": {
            "get": {
            "tags": [
                "Group Post"
            ],
            "summary": "Get Post",
            "operationId": "GetPost",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK7"
                        },
                        {
                            "example": {
                            "msg": "success",
                            "post": {
                                "id": 1,
                                "text": "text for post",
                                "picture": null,
                                "createdAt": "2023-08-01T23:19:00.000Z",
                                "state": "public",
                                "updatedAt": "2023-08-01T23:19:00.000Z",
                                "userId": 2,
                                "commentsCount": 1,
                                "likesCount": 0,
                                "dislikesCount": 0,
                                "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                                },
                                "Comments": [
                                {
                                    "id": 1,
                                    "text": "comment text",
                                    "createdAt": "2023-08-01T23:19:40.000Z",
                                    "updatedAt": "2023-08-01T23:19:40.000Z",
                                    "userId": 2,
                                    "postId": 1,
                                    "User": {
                                    "id": 2,
                                    "username": "potatUser",
                                    "picturePath": "image-1691430498994.png"
                                    }
                                }
                                ],
                                "Reactions": []
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "success",
                        "post": {
                        "id": 1,
                        "text": "text for post",
                        "picture": null,
                        "createdAt": "2023-08-01T23:19:00.000Z",
                        "state": "public",
                        "updatedAt": "2023-08-01T23:19:00.000Z",
                        "userId": 2,
                        "commentsCount": 1,
                        "likesCount": 0,
                        "dislikesCount": 0,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        },
                        "Comments": [
                            {
                            "id": 1,
                            "text": "comment text",
                            "createdAt": "2023-08-01T23:19:40.000Z",
                            "updatedAt": "2023-08-01T23:19:40.000Z",
                            "userId": 2,
                            "postId": 1,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            }
                            }
                        ],
                        "Reactions": []
                        }
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequestnotmember1"
                        },
                        {
                            "example": {
                            "msg": "Forbidden Operation Not allowed"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "Forbidden Operation Not allowed"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequestpostnotfound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "patch": {
            "tags": [
                "Group Post"
            ],
            "summary": "Edit post",
            "operationId": "Editpost",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/EditpostRequest"
                        },
                        {
                        "example": {
                            "text": "editing"
                        }
                        }
                    ]
                    },
                    "example": {
                    "text": "editing"
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK4"
                        },
                        {
                            "example": {
                            "msg": "post updated successfully"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "post updated successfully"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestpostnotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "delete": {
            "tags": [
                "Group Post"
            ],
            "summary": "Delete Post",
            "operationId": "DeletePost",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK4"
                        },
                        {
                            "example": {
                            "msg": "success"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "success"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestpostnotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/comment/{postId}": {
            "post": {
            "tags": [
                "Group Comment"
            ],
            "summary": "Create Comment",
            "operationId": "CreateComment",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "text/plain": {
                    "schema": {
                    "type": "object",
                    "example": {}
                    },
                    "example": {}
                }
                },
                "required": true
            },
            "responses": {
                "201": {
                "description": "Created",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK13"
                        },
                        {
                            "example": {
                            "createdAt": "2023-08-08T15:50:59.292Z",
                            "updatedAt": "2023-08-08T15:50:59.294Z",
                            "id": 4,
                            "userId": 2,
                            "postId": "5",
                            "text": "comment"
                            }
                        }
                        ]
                    },
                    "example": {
                        "createdAt": "2023-08-08T15:50:59.292Z",
                        "updatedAt": "2023-08-08T15:50:59.294Z",
                        "id": 4,
                        "userId": 2,
                        "postId": "5",
                        "text": "comment"
                    }
                    }
                }
                },
                "400": {
                "description": "Bad Request",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequest5"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "text": [
                                "The text field is required."
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "text": [
                            "The text field is required."
                        ]
                        }
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestpostnotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/comment/{commentId}": {
            "patch": {
            "tags": [
                "Group Comment"
            ],
            "summary": "Edit Comment",
            "operationId": "EditComment",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "commentId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the comment Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/EditCommentRequest"
                        },
                        {
                        "example": {
                            "text": "editing.."
                        }
                        }
                    ]
                    },
                    "example": {
                    "text": "editing.."
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK14"
                        },
                        {
                            "example": {
                            "id": 3,
                            "text": "editing..",
                            "createdAt": "2023-08-04T13:07:37.000Z",
                            "updatedAt": "2023-08-08T16:12:56.000Z",
                            "userId": 2,
                            "postId": 5
                            }
                        }
                        ]
                    },
                    "example": {
                        "id": 3,
                        "text": "editing..",
                        "createdAt": "2023-08-04T13:07:37.000Z",
                        "updatedAt": "2023-08-08T16:12:56.000Z",
                        "userId": 2,
                        "postId": 5
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequestcommentnotfound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "commentId": [
                                "comment ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "commentId": [
                            "comment ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "get": {
            "tags": [
                "Group Comment"
            ],
            "summary": "get Comment",
            "operationId": "getComment",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "commentId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the comment Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK15"
                        },
                        {
                            "example": {
                            "id": 4,
                            "text": "comment",
                            "createdAt": "2023-08-08T15:50:59.000Z",
                            "updatedAt": "2023-08-08T15:50:59.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "id": 4,
                        "text": "comment",
                        "createdAt": "2023-08-08T15:50:59.000Z",
                        "updatedAt": "2023-08-08T15:50:59.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                        "id": 2,
                        "username": "potatUser",
                        "picturePath": "image-1691430498994.png"
                        }
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestcommentnotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "commentId": [
                                "comment ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "commentId": [
                            "comment ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "delete": {
            "tags": [
                "Group Comment"
            ],
            "summary": "Deleting Comment",
            "operationId": "DeletingComment",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "commentId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the comment Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK4"
                        },
                        {
                            "example": {
                            "msg": "comment has been deleted"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "comment has been deleted"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequest13"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "commentId": [
                                "comment ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "commentId": [
                            "comment ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/comment/all/{postId}": {
            "get": {
            "tags": [
                "Group Comment"
            ],
            "summary": "All Post's Comments",
            "operationId": "AllPost'sComments",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "type": "array",
                        "items": {
                        "$ref": "#/components/schemas/OK16"
                        },
                        "description": "",
                        "example": [
                        {
                            "id": 3,
                            "text": "editing..",
                            "createdAt": "2023-08-04T13:07:37.000Z",
                            "updatedAt": "2023-08-08T16:12:56.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 4,
                            "text": "comment",
                            "createdAt": "2023-08-08T15:50:59.000Z",
                            "updatedAt": "2023-08-08T15:50:59.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 5,
                            "text": "comment",
                            "createdAt": "2023-08-08T15:51:16.000Z",
                            "updatedAt": "2023-08-08T15:51:16.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 9,
                            "text": null,
                            "createdAt": "2023-08-08T15:53:36.000Z",
                            "updatedAt": "2023-08-08T15:53:36.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 10,
                            "text": null,
                            "createdAt": "2023-08-08T15:54:42.000Z",
                            "updatedAt": "2023-08-08T15:54:42.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        }
                        ]
                    },
                    "example": [
                        {
                        "id": 3,
                        "text": "editing..",
                        "createdAt": "2023-08-04T13:07:37.000Z",
                        "updatedAt": "2023-08-08T16:12:56.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 4,
                        "text": "comment",
                        "createdAt": "2023-08-08T15:50:59.000Z",
                        "updatedAt": "2023-08-08T15:50:59.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 5,
                        "text": "comment",
                        "createdAt": "2023-08-08T15:51:16.000Z",
                        "updatedAt": "2023-08-08T15:51:16.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 9,
                        "text": null,
                        "createdAt": "2023-08-08T15:53:36.000Z",
                        "updatedAt": "2023-08-08T15:53:36.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 10,
                        "text": null,
                        "createdAt": "2023-08-08T15:54:42.000Z",
                        "updatedAt": "2023-08-08T15:54:42.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        }
                    ]
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequest7"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/reaction/{postId}": {
            "post": {
            "tags": [
                "Group Reaction"
            ],
            "summary": "Create Reaction",
            "operationId": "CreateReaction",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/CreateReactionRequest"
                        },
                        {
                        "example": {
                            "state": "dislike"
                        }
                        }
                    ]
                    },
                    "example": {
                    "state": "dislike"
                    }
                }
                },
                "required": true
            },
            "responses": {
                "201": {
                "description": "Created",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK18"
                        },
                        {
                            "example": {
                            "createdAt": "2023-08-08T16:24:35.906Z",
                            "updatedAt": "2023-08-08T16:24:35.908Z",
                            "id": 2,
                            "userId": 2,
                            "postId": "5"
                            }
                        }
                        ]
                    },
                    "example": {
                        "createdAt": "2023-08-08T16:24:35.906Z",
                        "updatedAt": "2023-08-08T16:24:35.908Z",
                        "id": 2,
                        "userId": 2,
                        "postId": "5"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestpostnotfound3"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                },
                "409": {
                "description": "Conflict",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Conflict1"
                        },
                        {
                            "example": {
                            "reaction": [
                                "you have already reacted to this post"
                            ]
                            }
                        }
                        ]
                    },
                    "example": {
                        "reaction": [
                        "you have already reacted to this post"
                        ]
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/reaction/{reactionId}": {
            "get": {
            "tags": [
                "Group Reaction"
            ],
            "summary": "get Reaction",
            "operationId": "getReaction",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "reactionId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the reaction Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK19"
                        },
                        {
                            "example": {
                            "id": 2,
                            "state": null,
                            "createdAt": "2023-08-08T16:24:35.000Z",
                            "updatedAt": "2023-08-08T16:24:35.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                                "id": 2,
                                "username": "potatUser",
                                "picturePath": "image-1691430498994.png"
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "id": 2,
                        "state": null,
                        "createdAt": "2023-08-08T16:24:35.000Z",
                        "updatedAt": "2023-08-08T16:24:35.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                        "id": 2,
                        "username": "potatUser",
                        "picturePath": "image-1691430498994.png"
                        }
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestreactionnotfound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "reactionId": [
                                "reaction ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "reactionId": [
                            "reaction ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "delete": {
            "tags": [
                "Group Reaction"
            ],
            "summary": "Delete Reaction",
            "operationId": "DeleteReaction",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "reactionId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the reaction Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK4"
                        },
                        {
                            "example": {
                            "msg": "reaction has been deleted"
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "reaction has been deleted"
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequest15"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "reactionId": [
                                "reaction ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "reactionId": [
                            "reaction ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            },
            "patch": {
            "tags": [
                "Group Reaction"
            ],
            "summary": "Edit Reaction",
            "operationId": "EditReaction",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "reactionId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the reaction Id"
                }
            ],
            "requestBody": {
                "description": "",
                "content": {
                "application/json": {
                    "schema": {
                    "allOf": [
                        {
                        "$ref": "#/components/schemas/EditReactionRequest"
                        },
                        {
                        "example": {
                            "state": "dislike"
                        }
                        }
                    ]
                    },
                    "example": {
                    "state": "dislike"
                    }
                }
                },
                "required": true
            },
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/OK20"
                        },
                        {
                            "example": {
                            "id": 5,
                            "state": "dislike",
                            "createdAt": "2023-08-08T16:25:27.000Z",
                            "updatedAt": "2023-08-08T17:42:15.000Z",
                            "userId": 2,
                            "postId": 5
                            }
                        }
                        ]
                    },
                    "example": {
                        "id": 5,
                        "state": "dislike",
                        "createdAt": "2023-08-08T16:25:27.000Z",
                        "updatedAt": "2023-08-08T17:42:15.000Z",
                        "userId": 2,
                        "postId": 5
                    }
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequest15"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "reactionId": [
                                "reaction ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "reactionId": [
                            "reaction ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/group/{groupId}/reaction/all/{postId}": {
            "get": {
            "tags": [
                "Group Reaction"
            ],
            "summary": "get All Reaction",
            "operationId": "getAllReaction",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the group Id"
                },
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "200": {
                "description": "OK",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "type": "array",
                        "items": {
                        "$ref": "#/components/schemas/OK19"
                        },
                        "description": "",
                        "example": [
                        {
                            "id": 2,
                            "state": null,
                            "createdAt": "2023-08-08T16:24:35.000Z",
                            "updatedAt": "2023-08-08T16:24:35.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 3,
                            "state": null,
                            "createdAt": "2023-08-08T16:24:47.000Z",
                            "updatedAt": "2023-08-08T16:24:47.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 4,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:21.000Z",
                            "updatedAt": "2023-08-08T16:25:21.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 5,
                            "state": "dislike",
                            "createdAt": "2023-08-08T16:25:27.000Z",
                            "updatedAt": "2023-08-08T17:42:15.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 6,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:29.000Z",
                            "updatedAt": "2023-08-08T16:25:29.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 7,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:30.000Z",
                            "updatedAt": "2023-08-08T16:25:30.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 8,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:32.000Z",
                            "updatedAt": "2023-08-08T16:25:32.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 9,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:33.000Z",
                            "updatedAt": "2023-08-08T16:25:33.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 10,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:34.000Z",
                            "updatedAt": "2023-08-08T16:25:34.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 11,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:36.000Z",
                            "updatedAt": "2023-08-08T16:25:36.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 12,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:37.000Z",
                            "updatedAt": "2023-08-08T16:25:37.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 13,
                            "state": null,
                            "createdAt": "2023-08-08T16:25:38.000Z",
                            "updatedAt": "2023-08-08T16:25:38.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 14,
                            "state": "like",
                            "createdAt": "2023-08-08T16:25:50.000Z",
                            "updatedAt": "2023-08-08T16:25:50.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 15,
                            "state": "like",
                            "createdAt": "2023-08-08T16:25:53.000Z",
                            "updatedAt": "2023-08-08T16:25:53.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 16,
                            "state": "like",
                            "createdAt": "2023-08-08T16:25:54.000Z",
                            "updatedAt": "2023-08-08T16:25:54.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 17,
                            "state": "like",
                            "createdAt": "2023-08-08T16:25:56.000Z",
                            "updatedAt": "2023-08-08T16:25:56.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        },
                        {
                            "id": 18,
                            "state": "dislike",
                            "createdAt": "2023-08-08T16:26:01.000Z",
                            "updatedAt": "2023-08-08T16:26:01.000Z",
                            "userId": 2,
                            "postId": 5,
                            "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                            }
                        }
                        ]
                    },
                    "example": [
                        {
                        "id": 2,
                        "state": null,
                        "createdAt": "2023-08-08T16:24:35.000Z",
                        "updatedAt": "2023-08-08T16:24:35.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 3,
                        "state": null,
                        "createdAt": "2023-08-08T16:24:47.000Z",
                        "updatedAt": "2023-08-08T16:24:47.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 4,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:21.000Z",
                        "updatedAt": "2023-08-08T16:25:21.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 5,
                        "state": "dislike",
                        "createdAt": "2023-08-08T16:25:27.000Z",
                        "updatedAt": "2023-08-08T17:42:15.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 6,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:29.000Z",
                        "updatedAt": "2023-08-08T16:25:29.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 7,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:30.000Z",
                        "updatedAt": "2023-08-08T16:25:30.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 8,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:32.000Z",
                        "updatedAt": "2023-08-08T16:25:32.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 9,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:33.000Z",
                        "updatedAt": "2023-08-08T16:25:33.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 10,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:34.000Z",
                        "updatedAt": "2023-08-08T16:25:34.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 11,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:36.000Z",
                        "updatedAt": "2023-08-08T16:25:36.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 12,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:37.000Z",
                        "updatedAt": "2023-08-08T16:25:37.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 13,
                        "state": null,
                        "createdAt": "2023-08-08T16:25:38.000Z",
                        "updatedAt": "2023-08-08T16:25:38.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 14,
                        "state": "like",
                        "createdAt": "2023-08-08T16:25:50.000Z",
                        "updatedAt": "2023-08-08T16:25:50.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 15,
                        "state": "like",
                        "createdAt": "2023-08-08T16:25:53.000Z",
                        "updatedAt": "2023-08-08T16:25:53.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 16,
                        "state": "like",
                        "createdAt": "2023-08-08T16:25:54.000Z",
                        "updatedAt": "2023-08-08T16:25:54.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 17,
                        "state": "like",
                        "createdAt": "2023-08-08T16:25:56.000Z",
                        "updatedAt": "2023-08-08T16:25:56.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        },
                        {
                        "id": 18,
                        "state": "dislike",
                        "createdAt": "2023-08-08T16:26:01.000Z",
                        "updatedAt": "2023-08-08T16:26:01.000Z",
                        "userId": 2,
                        "postId": 5,
                        "User": {
                            "id": 2,
                            "username": "potatUser",
                            "picturePath": "image-1691430498994.png"
                        }
                        }
                    ]
                    }
                }
                },
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequestnotfound1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://example.com/api",
                "variables": {}
                }
            ]
            }
        },
        "/images/profile/{userId}": {
            "get": {
            "tags": [
                "Images"
            ],
            "summary": "Profile",
            "operationId": "Profile",
            "parameters": [
                {
                "in": "path",
                "name": "userId",
                "schema": {
                    "type": "integer"
                },
                "required": true
                }
            ],
            "responses": {
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequest19"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "userId": [
                                "user not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "userId": [
                            "user not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://localhost:3500/api/images",
                "variables": {}
                }
            ]
            }
        },
        "/images/group/{groupId}": {
            "get": {
            "tags": [
                "Images"
            ],
            "summary": "group",
            "operationId": "group",
            "parameters": [
                {
                "in": "path",
                "name": "groupId",
                "schema": {
                    "type": "integer"
                },
                "required": true
                }
            ],
            "responses": {
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/Badrequest21"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "groupId": [
                                "group not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "groupId": [
                            "group not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false
            }
        },
        "/images/post/{postId}": {
            "get": {
            "tags": [
                "Images"
            ],
            "summary": "post",
            "operationId": "post",
            "parameters": [
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/BadRequest7"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post ont found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post ont found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://localhost:3500/api/images",
                "variables": {}
                }
            ]
            }
        },
        "/images/groupPost/{postId}": {
            "get": {
            "tags": [
                "Images"
            ],
            "summary": "group post",
            "operationId": "grouppost",
            "parameters": [
                {
                "in": "path",
                "name": "postId",
                "schema": {
                    "type": "integer"
                },
                "required": true,
                "description": "the post Id"
                }
            ],
            "responses": {
                "404": {
                "description": "Not Found",
                "content": {
                    "application/json; charset=utf-8": {
                    "schema": {
                        "allOf": [
                        {
                            "$ref": "#/components/schemas/grouppost1"
                        },
                        {
                            "example": {
                            "msg": "failed",
                            "errors": {
                                "postId": [
                                "post not found"
                                ]
                            }
                            }
                        }
                        ]
                    },
                    "example": {
                        "msg": "failed",
                        "errors": {
                        "postId": [
                            "post not found"
                        ]
                        }
                    }
                    }
                }
                }
            },
            "deprecated": false,
            "security": [
                {
                "bearer": []
                }
            ],
            "servers": [
                {
                "url": "http://localhost:3500/api/images",
                "variables": {}
                }
            ]
            }
        }
    
    }
}


module.exports=swaggerDocument;