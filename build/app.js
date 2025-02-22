"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errors_1 = require("./core/constant/errors");
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const errorHandler_1 = require("./api/middlewares/errorHandler");
const base_1 = __importDefault(require("./api/routes/base"));
const swagger_ui_express_1 = require("swagger-ui-express");
const docs_setup_1 = __importDefault(require("./core/utilities/docs.setup"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: "*" }));
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('date[web] :method :url :status :response-time ms - :res[content-length]'));
app.use('/docs', swagger_ui_express_1.serve, (0, swagger_ui_express_1.setup)(docs_setup_1.default));
app.use('/', base_1.default);
app.use((req, res, _next) => {
    res.status(404).send({
        status: false,
        error: 'not found',
        message: errors_1.Errors.RESOURCE_NOT_FOUND,
        data: {},
        path: req.url
    });
});
app.use((err, req, res, next) => {
    if (err) {
        (0, errorHandler_1.handleErrors)(err, req, res, next);
    }
    else {
        next();
    }
});
exports.default = app;
