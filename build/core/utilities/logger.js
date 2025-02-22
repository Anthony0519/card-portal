"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = require("winston");
const safe_json_stringify_1 = __importDefault(require("safe-json-stringify"));
const application_1 = require("../config/application");
const timestampDefinition = { format: 'YYYY-MM-DDTHH:mm:ss.SSS Z' };
const logger = (0, winston_1.createLogger)({
    level: 'info',
    format: winston_1.format.combine(winston_1.format.timestamp(timestampDefinition), winston_1.format.json()),
    transports: [
        new winston_1.transports.File({
            filename: 'logs/error.log',
            level: 'error',
            silent: process.env.NODE_ENV === 'test'
        }),
        new winston_1.transports.File({
            filename: 'logs/combined.log',
            silent: process.env.NODE_ENV === 'test'
        })
    ]
});
exports.logger = logger;
if (application_1.settings.application_logs === 'true') {
    const customFormat = winston_1.format.printf((_a) => {
        var { level, message, timestamp } = _a, rest = __rest(_a, ["level", "message", "timestamp"]);
        const stringifiedRest = (0, safe_json_stringify_1.default)(rest);
        return `${timestamp} ${level}: ${message} ${stringifiedRest === '{}' ? '' : stringifiedRest}`;
    });
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp(timestampDefinition), customFormat)
    }));
}
