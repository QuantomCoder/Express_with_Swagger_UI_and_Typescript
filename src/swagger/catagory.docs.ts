const updateCategory = {
    tags: ["Catagory"],
    summary: "update a catagory",
    description: "updating a catagory",
    parameters: [{
        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "number",
        },
        description: "ID of the user to find",
    }],
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string",
                            require: true
                        }
                    },
                    required: true
                }
            }
        }
    },
    responses: {
        201: {
            description: "catagorey created succesfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            updatedAt: { type: "string" },
                            createdAt: { type: "string" }
                        }
                    }
                }
            }
        },
        400: {
            description: "no id in the params a catagorey"
        },
        404: {
            description: "no catagorey available with this id"
        }
    }

}

export const createCatagory = {
    tags: ["Catagory"],
    summary: "create catagory",
    description: "Create a new catagorey",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        name: {
                            type: "string"
                        }
                    },
                    required: ["name"]
                }
            }
        }
    },
    responses: {
        201: {
            description: "catagorey created succesfully",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            updatedAt: { type: "string" },
                            createdAt: { type: "string" }
                        }
                    }
                }
            }
        },
        400: {
            description: "fetal in creating a catagorey"
        }
        
    }
}
export const readACategory = {
    tags: ["Catagory"],
    summary: "read a catagory",
    description: "reading a catagory",
    parameters: [{
        
        in: "path",
        name: "name",
        required: true,
        schema: {
            type: "string",
        },
        description: "ID of the user to find",
    }],
    responses: {
        201: {
            description: "catagorey found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            updatedAt: { type: "string" },
                            createdAt: { type: "string" }
                        }
                    }
                }
            }
        },
        404: {
            description: "catagorey not found"
        },
        400: {
            description: "param not found in the url"
        }
    },
    
}
const readAllCategory = {
    tags: ["Catagory"],
    summary: "read a catagory",
    description: "reading a catagory",
    responses: {
        200: {
            description: "catagorey found",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                name: { type: "string" },
                                updatedAt: { type: "string" },
                                createdAt: { type: "string" }
                            }
                        }
                    }
                }
            },
            404: {
                description: "catagorey not found"
            },
            400: {
                description: "param not found in the url"
            }
        }
    },
    
}
const deleteCatagory = {
    tags: ["Catagory"],
    summary: "delete a catagory",
    description: "reading a catagory",
    parameters: [{
        
        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "number",
        },
        description: "catagory to delete",
    }],
    responses: {
        200: {
            description: "catagorey found",
            content: {
                "application/json": {
                    schema: {
                        type: "string",
                    }
                }
            }
        },
        404: {
            description: "catagorey not found"
        },
        400: {
            description: "param not found in the url"
        }
    }
}
export const deleteACategory = {
    "/catagory/delete/{id}": {
        delete: deleteCatagory
    }
}
const catagoreyDoc = {
    "/catagory": {
        post: createCatagory,
        get: readAllCategory
    }
}
export const catagoreyDocforreadingone = {
    "/catagory/{name}": {
        get: readACategory
    }
}
export default catagoreyDoc;
export const updateACategory={
    "/catagory/{id}": {
        put: updateCategory
    }
}