"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cards_1 = require("../requestHandlers/cards");
const swagger_1 = require("./swagger");
const router = (0, express_1.Router)();
(0, swagger_1.cardsDoc)();
router.get("/dashboard", cards_1.dashboardDetails);
router.get("/cards", cards_1.viewAllCards);
router.get("/card/:id", cards_1.viewCard);
exports.default = router;
