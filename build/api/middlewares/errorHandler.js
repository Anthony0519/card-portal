"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = handleErrors;
const sequelize_1 = require("sequelize");
const DomainError_1 = __importDefault(require("../../core/errors/DomainError"));
const logger_1 = require("../../core/utilities/logger");
const errors_1 = require("../../core/constant/errors");
function handleErrors(err, _req, res, _next) {
    if (err instanceof DomainError_1.default) {
        return res.status(err.getHttpCode()).send({
            status: err.getStatus(),
            error: err.getName(),
            message: err.message,
            reason: err.getReason(),
            data: err.getData ? err.getData() || {} : {}
        });
    }
    if (err instanceof sequelize_1.ValidationError) {
        const errorData = {};
        const httpCode = 422;
        errorData.error = 'validation_error';
        errorData.message = 'the provided payload was not valid';
        const data = {};
        const error = err;
        error.errors.forEach((validationErrorItem) => {
            if (validationErrorItem.path !== null) {
                const itemErrors = data[validationErrorItem.path] || [];
                itemErrors.push(validationErrorItem.message);
                data[validationErrorItem.path] = itemErrors;
            }
            else {
            }
        });
        errorData.data = data;
        res.status(httpCode).send(errorData);
        logger_1.logger.error('[Database Validation Error] => ', error);
    }
    logger_1.logger.error('[Unhandled Error] => ', err);
    return res.status(500).send({
        status: false,
        error: 'server_error',
        message: errors_1.Errors.INTERNAL_SERVER,
        data: {}
    });
}
