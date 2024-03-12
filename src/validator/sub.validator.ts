import joi from "joi";
export const subValidate=joi.object({
   type:joi.string().required(),
   make:joi.string().required() ,
   catagory_id:joi.number().required()
})