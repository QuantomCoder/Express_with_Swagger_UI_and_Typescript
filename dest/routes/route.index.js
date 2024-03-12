"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categorey_routes_1 = __importDefault(require("./categorey.routes"));
const sub_catagorey_routes_1 = __importDefault(require("./sub_catagorey.routes"));
let routeer = (0, express_1.Router)();
routeer.use('/catagory', categorey_routes_1.default);
routeer.use('/sub', sub_catagorey_routes_1.default);
exports.default = routeer;
