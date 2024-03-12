"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatagoryRoutes = void 0;
const express_1 = require("express");
const catagory_controller_1 = __importDefault(require("../controller/catagory.controller"));
class CatagoryRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.CatagoryController = new catagory_controller_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        this.router.post('/', this.CatagoryController.createCatagory);
        this.router.put('/:id', this.CatagoryController.updateACategory);
        this.router.get('/', this.CatagoryController.readAllCategory);
        this.router.get('/:name', this.CatagoryController.readACategory);
        this.router.delete('/delete/:id', this.CatagoryController.deleteACategory);
    }
}
exports.CatagoryRoutes = CatagoryRoutes;
exports.default = new CatagoryRoutes().router;
