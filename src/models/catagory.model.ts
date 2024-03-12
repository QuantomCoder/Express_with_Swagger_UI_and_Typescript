import sequelize from "../dbconnection/dbinstance";
import { Model, DataTypes } from "sequelize";

export class Catagory extends Model { }

Catagory.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    }
  },
  { sequelize, tableName: "Catagory" }
);
