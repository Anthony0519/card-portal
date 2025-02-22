"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardDetails = exports.viewAllCards = exports.viewCard = void 0;
const cards_1 = require("../../core/controllers/cards");
const forbiddenError_1 = __importDefault(require("../../core/errors/forbiddenError"));
const utilities_1 = require("../../core/helper/utilities");
const viewCard = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.type) {
            throw new forbiddenError_1.default({ message: "type is required" });
        }
        const response = yield (0, cards_1.findOneCard)(Number(req.params.id), req.query.type);
        res.json((0, utilities_1.responseHandler)(response, "Card Retrieved"));
    }
    catch (error) {
        next(error);
    }
});
exports.viewCard = viewCard;
const viewAllCards = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.query.type && !req.query.page) {
            throw new forbiddenError_1.default({ message: "Both type and page are required" });
        }
        const type = req.query.type;
        const page = parseInt(req.query.page) || 1;
        const limit = 10;
        const offset = (page - 1) * limit;
        const response = yield (0, cards_1.fetchAllCards)(type, limit, offset, page);
        res.json((0, utilities_1.responseHandler)(response, "All Cards Retrieved"));
    }
    catch (error) {
        next(error);
    }
});
exports.viewAllCards = viewAllCards;
const dashboardDetails = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, cards_1.dashboard)();
        res.json((0, utilities_1.responseHandler)(response, "Details Retrieved"));
    }
    catch (error) {
        next(error);
    }
});
exports.dashboardDetails = dashboardDetails;
