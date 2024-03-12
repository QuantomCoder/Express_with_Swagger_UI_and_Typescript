import swaggerJSDoc from "swagger-jsdoc";
import catagoreyDoc, { catagoreyDocforreadingone, deleteACategory, updateACategory } from "./catagory.docs";
import sub1 , {sub2} from "./sub.doc"; 
import {pro1,pro2} from "./pro.docs"

const options: swaggerJSDoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "create catagory",
            version: "2.0.0",
            description: "this is a dummy project"
        },

        servers: [
            { url: "http://localhost:4000" }
        ],
        tags: [
            {
                name: "Catagory",
                description: "this is used to handle the catagory api"
            },
            {
                name: "sub",
                description: "this is to handle the sub_catagory apis"
            },
            {
                name:"pro",
                description: "this is to handle the product apis"
            }
        ],
        paths: { ...catagoreyDoc, ...catagoreyDocforreadingone, ...deleteACategory, ...updateACategory, ...sub1, ...sub2, ...pro1,...pro2},
    },
    apis: ["./../routes/**/*.ts"]

}
// const abc=()=>console.log(sub1,sub2)
// abc()
const sweggarspec = swaggerJSDoc(options);
export default sweggarspec