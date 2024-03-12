"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Catagory = void 0;
const dbinstance_1 = __importDefault(require("../dbconnection/dbinstance"));
const sequelize_1 = require("sequelize");
class Catagory extends sequelize_1.Model {
}
exports.Catagory = Catagory;
Catagory.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true
    }
}, { sequelize: dbinstance_1.default, tableName: "Catagory" });
