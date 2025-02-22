"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cards_1 = __importDefault(require("./cards"));
const router = (0, express_1.Router)();
router.use('/api/card-portal', cards_1.default);
exports.default = router;
