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
const catagory_model_1 = require("../models/catagory.model");
class Catagory_controller {
    constructor() {
        this.createCatagory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name } = req.body;
                if (!name) {
                    console.log("data not found");
                    res.sendStatus(400).send("data not found");
                    return;
                }
                let existing_catogrey = yield catagory_model_1.Catagory.findOne({ where: { name: name } });
                if (existing_catogrey) {
                    console.log(existing_catogrey);
                    res.status(400).send("catagorey already exist");
                    return;
                }
                const catagory = catagory_model_1.Catagory.build({ name: name });
                const catagorySaved = yield catagory.save();
                res.status(200).send(catagorySaved);
            }
            catch (err) {
                console.log("error in creating category :", err);
                res.sendStatus(400).send("Error in creating a user");
            }
        });
        this.readACategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.name) {
                    console.log("req has no name param");
                    res.sendStatus(400).send("req has no name param");
                    return;
                }
                let required_catogrey = yield catagory_model_1.Catagory.findAll({
                    where: { name: req.params.name },
                });
                if (!required_catogrey) {
                    console.log("no categorey available with this name");
                    res.status(404).send("wrong name to find the data");
                }
                console.log("everything  is okey");
                res.status(200).send(required_catogrey);
            }
            catch (err) {
                console.log("error in fetchin the category : ", err);
                res.status(400).send("fetal in reading a categorey");
            }
        });
        this.readAllCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let required_catogrey = yield catagory_model_1.Catagory.findAll();
                if (!required_catogrey) {
                    console.log("no record found");
                    res.status(404).send("wrong name to find the data");
                }
                console.log("everything  is okey");
                res.status(200).send(required_catogrey);
            }
            catch (err) {
                console.log("error in fetchin the all category : ", err);
                res.status(400).send("fetal in reading all catagorey");
            }
        });
        this.deleteACategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id) {
                    console.log("req has no id in the param");
                    res.sendStatus(400).send("req has no id in param");
                    return;
                }
                let required_catogrey = yield catagory_model_1.Catagory.findByPk(req.params.id);
                if (!required_catogrey) {
                    console.log("no categorey available with this id");
                    res.status(404).send("wrong id to find the data");
                }
                console.log("everything  is okey");
                yield (required_catogrey === null || required_catogrey === void 0 ? void 0 : required_catogrey.destroy());
                res.status(200).send("Killed the categorey");
            }
            catch (err) {
                console.log("error in fetchin the category : ", err);
                res.status(400).send("fetal in deleting a catagorey");
            }
        });
        this.updateACategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id && !req.body.name) {
                    console.log("req has no name param");
                    res.sendStatus(400).send("req has no name param");
                    return;
                }
                let required_catogrey = yield catagory_model_1.Catagory.findByPk(req.params.id);
                if (!required_catogrey) {
                    console.log("no categorey available with this id");
                    res.status(404).send("wrong ID to update the data");
                }
                let update_categorey = yield catagory_model_1.Catagory.update({ name: req.body.name }, { where: { id: req.params.ID } });
                console.log("everything  is okey");
                res.status(200).send(update_categorey);
            }
            catch (err) {
                console.log("updating a category : ", err);
                res.status(400).send("fetal in updating a categorey");
            }
        });
    }
}
exports.default = Catagory_controller;
