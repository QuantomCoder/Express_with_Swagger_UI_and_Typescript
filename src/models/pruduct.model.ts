import sequelize from "../dbconnection/dbinstance";
import { Model, DataTypes } from "sequelize";

export class Pruduct extends Model { }

Pruduct.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sub_id: { 
      type: DataTypes.INTEGER,
       allowNull: false 
      },
    Product_Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    availabilty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull:true
    }
  },
  { sequelize, tableName: "Pruduct" }
);
