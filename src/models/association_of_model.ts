import { Catagory } from "./catagory.model"
import { Pruduct } from "./pruduct.model"
import { Sub_Catagory } from "./sub_category.model"


const assosiations = async () => {
    Sub_Catagory.belongsTo(Catagory,{foreignKey:"catagory_id",as:"catID"})
    Pruduct.belongsTo(Sub_Catagory,{foreignKey:"sub_id",as:"subID"})
    Catagory.hasMany(Sub_Catagory,{foreignKey:"catagory_id",as:"Sub_Catagory"})
    Sub_Catagory.hasMany(Pruduct,{foreignKey:"sub_id",as:"Pruduct"})
    console.log("association done")

}
export default assosiations