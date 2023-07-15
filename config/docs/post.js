const createPost={
    tags:["Posts"],
    description:`create post</br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>
    <h3> Note 2: Don't send data as raw json you have to send it as form-data 
    key value give the picture field name 'image' and the rest of the data 'data' it's optional to send (single image ,json data ,both single image and json data) </h3>
    `,
    security: [{
        bearerAuth: []
    }],
    parameters:[
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
                            "text":"text for creating post"      
                        }
                    }
                }
            }
        },
        {
            in: 'formData',
            name: 'image',
            type: 'file',
            description: 'Image to upload make sure to give it the field name (image)',
            example: '{"image": "the picture you will upload"}',
        },
    ],
    responses:{
        201:{
            description:"CREATED",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "createdAt": "2023-07-03T07:58:13.907Z",
                            "updatedAt": "2023-07-03T07:58:13.925Z",
                            "id": 8,
                            "userId": 3,
                            "text": "text for post",
                            "picture": "image-1688371093888.PNG"
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
        500:{
            description:"Internal Server Error if you don't send data in form",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "error": "Unexpected end of form"
                        }
                    }
                }
            }
        },
        
    }
}

const editPost={
    tags:["Posts"],
    description:`update post</br >
    you must be authorized </br>
    <h3> Note 1: send token in bearer </h3>
    <h3> Note 2: Don't send data as raw json you have to send it as form-data 
    key value give the picture field name 'image' and the rest of the data 'data' it's optional to send (single image ,json data ,both single image and json data) </h3>
    `,
    security: [{
        bearerAuth: []
    }],
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
                            "text": "updated text for post"       
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
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "id": 1,
                            "text": "updated text for post",
                            "picture": "image-1688375694473.PNG",
                            "createdAt": "2023-07-03T09:09:38.000Z",
                            "updatedAt": "2023-07-03T09:32:57.000Z",
                            "userId": 1,

                            "post": [
                                "post not found"
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
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "You can only modify your posts"
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
                        example:[
                            {
                                "id": [
                                    "The id must be a number."
                                ]
                            }, 
                        ]
                    }
                }
            }
        }
    }
}

const deletePost={
    tags:["Posts"],
    description:`delete the post by id</br >
    you must be authorized </br>
    <h3> Note : send token in bearer </h3>
    `,
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
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "post has been deleted",
                            "post":[
                                "post not found"
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
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "You can only modify your posts"
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
                        example:[
                            {
                                "id": [
                                    "The id must be a number."
                                ]
                            }, 
                        ]
                    }
                }
            }
        }
    }
}

const getPostById={
    tags:["Posts"],
    description:`get One post By Id of the post</br >
    you must be authorized </br>
    <h3> Note : send token in bearer </h3>
    `,
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
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "id": 3,
                            "text": "text for post",
                            "picture": "image-1689450513699.PNG",
                            "createdAt": "2023-07-15T19:48:33.000Z",
                            "updatedAt": "2023-07-15T19:48:33.000Z",
                            "userId": 2,
                            "User": {
                                "username": "potatoUser",
                                "picturePath": "image-1689451274989.PNG"
                            },
                            "post":[
                                "post not found"
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
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "You can only see your posts or your friends posts or your groups posts"
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
                        example:[
                            {
                                "id": [
                                    "The id must be a number."
                                ]
                            }, 
                        ]
                    }
                }
            }
        }
    }
}



const getAllPostsById={
    tags:["Posts"],
    description:`get all posts for a user with the id of user</br >
    you must be authorized </br>
    <h3> Note : send token in bearer </h3>
    `,
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
        200:{
            description:"OK",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "posts":[
                                {
                                  "id": 5,
                                  "text": "text for post",
                                  "picture": "image-1689451671393.PNG",
                                  "createdAt": "2023-07-15T20:07:51.000Z",
                                  "updatedAt": "2023-07-15T20:07:51.000Z",
                                  "userId": 2,
                                  "User": {
                                    "username": "potatUser",
                                    "picturePath": "image-1689452246808.PNG"
                                  }
                                },
                                {
                                  "id": 6,
                                  "text": "text for post",
                                  "picture": "image-1689451673321.PNG",
                                  "createdAt": "2023-07-15T20:07:53.000Z",
                                  "updatedAt": "2023-07-15T20:07:53.000Z",
                                  "userId": 2,
                                  "User": {
                                    "username": "potatUser",
                                    "picturePath": "image-1689452246808.PNG"
                                  }
                                },
                                {
                                  "id": 7,
                                  "text": "updated text for post",
                                  "picture": "image-1689451740576.PNG",
                                  "createdAt": "2023-07-15T20:08:25.000Z",
                                  "updatedAt": "2023-07-15T20:09:00.000Z",
                                  "userId": 2,
                                  "User": {
                                    "username": "potatUser",
                                    "picturePath": "image-1689452246808.PNG"
                                  }
                                }
                            ],
                            "post":[
                                "post not found"
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
        403:{
            description:"Forbidden",
            content:{
                "application/json":{
                    schema:{
                        type:"Object",
                        example:{
                            "msg": "You can only see your posts or your friends posts or your groups posts"
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
                        example:[
                            {
                                "id": [
                                    "The id must be a number."
                                ]
                            }, 
                        ]
                    }
                }
            }
        }
    }
}

const post={
    createPost,
    editPost,
    deletePost,
    getPostById,
    getAllPostsById,
}


module.exports=post;