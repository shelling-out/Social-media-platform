const createFriendRequest={
    tags:["Relationships"],
    description:`create friend request by the id of the user</br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>`,
    security: [{
        bearerAuth: []
    }],
    parameters:[
        {
          "name": "id",
          "in": "query",
          "type": "integer",
          "required": true
        }
    ],
    responses:{
        201:{
            description:"CREATED",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "request sent successfully",
                            "relationship": {
                              "createdAt": "2023-07-31T11:56:05.556Z",
                              "updatedAt": "2023-07-31T11:56:05.556Z",
                              "id": 14,
                              "firstUserId": 5,
                              "secondUserId":6,
                              "state": "pending"
                            }
                        }
                    }
                }
            }
        },
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "user": [
                              "User not found"
                            ]
                        }
                    }
                }
            } 
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "Authentication invalid"
                        }
                    }
                }
            }
        },
        400:{
            description:"Bad Request",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "id": [
                              "The id must be a number."
                            ],
                            "relationship": [
                                "No self loops in the friends system ,The given ID is the same as yours",
                            ]
                        }
                    }
                }
            }
        },  
        409:{
            description:"Conflict",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "relationship": [
                                "You have already sent a request to this user.",
                                "This user has sent you a request, Check received requests.",
                                "You are already friends.",
                                "You blocked this user.",
                                "This user has blocked you.",
                                "there is already a relationship."
                            ]
                        }
                    }
                }
            }
        },       
    }
}





const getSentRequests={
    tags:["Relationships"],
    description:`get sent requests for the current logged in user </br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>`,
    security: [{
        bearerAuth: []
    }],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:[
                            {
                              "requestRecevier": {
                                "id": 5,
                                "username": "User3",
                                "picturePath": null
                              },
                              "id": 13,
                              "firstUserId": 2,
                              "secondUserId": 5,
                              "state": "pending",
                              "createdAt": "2023-07-30T17:03:57.000Z",
                              "updatedAt": "2023-07-31T06:19:49.000Z"
                            }
                        ]
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "Authentication invalid"
                        }
                    }
                }
            }
        },       
    }
}


const getReceivedRequests={
    tags:["Relationships"],
    description:`get received requests for the current logged in user </br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>`,
    security: [{
        bearerAuth: []
    }],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:[
                            {
                              "requestSender": {
                                "id": 2,
                                "username": "updatedUsername",
                                "picturePath": "image-1690691170494.PNG"
                              },
                              "id": 13,
                              "firstUserId": 2,
                              "secondUserId": 5,
                              "state": "received",
                              "createdAt": "2023-07-30T17:03:57.000Z",
                              "updatedAt": "2023-07-31T06:19:49.000Z"
                            }
                        ]
                    }
                }
            }
        },
        401:{
            description:"Unauthorized",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "Authentication invalid"
                        }
                    }
                }
            }
        },       
    }
}






const relationship=
{
    createFriendRequest,
    getSentRequests,
    getReceivedRequests
}


module.exports=relationship;