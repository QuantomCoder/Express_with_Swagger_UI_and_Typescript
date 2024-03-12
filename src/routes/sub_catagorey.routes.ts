import { Router } from "express";
import sub_Catagory_controller from "../controller/sub.catgoray.controller";

class SubCatagoryRoutes {
  public routes:Router=Router();
  private subcategoreycontroler=new sub_Catagory_controller();
  constructor(){
    this.intializeroutes();
  }
 private intializeroutes=()=>{
    this.routes.post("/",this.subcategoreycontroler.createASubCatagory)
    this.routes.get("/:id",this.subcategoreycontroler.readASubCategory)
    this.routes.get("/",this.subcategoreycontroler.readAllSubCategory)
    this.routes.delete('/:id',this.subcategoreycontroler.deleteASubCategory)
    this.routes.put('/:id',this.subcategoreycontroler.updateASubCategory)
    this.routes.post('/:id',this.subcategoreycontroler.readAllSubCAtagoriesInACtagorey)
}  
}
export default new SubCatagoryRoutes().routes