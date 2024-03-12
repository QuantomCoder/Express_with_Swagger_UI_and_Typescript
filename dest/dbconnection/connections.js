"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conenetion = void 0;
const dbinstance_1 = __importDefault(require("./dbinstance"));
const catagory_model_1 = require("../models/catagory.model");
const sub_category_model_1 = require("../models/sub_category.model");
const pruduct_model_1 = require("../models/pruduct.model");
const association_of_model_1 = __importDefault(require("../models/association_of_model"));
const conenetion = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield dbinstance_1.default.authenticate();
        console.log("connected To database");
        yield catagory_model_1.Catagory.sync();
        console.log("catagory table synced");
        yield sub_category_model_1.Sub_Catagory.sync();
        console.log("Sub_Category table sync");
        yield pruduct_model_1.Pruduct.sync();
        console.log("Product tale synced");
        yield (0, association_of_model_1.default)();
    }
    catch (err) {
        console.log("db not connected with error : ", err);
    }
});
exports.conenetion = conenetion;
// export { sequelize, conenetion }
