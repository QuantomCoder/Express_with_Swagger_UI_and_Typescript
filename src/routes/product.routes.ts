import { Router } from "express";
import Pruduct_controller from "../controller/product.controler"
class PruductRoutes {
  public routes:Router=Router();
  private productCon=new Pruduct_controller();
  constructor(){
    this.intializeroutes();
  }
 private intializeroutes=()=>{
    this.routes.post("/",this.productCon.createAPro)
    this.routes.get("/:id",this.productCon.readAPro)
    this.routes.get("/",this.productCon.readAllPro)
    this.routes.delete('/:id',this.productCon.deleteAPro)
    this.routes.put('/:id',this.productCon.updateAPro)
    this.routes.post('/:id',this.productCon.readAllProductInASubCata)
}  
}
export default new PruductRoutes().routes