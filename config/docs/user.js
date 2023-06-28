const getOneUserProfile={
    tags:["Users"],
    description:`get profile information of user by id</br >
    you must be authorized logged in </br>
    <h3> Note : send token in bearer </h3>
    `,
    security: [{
        bearerAuth: []
    }],
    parameters:[
        {
          "name": "id",
          "in": "query",
          "type": "string",
          "required": true
        }
    ],
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:[
                            {
                                "id": 2,
                                "username": "potato",
                                "email": "potato@email.com",
                                "firstName": null,
                                "lastName": null,
                                "picturePath": null,
                                "gender": null,
                                "birthday": null,
                                "country": null,
                                "createdAt": "2023-06-15T07:17:39.000Z",
                                "updatedAt": "2023-06-15T07:17:39.000Z"
                            },{
                            "user": [
                                "User not found"
                            ]
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
        400:{
            description:"bad request",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "id": [
                                "The id must be a number."
                            ]
                        }
                    }
                }
            }
        }
    }
}



const user={
    getOneUserProfile,
    
}


module.exports=user;