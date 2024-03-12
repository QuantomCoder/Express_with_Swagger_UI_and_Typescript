import { Router } from "express";
import categoreyRoutes from "./categorey.routes";
import sub_catagoreyRoutes from "./sub_catagorey.routes";
import productRoutes from "./product.routes";
let routeer:Router=Router();
routeer.use('/catagory',categoreyRoutes)
routeer.use('/sub',sub_catagoreyRoutes)
routeer.use('/pro',productRoutes)
export default routeer;