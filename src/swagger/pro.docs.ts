import { any } from "joi"

const addaPro = {
    tags: ["pro"],
    summary: "add a product",
    description: "Add a new product",
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        price: {
                            type: "number"
                        },
                        Product_Name: { type: "string" },
                        sub_id: {
                            type: "number"
                        },
                        availabilty: {
                            type: "boolean"
                        },
                        Quantity: {
                            type: "number"
                        }
                    },
                }
            }
        }
    },
    responses: {
        200: {
            description: "a new product added",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            sub_id: {
                                type: "number"
                            },
                            Product_Name: {
                                type: "string"
                            },
                            price: {
                                type: "number"
                            },
                            availabilty: {
                                type: "boolean"
                            },
                            Quantity: {
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
            description: "fetal in adding a sub product"
        }
    }
}
const readsinglepro = {
    tags: ["pro"],
    summary: "read a product",
    description: "this api is used to read a product using the id ",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "number",
        },
        description: "ID of the product to find that product",
    }],
    responses: {
        200: {
            description: " product found",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            sub_id: {
                                type: "number"
                            },
                            Product_Name: {
                                type: "string"
                            },
                            price: {
                                type: "number"
                            },
                            availabilty: {
                                type: "boolean"
                            },
                            Quantity: {
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
            description: "fetal in finding a  product"
        }
    }
}
const readallpro = {
    tags: ["pro"],
    summary: "read all products",
    description: "this api is used to read all products ",
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
                            id: {
                                type: "number"
                            },
                            sub_id: {
                                type: "number"
                            },
                            Product_Name: {
                                type: "string"
                            },
                            price: {
                                type: "number"
                            },
                            availabilty: {
                                type: "boolean"
                            },
                            Quantity: {
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
            }
        },
        404: {
            description: "product not found"
        },
        400: {
            description: "param not found in the url"
        }

    }
}
const deleteonepro = {
    tags: ["pro"],
    summary: "to delete a product using ID",
    description: "this api is delete one product",
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
            description: "product not found"
        },
        400: {
            description: "param not found in the url"
        }
    }
}
const readAllProductsCatInASubCatagory = {
    tags: ["pro"],
    summary: "read products in a particuller sub catagorey",
    description: "this api is used to read all products in a sub catagorey ",
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
            description: "products found in a subcatagories",
            content: {
                "application/json": {
                    schema: {
                        type: "object",
                        properties: {
                            id: {
                                type: "number"
                            },
                            sub_id: {
                                type: "number"
                            },
                            Product_Name: {
                                type: "string"
                            },
                            price: {
                                type: "number"
                            },
                            availabilty: {
                                type: "boolean"
                            },
                            Quantity: {
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
        404: {
            description: "no product found"
        },
        400: {
            description: "param not found in the url"
        }

    }
}
const updateAPro = {
    tags: ["pro"],
    summary: "update a product in a subcatagory",
    description: "update a product",
    parameters: [{

        in: "path",
        name: "id",
        required: true,
        schema: {
            type: "string",
        },
        description: "ID of the s to fproductnd to update ",
    }],
    requestBody: {
        required: true,
        content: {
            "application/json": {
                schema: {
                    type: "object",
                    properties: {
                        price: {
                            type: "number"
                        },
                        Product_Name: { type: "string" },
                        sub_id: {
                            type: "number"
                        },
                        availabilty: {
                            type: "boolean"
                        },
                        Quantity: {
                            type: "number"
                        }
                    },
                }
            }
        }
    },
    responses: {
        200: {
            description: "product updated",
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
            description: "fetal in updating a the product"
        }
    }

}

export const pro2 = {
    "/pro/{id}": {
      get:readsinglepro,
      delete:deleteonepro,
      post:readAllProductsCatInASubCatagory,
      put:updateAPro
    }
}
export const pro1 = {
    "/pro": {
        post: addaPro,
        get: readallpro

    }
}
