import sequelize from "./dbinstance";
import { Catagory } from "../models/catagory.model";
import { Sub_Catagory } from "../models/sub_category.model";
import { Pruduct } from "../models/pruduct.model";
import assosiations from "../models/association_of_model";
export const conenetion = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log("connected To database");
    await Catagory.sync();
    console.log("catagory table synced");
    await Sub_Catagory.sync();
    console.log("Sub_Category table sync");
    await Pruduct.sync();
    console.log("Product tale synced");
    await assosiations()
  } catch (err) {
    console.log("db not connected with error : ", err);
  }
};
// export { sequelize, conenetion }
