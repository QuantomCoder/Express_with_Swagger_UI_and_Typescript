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
Object.defineProperty(exports, "__esModule", { value: true });
const catagory_model_1 = require("./catagory.model");
const pruduct_model_1 = require("./pruduct.model");
const sub_category_model_1 = require("./sub_category.model");
const assosiations = () => __awaiter(void 0, void 0, void 0, function* () {
    sub_category_model_1.Sub_Catagory.belongsTo(catagory_model_1.Catagory, { foreignKey: "catagory_id", as: "catID" });
    pruduct_model_1.Pruduct.belongsTo(sub_category_model_1.Sub_Catagory, { foreignKey: "sub_id", as: "subID" });
    catagory_model_1.Catagory.hasMany(sub_category_model_1.Sub_Catagory, { foreignKey: "catagory_id", as: "Sub_Catagory" });
    sub_category_model_1.Sub_Catagory.hasMany(pruduct_model_1.Pruduct, { foreignKey: "sub_id", as: "Pruduct" });
    console.log("association done");
});
exports.default = assosiations;
