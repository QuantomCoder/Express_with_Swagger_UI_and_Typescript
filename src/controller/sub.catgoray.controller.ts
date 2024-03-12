import { Request, Response } from "express"
import { Sub_Catagory } from "../models/sub_category.model";
import { Catagory } from "../models/catagory.model";
import { where } from "sequelize";
import { subValidate } from "../validator/sub.validator";
import { ValidationError } from "joi";

class sub_Catagory_controller {
    public createASubCatagory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { type,make,catagory_id } = req.body;
            console.log(type,make,catagory_id)
            await subValidate.validateAsync({type:type,make:make,catagory_id:catagory_id})
            console.log("aftar",typeof(type))
            let existing_sub_catogrey = await Sub_Catagory.findOne({ where: { type: type } });
            console.log("before")
            if (existing_sub_catogrey) {
                console.log(existing_sub_catogrey)
                res.status(400).send("sub_catagorey already exist");
                return;
            }
            const catagorey=  await Catagory.findByPk(catagory_id)
            if(!catagorey){
                console.log("catagory not found to associate")
                res.status(400).send("requested category donst exist")
            }
            const sub_Catagory = Sub_Catagory.build({ type:type,make:make,catagory_id:catagory_id });
            const sub_catagorySaved = await sub_Catagory.save();
            res.status(200).send(sub_catagorySaved);
        } catch (err) {
            console.log("validate err", err)
            if (err instanceof ValidationError) {
                res.status(400).send(err.message);
                return
            }
            console.log("error in creating category :",err);
            res.sendStatus(500).send("Error in creating a user");
        }
    };
    public readASubCategory = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.params.id) {
                console.log("req has no id param");
                res.sendStatus(400).send("req has no id param");
                return;
            }
            let required_catogrey = await Sub_Catagory.findByPk(req.params.id);
            if (!required_catogrey) {
                console.log("no categorey available with this id");
                res.status(404).send("wrong id to find the data");
                return
            }
            console.log("everything  is okey");
            res.status(200).send(required_catogrey);
        } catch (err) {
            console.log("error in fetchin the category : ", err);
            res.status(400).send("fetal in reading a categorey");
        }
    };
    public readAllSubCategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let required_sub_catogrey = await Sub_Catagory.findAll();
            if (!required_sub_catogrey) {
                console.log("no record found");
                res.status(404).send("no categorey exist");
            }
            console.log("everything  is okey");
            res.status(200).send(required_sub_catogrey);
        } catch (err) {
            console.log("error in fetchin the all sub_category : ", err);
            res.status(400).send("fetal in reading all sub_catagorey");
        }
    };
    public deleteASubCategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            if (!req.params.id) {
                console.log("req has no id in the param");
                res.sendStatus(400).send("req has no id in param");
                return;
            }
            let required_sub_catogrey = await Sub_Catagory.findByPk(req.params.id);
            if (!required_sub_catogrey) {
                console.log("no categorey available with this id");
                res.status(404).send("wrong id to find the data");
            }
            console.log("everything  is okey");
            await Sub_Catagory.destroy({where:{id:req.params.id}});
            res.status(200).send("Killed the categorey");
        } catch (err) {
            console.log("error in kiling a the sub_category : ", err);
            res.status(400).send("fetal in deleting a sub_catagorey");
        }
    };
    public updateASubCategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            console.log(req.params.id,req.body)
            if (!req.params.id || !req.body) {
                console.log("req has no id param or data to update");
                res.status(400).send("no id param or data to update");
                return;
            }
            let required_sub_catogrey = await Sub_Catagory.findByPk(req.params.id);
            if (!required_sub_catogrey) {
                console.log("no sub_categorey available with this id");
                res.status(404).send("wrong ID to update the data");
                return
            }
            
            let update_categorey = await Sub_Catagory.update(
                { ...req.body },
                { where: { id: req.params.id } }
            );
            console.log("everything  is okey");
            let updated=await Sub_Catagory.findByPk(req.params.id)
            res.status(200).send(updated);
        } catch (err) {
            console.log("updating a category : ", err);
            res.status(400).send("fetal in updating a categorey");
        }
    };
    public readAllSubCAtagoriesInACtagorey=async (req:Request,res:Response)=>{
        try{
            if (!req.params.id) {
                console.log("req has no id in the param");
                res.sendStatus(400).send("req has no id in param");
                return;
            }
            const subcategories=await Sub_Catagory.findAll({where:{
                catagory_id:req.params.id
            }})
            if(subcategories.length==0){
                res.status(404).send("no data availble with this associated id")
                return
            }
            res.status(200).send(subcategories)
        }
        catch(err){
             console.log("error in fetching all sub categoreis")
             res.status(500).send("an unknon error occur")
        }
    }
}
export default sub_Catagory_controller