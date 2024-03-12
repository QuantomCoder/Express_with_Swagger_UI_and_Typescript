import { Router } from 'express';
import Catagory_controller from '../controller/catagory.controller';
export class CatagoryRoutes {
  public router: Router = Router();
  private CatagoryController = new Catagory_controller();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.post('/', this.CatagoryController.createCatagory);
    this.router.put('/:id', this.CatagoryController.updateACategory);
    this.router.get('/', this.CatagoryController.readAllCategory);
    this.router.get('/:name', this.CatagoryController.readACategory);
    this.router.delete('/delete/:id', this.CatagoryController.deleteACategory);
  }
}

export default new CatagoryRoutes().router;
