"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DomainError extends Error {
    constructor(payload = {
        message: "An error occoured",
        reason: "unknown",
        data: {},
        status: false
    }) {
        super(payload.message);
        this.error_name = "domain_error";
        this.httpCode = 500;
        this.reason = payload.reason;
        this.data = payload.data;
        this.status = payload.status;
        Error.captureStackTrace(this, this.constructor);
    }
    getStatus() {
        return this.status;
    }
    getReason() {
        return this.reason;
    }
    getHttpCode() {
        return this.httpCode;
    }
    getData() {
        return this.data;
    }
    getName() {
        return this.error_name;
    }
}
exports.default = DomainError;
