import sequelize from "../dbconnection/dbinstance";
import { Model, DataTypes } from "sequelize";

export class Sub_Catagory extends Model { }

Sub_Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: {
      type: DataTypes.STRING,
      unique:false,
      allowNull: true,
    },
    catagory_id: {
      type: DataTypes.INTEGER,
      unique:false,
      allowNull: false
    }
  },
  { sequelize, tableName: "Sub_Catagory" }
);
