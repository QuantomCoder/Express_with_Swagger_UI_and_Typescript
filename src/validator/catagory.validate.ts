import { error } from "console";
import { Request,Response } from "express";
import joi from "joi";
export const catagorey_Schema_validation=joi.object({name:joi.string().required()})