const register={
    tags:["register login && logout"],
    description:`create a user </br >
    you need to pass in request body </br>
    <ul>
        <li><b>username</br></b></li>
        <li><b>valid unique email</br></b></li>
        <li><b>and password with with minimum length of 8 chars and max length of 20</b></b></li>
    </ul>
    <h3> Note : users are distinct by email </h3>
    `,
    parameters:[
        {
          "name": "id",
          "in": "query",
          "type": "integer",
          "required": true
        },
        {
            in: 'formData',
            name: 'data',
            type: 'application/json',
            description: 'JSON data to update make sure to give it the field name (data)',
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            
                            "username": "potatoUserName",
                            "password": "potatoNewPassword",
                            "firstName": "potatoFirstName",
                            "lastName": "potatoLastName",
                            "gender": "male",
                            "birthday": "2022-01-01",
                            "country": "potatoContury"       
                        }
                    }
                }
            }
        },
        {
            in: 'formData',
            name: 'image',
            type: 'file',
            description: 'Image to update make sure to give it the field name (image)',
            example: '{"image": "the picture you will upload"}',
        },
    ],
    responses:{
        201:{
            description:"created",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "created successfully",
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
                            "username": [
                                "The username field is required."
                              ],
                              "email": [
                                "The email field is required.",
                                "Email is already in use !", 
                                "The email format is invalid."  
                              ],
                              "password": [
                                "The password field is required.",
                                "The password must be at least 8 characters.",
                                "The password may not be greater than 20 characters."
                            ],
                            "gender": [
                                "The selected gender is invalid."
                            ],
                            "birthday": [
                                "The birthday is not a valid date format."
                            ],
                        }
                    }
                }
            }
        }
    }
}


const login={
    tags:["register login && logout"],
    description:`login route for a registered email</br >
    you need to pass in request body </br>
    <ul>
        <li><b>valid email</br></b></li>
        <li><b>and a password</b></b></li>
    </ul>
    <h3> Note : Keep your token safe you need to use it </h3>
    `,
    requestBody:{
        required:true,
        content:{
            "application/json":{
                schema:{
                    type:"Object",
                    example:{
                        email:"potato@email.com",
                        password:"potatoPassword"
                    }
                }
            }
        },
    },
    responses:{
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "user": {
                                "id": 10,
                                "username": "potato",
                                "token": "the token string"
                            }
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
                              "email": [
                                "The email field is required.",
                                "The email format is invalid."
                              ],
                              "password": [
                                "The password field is required.",
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
                            "email": [
                                "Invalid Credentials no such email"
                            ],
                            "password": [
                                "Invalid Credentials Wrong Password"
                            ]
                        }
                    }
                }
            }
        }
    }
}

const logout={
    tags:["register login && logout"],
    description:`logout route for the current logged in email</br >
    you must be authorized </br>
    <h3> Note : send token in bearer </h3>
    `,
    security: [{
        bearerAuth: []
    }],
    responses:{
        204:{
            description:"No content",
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
        }
    }
}


const reg_login_logout=
{
    register,
    login,
    logout,
}


module.exports=reg_login_logout;