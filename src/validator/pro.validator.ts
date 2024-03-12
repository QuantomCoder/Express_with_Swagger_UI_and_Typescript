import Joi from "joi";
import joi from "joi";
export const productValidator= joi.object({
    sub_id:joi.number().required(),
    Product_Name:joi.string().required(),
    price:joi.number().required(),
    availabilty:joi.boolean().required(),
    Quantity:joi.number().required()
})