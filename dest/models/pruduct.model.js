"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pruduct = void 0;
const dbinstance_1 = __importDefault(require("../dbconnection/dbinstance"));
const sequelize_1 = require("sequelize");
class Pruduct extends sequelize_1.Model {
}
exports.Pruduct = Pruduct;
Pruduct.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    sub_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    Product_Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    availabilty: {
        type: sequelize_1.DataTypes.BOOLEAN,
        defaultValue: false
    },
    Quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true
    }
}, { sequelize: dbinstance_1.default, tableName: "Pruduct" });
