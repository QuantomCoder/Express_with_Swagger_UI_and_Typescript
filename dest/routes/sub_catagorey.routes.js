"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sub_catgoray_controller_1 = __importDefault(require("../controller/sub.catgoray.controller"));
class SubCatagoryRoutes {
    constructor() {
        this.routes = (0, express_1.Router)();
        this.subcategoreycontroler = new sub_catgoray_controller_1.default();
        this.intializeroutes = () => {
            this.routes.post("/", this.subcategoreycontroler.createASubCatagory);
            this.routes.get("/:id", this.subcategoreycontroler.readASubCategory);
            this.routes.get("/", this.subcategoreycontroler.readAllSubCategory);
            this.routes.delete('/:idc', this.subcategoreycontroler.deleteASubCategory);
            this.routes.put('/:id', this.subcategoreycontroler.updateASubCategory);
            this.routes.post('/:ids', this.subcategoreycontroler.readAllSubCAtagoriesInACtagorey);
        };
        this.intializeroutes();
    }
}
exports.default = new SubCatagoryRoutes().routes;
