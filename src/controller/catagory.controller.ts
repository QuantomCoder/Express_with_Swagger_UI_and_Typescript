import { Request, Response } from "express";
import { Catagory } from "../models/catagory.model";
import { catagorey_Schema_validation } from "../validator/catagory.validate";
import { ValidationError } from "joi"
class Catagory_controller {
    public createCatagory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const result = await catagorey_Schema_validation.validateAsync(req.body);
            // console.log(result)
            // if (result.error instanceof ValidationError) {
                
            //     res.status(400).send(result.error.message);
            //     return
            // }
            // console.log("asusjagfwertywsduyet : ")
            const { name } = req.body;
            if (!name) {
                console.log("data not found");
                res.send(400).send("data not found");
                return;
            }
            let existing_catogrey = await Catagory.findOne({ where: { name: name } });
            console.log("before database action")
            if (existing_catogrey) {
                console.log(existing_catogrey)
                res.status(400).send("catagorey already exist");
                return;
            }
            const catagory = Catagory.build({ name: name });
            const catagorySaved = await catagory.save();
            res.status(201).send(catagorySaved);
        } catch (err) {
            console.log("validate err", err)
            if (err instanceof ValidationError) {
                res.status(400).send("bhar ma ja");
                return
            }
            console.log("error in creating category :", err);
            res.status(500).send("Error in creating a user");
        }
    };
    public readACategory = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.params.name) {
                console.log("req has no name param");
                res.sendStatus(400).send("req has no name param");
                return;
            }
            let required_catogrey = await Catagory.findAll({
                where: { name: req.params.name },
            });
            if (!required_catogrey) {
                console.log("no categorey available with this name");
                res.status(404).send("wrong name to find the data");
            }
            console.log("everything  is okey");
            res.status(201).send(required_catogrey);
        } catch (err) {
            console.log("error in fetchin the category : ", err);
            res.status(500).send("fetal in reading a categorey");
        }
    };
    public readAllCategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let required_catogrey = await Catagory.findAll();
            if (!required_catogrey) {
                console.log("no record found");
                res.status(404).send("no record found");
            }
            console.log("everything  is okey");
            res.status(200).send(required_catogrey);
        } catch (err) {
            console.log("error in fetchin the all category : ", err);
            res.status(500).send("internal server error");
        }
    };
    public deleteACategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            if (!req.params.id) {
                console.log("req has no id in the param");
                res.status(400).send("req has no id in param");
                return;
            }
            let required_catogrey = await Catagory.findByPk(req.params.id);
            if (!required_catogrey) {
                console.log("no categorey available with this id");
                res.status(404).send("wrong id to find the data");
                return
            }
            console.log("everything  is okey", required_catogrey);
            await Catagory.destroy({ where: { id: req.params.id } });
            res.status(200).send("Killed the categorey");
        } catch (err) {
            console.log("error in fetchin the category : ", err);
            res.status(500).send("Internal server error");
        }
    };
    public updateACategory = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            console.log(req.params)
            if (!req.params.id && !req.body.name) {
                console.log("req has no name param");
                res.status(400).send("req has no name param");
                return;
            }
            let required_catogrey = await Catagory.findByPk(req.params.id);
            if (!required_catogrey) {
                console.log("no categorey available with this id");
                res.status(404).send("wrong ID to update the data");
            }
            let update_categorey = await Catagory.update(
                { name: req.body.name },
                { where: { id: req.params.id } }
            );
            let updated = await Catagory.findByPk(req.params.id)
            console.log("everything  is okey");
            res.status(201).send(updated);
        } catch (err) {
            console.log("updating a category : ", err);
            res.status(500).send("Internal server error");
        }
    };
}
export default Catagory_controller