"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../constant/errors");
const DomainError_1 = __importDefault(require("./DomainError"));
class ResourceNotFoundError extends DomainError_1.default {
    constructor(props = {
        message: errors_1.Errors.RESOURCE_NOT_FOUND
    }) {
        const { message, reason = '', data = null } = props;
        super({ message, reason, data, status: false });
        this.error_name = 'not_found';
        this.httpCode = 404;
    }
}
exports.default = ResourceNotFoundError;
