"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../constant/errors");
const DomainError_1 = __importDefault(require("./DomainError"));
class BadRequestError extends DomainError_1.default {
    constructor(props = { message: errors_1.Errors.BAD_REQUEST }) {
        const { message, reason = '', data = null } = props;
        super({ message, reason, data, status: false });
        this.error_name = 'bad_request';
        this.httpCode = 400;
    }
}
exports.default = BadRequestError;
