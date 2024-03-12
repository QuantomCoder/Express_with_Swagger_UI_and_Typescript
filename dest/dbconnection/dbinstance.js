"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    dialect: "postgres",
    host: 'localhost',
    port: 5432,
    username: "postgres",
    password: "0000",
    database: "postgres",
    logging: false,
    query: {
        raw: true,
    }
});
exports.default = sequelize;
