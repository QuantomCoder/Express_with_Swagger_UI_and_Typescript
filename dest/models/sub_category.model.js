"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sub_Catagory = void 0;
const dbinstance_1 = __importDefault(require("../dbconnection/dbinstance"));
const sequelize_1 = require("sequelize");
class Sub_Catagory extends sequelize_1.Model {
}
exports.Sub_Catagory = Sub_Catagory;
Sub_Catagory.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    make: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    catagory_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, { sequelize: dbinstance_1.default, tableName: "Sub_Catagory" });
