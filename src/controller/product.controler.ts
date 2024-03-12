import { Request, Response } from "express"
import { Sub_Catagory } from "../models/sub_category.model";
import { Catagory } from "../models/catagory.model";
import { Pruduct } from "../models/pruduct.model";
import { productValidator } from "../validator/pro.validator";

class Pruduct_controller {
    public createAPro = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            const { sub_id,Product_Name,price,availabilty,Quantity } = req.body;
            console.log(req.body)
            await productValidator.validateAsync(req.body)
            
            let existing_pruduct = await Pruduct.findOne({ where: {Product_Name:Product_Name  } });
            console.log("before")
            if (existing_pruduct) {
                console.log(existing_pruduct)
                res.status(400).send("product already exist");
                return;
            }
            const subcatagorey=  await Sub_Catagory.findByPk(sub_id)
            if(!subcatagorey){
                console.log("sub catagorey not found to associate")
                res.status(400).send("requested sub category donst exist")
                return
            }
            const product_data = Pruduct.build({ sub_id:sub_id,Product_Name:Product_Name,price:price,availabilty:availabilty,Quantity:Quantity });
            const proSavd = await product_data.save();
            res.status(200).send(proSavd);
        } catch (err) {
            console.log("error in adding pruduct :",err);
            res.sendStatus(400).send("Error in creating a product");
        }
    };
    public readAPro = async (req: Request, res: Response): Promise<void> => {
        try {
            if (!req.params.id) {
                console.log("req has no id param");
                res.sendStatus(400).send("req has no id param");
                return;
            }
            let required_pro = await Pruduct.findByPk(req.params.id);
            if (!required_pro) {
                console.log("no profuct available with this id");
                res.status(404).send("wrong id to find the pruuct");
                return
            }
            console.log("everything  is okey");
            res.status(200).send(required_pro);
        } catch (err) {
            console.log("error in fetchin the product : ", err);
            res.status(500).send("internal server error");
        }
    };
    public readAllPro = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            let allpro = await Pruduct.findAll();
            if (!allpro) {
                console.log("no record found");
                res.status(404).send("no product exist");
            }
            console.log("everything  is okey");
            res.status(200).send(allpro);
        } catch (err) {
            console.log("error in fetchin the all prudct : ", err);
            res.status(500).send("internal server error");
        }
    };
    public deleteAPro = async (
        req: Request,
        res: Response
    ): Promise<void> => {
        try {
            if (!req.params.id) {
                console.log("req has no id in the param");
                res.sendStatus(400).send("req has no id in param");
                return;
            }
            let required_sub_pro = await Pruduct.findByPk(req.params.id);
            if (!required_sub_pro) {
                console.log("no product available with this id");
                res.status(404).send("wrong id to find the data");
            }
            console.log("everything  is okey");
            await Pruduct.destroy({where:{id:req.params.id}});
            res.status(200).send("Killed the product");
        } catch (err) {
            console.log("error in kiling a the product : ", err);
            res.status(500).send("internal server error");
        }
    };
    public updateAPro = async (
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
            let required_pro = await Pruduct.findByPk(req.params.id);
            if (!required_pro) {
                console.log("no product available with this id");
                res.status(404).send("wrong ID to update the data");
                return
            }
            
            let update_categorey = await Pruduct.update(
                { ...req.body },
                { where: { id: req.params.id } }
            );
            console.log("everything  is okey");
            let updated=await Pruduct.findByPk(req.params.id)
            res.status(200).send(updated);
        } catch (err) {
            console.log("updating a product : ", err);
            res.status(400).send("fetal in updating a product");
        }
    };
    public readAllProductInASubCata=async (req:Request,res:Response)=>{
        try{
            if (!req.params.id) {
                console.log("req has no id in the param");
                res.send(400).send("req has no id in param");
                return;
            }
            const prod=await Pruduct.findAll({where:{
                sub_id:req.params.id
            }})
            if(prod.length==0){
                res.status(404).send("no data availble with this associated id")
                return
            }
            res.status(200).send(prod)
        }
        catch(err){
             console.log("error in fetching all product")
             res.status(500).send("an unknon error occur")
        }
    }
}
export default Pruduct_controller