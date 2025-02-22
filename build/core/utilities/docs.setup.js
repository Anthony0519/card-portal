"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const swaggerDefinition = {
    openapi: "3.0.0",
    info: {
        title: "card-portal api",
        version: "1.0.0",
        description: "A Restful API for card-portal",
        license: {
            name: "Licensed Under MIT",
            url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
            name: "github",
            url: "https://github.com/Anthony0519/card-portal.git",
        },
    },
    servers: [
        {
            url: 'http://localhost:3344',
            description: 'Development server',
        },
        {
            url: "https://card-api.onrender.com",
            description: 'Main Production server',
        }
    ],
};
const options = {
    swaggerDefinition,
    apis: [path_1.default.join(__dirname, '../../api/routes/**/*.ts')], // Adjust this as needed
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
