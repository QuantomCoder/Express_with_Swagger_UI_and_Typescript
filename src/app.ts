import express, { Request, Response, Express, Application, json } from 'express'
import cors from "cors"

import routeer from './routes/route.index';
import { conenetion } from './dbconnection/connections';
import swaggerUi from 'swagger-ui-express';
import sweggarspec from './swagger/catApidocs';

class app {
    public app: Application;
    constructor() {
        this.app = express();
        this.database();
        this.config();
        this.initailzeRoutes();
        

    }
    private async database() {
        
        await conenetion();
    //    let table= await Catagory.sync();
    //    console.log("table sync", table)
    }
    private initailzeRoutes=():void=>{
        console.log("swager")
       this.app.use(routeer)
       this.app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(sweggarspec))
    }
    private config=():void=>{
        this.app.use(json())
        this.app.use(cors())
    }
}
export default new app().app