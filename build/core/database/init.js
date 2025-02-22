"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utilities/logger");
const sequelize_1 = __importDefault(require("./sequelize"));
const dbConnection = () => {
    try {
        sequelize_1.default.authenticate();
        logger_1.logger.info("Database connected successfully");
    }
    catch (error) {
        logger_1.logger.error("Unable to connect to database: ", error);
    }
};
exports.default = dbConnection;
