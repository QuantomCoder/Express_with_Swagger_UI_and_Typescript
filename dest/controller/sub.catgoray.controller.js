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
const sub_category_model_1 = require("../models/sub_category.model");
const catagory_model_1 = require("../models/catagory.model");
class sub_Catagory_controller {
    constructor() {
        this.createASubCatagory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { type, make, catagory_id } = req.body;
                if (!type || !make || !catagory_id) {
                    console.log("data not found");
                    res.sendStatus(400).send("data not found");
                    return;
                }
                let existing_sub_catogrey = yield sub_category_model_1.Sub_Catagory.findOne({ where: { type: type } });
                if (existing_sub_catogrey) {
                    console.log(existing_sub_catogrey);
                    res.status(400).send("sub_catagorey already exist");
                    return;
                }
                const catagorey = yield catagory_model_1.Catagory.findByPk(catagory_id);
                if (!catagorey) {
                    console.log("catagory not found to associate");
                    res.status(400).send("requested category donst exist");
                }
                const sub_Catagory = sub_category_model_1.Sub_Catagory.build({ type: type, make: make, });
                const sub_catagorySaved = yield sub_Catagory.save();
                res.status(200).send(sub_catagorySaved);
            }
            catch (err) {
                console.log("error in creating category :", err);
                res.sendStatus(400).send("Error in creating a user");
            }
        });
        this.readASubCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id) {
                    console.log("req has no id param");
                    res.sendStatus(400).send("req has no id param");
                    return;
                }
                let required_catogrey = yield sub_category_model_1.Sub_Catagory.findByPk(req.params.id);
                if (!required_catogrey) {
                    console.log("no categorey available with this id");
                    res.status(404).send("wrong id to find the data");
                }
                console.log("everything  is okey");
                res.status(200).send(required_catogrey);
            }
            catch (err) {
                console.log("error in fetchin the category : ", err);
                res.status(400).send("fetal in reading a categorey");
            }
        });
        this.readAllSubCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                let required_sub_catogrey = yield sub_category_model_1.Sub_Catagory.findAll();
                if (!required_sub_catogrey) {
                    console.log("no record found");
                    res.status(404).send("no categorey exist");
                }
                console.log("everything  is okey");
                res.status(200).send(required_sub_catogrey);
            }
            catch (err) {
                console.log("error in fetchin the all sub_category : ", err);
                res.status(400).send("fetal in reading all sub_catagorey");
            }
        });
        this.deleteASubCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.idc) {
                    console.log("req has no id in the param");
                    res.sendStatus(400).send("req has no id in param");
                    return;
                }
                let required_sub_catogrey = yield sub_category_model_1.Sub_Catagory.findByPk(req.params.idc);
                if (!required_sub_catogrey) {
                    console.log("no categorey available with this id");
                    res.status(404).send("wrong id to find the data");
                }
                console.log("everything  is okey");
                yield (required_sub_catogrey === null || required_sub_catogrey === void 0 ? void 0 : required_sub_catogrey.destroy());
                res.status(200).send("Killed the categorey");
            }
            catch (err) {
                console.log("error in kiling a the sub_category : ", err);
                res.status(400).send("fetal in deleting a sub_catagorey");
            }
        });
        this.updateASubCategory = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.id || !req.body.data) {
                    console.log("req has no id param or data to update");
                    res.sendStatus(400).send("no id param or data to update");
                    return;
                }
                let required_sub_catogrey = yield sub_category_model_1.Sub_Catagory.findByPk(req.params.id);
                if (!required_sub_catogrey) {
                    console.log("no sub_categorey available with this id");
                    res.status(404).send("wrong ID to update the data");
                }
                let update_categorey = yield sub_category_model_1.Sub_Catagory.update(Object.assign({}, req.body.data), { where: { id: req.params.ID } });
                console.log("everything  is okey");
                res.status(200).send(update_categorey);
            }
            catch (err) {
                console.log("updating a category : ", err);
                res.status(400).send("fetal in updating a categorey");
            }
        });
        this.readAllSubCAtagoriesInACtagorey = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!req.params.ids) {
                    console.log("req has no id in the param");
                    res.sendStatus(400).send("req has no id in param");
                    return;
                }
                const subcategories = yield sub_category_model_1.Sub_Catagory.findAll({ where: {
                        catagory_id: req.params.ids
                    } });
                if (subcategories.length == 0) {
                    res.status(404).send("no data availble with this associated id");
                    return;
                }
                res.status(200).send(subcategories);
            }
            catch (err) {
                console.log("error in fetching all sub categoreis");
                res.status(500).send("an unknon error occur");
            }
        });
    }
}
exports.default = sub_Catagory_controller;
