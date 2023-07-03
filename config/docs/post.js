
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





const post={
    createPost,
}


module.exports=post;