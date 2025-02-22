"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.responseHandler = void 0;
const responseHandler = (payload, message = 'success') => {
    return {
        status: true,
        message,
        data: payload || {}
    };
};
exports.responseHandler = responseHandler;
