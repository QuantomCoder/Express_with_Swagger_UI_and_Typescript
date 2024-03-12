const addasubcatagory = {
    tags: ["sub"],
    summary: "add a sub catagory",
    description: "Add a new sub catagory",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        type: {
                            type: "string"
                        },
                        make: { type: "string" },
                        catagory_id: {
                            type: "number"
                        }
                    },
                }
            }
        }
    },
    responses: {
        200: {
            description: "sub catagory added",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            type: {
                                type: "string"
                            },
                            make: {
                                type: "string"
                            },
                            catagory_id: {
                                type: "number"
                            },
                            updatedAt: {
                                type: "string"
                            },
                            createdAt: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        },
        400: {
            description: "error: message"
        },
        500:{
            description: "Interna server errors"
        }

    }
}
const readsingle = {
    tags: ["sub"],
    summary: "read a sub catagory",
    description: "this api is used to read a catagrey using the sub_cat id ",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "string",
        },
        description: "ID of the sub_cat to find that cat",
    }],
    responses: {
        200: {
            description: "sub_catagorey found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            make: { type: "string" },
                            type: { type: "string" },
                            catagory_id: { type: "number" },
                            updatedAt: { type: "string" },
                            createdAt: { type: "string" }
                        }
                    }
                }
            }
        },
        404: {
            description: "sub_catagorey not found"
        },
        400: {
            description: "param not found in the url"
        }

    }
}
const readall = {
    tags: ["sub"],
    summary: "read all sub catagory",
    description: "this api is used to read all sub_catagrey using the sub_cat id ",
    responses: {
        200: {
            description: "sub_catagorey found",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                make: { type: "string" },
                                type: { type: "string" },
                                catagory_id: { type: "number" },
                                updatedAt: { type: "string" },
                                createdAt: { type: "string" }
                            }
                        }
                    }
                }
            }
        },
        404: {
            description: "sub_catagorey not found"
        },
        400: {
            description: "param not found in the url"
        }

    }
}
const deleteone = {
    tags: ["sub"],
    summary: "read a sub catagory",
    description: "this api is used to read a catagrey using the sub_cat id ",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "string",
        },
        description: "ID of the sub_cat to find that cat",
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
const readAllSubCatInACat = {
    tags: ["sub"],
    summary: "read all sub catagory in a particuller catagorey",
    description: "this api is used to read all sub_catagrey in a catagorey ",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "number",
        },
        description: "ID of the sub_cat to find that cat",
    }],
    responses: {
        200: {
            description: "sub_catagorey found in all catagories",
            content: {
                "application/json": {
                    schema: {
                        type: "array",
                        items: {
                            type: "object",
                            properties: {
                                id: { type: "number" },
                                make: { type: "string" },
                                type: { type: "string" },
                                catagory_id: { type: "number" },
                                updatedAt: { type: "string" },
                                createdAt: { type: "string" }
                            }
                        }
                    }
                }
            }
        },
        404: {
            description: "no sub_catagorey found"
        },
        400: {
            description: "param not found in the url"
        }

    }
}
const update = {
    tags: ["sub"],
    summary: "add a sub catagory",
    description: "Add a new sub catagory",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "string",
        },
        description: "ID of the sub_cat to find that cat",
    }],
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema:
                {
                    type: "object",
                    properties: {
                        type: {
                            type: "string",
                            required: true
                        },
                        make: { type: "string" },
                        catagory_id: {
                            type: "number",
                            required: true
                        }
                    }
                },

            }
        }
    },

    responses: {
        200: {
            description: "sub catagory updated",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            type: {
                                type: "string"
                            },
                            make: {
                                type: "string"
                            },
                            catagory_id: {
                                type: "number"
                            },
                            updatedAt: {
                                type: "string"
                            },
                            createdAt: {
                                type: "string"
                            }
                        }
                    }
                }
            }
        },
        400: {
            description: "fetal in adding a sub catagory"
        }
    }

}

 const sub1 = {
    "/sub/{id}": {
        get: readsingle,
        delete: deleteone,
        post: readAllSubCatInACat,
        put: update
    }
}
export const sub2 = {
    "/sub": {
        post: addasubcatagory,
        get: readall

    }
}
export default sub1