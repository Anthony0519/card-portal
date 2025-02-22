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
exports.fetchAllCards = exports.findOneCard = exports.dashboard = void 0;
const cardType_1 = require("../constant/cardType");
const BadRequestError_1 = __importDefault(require("../errors/BadRequestError"));
const resourceNotFoundError_1 = __importDefault(require("../errors/resourceNotFoundError"));
const cards_1 = require("../repository/cards");
const dashboard = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const cardRepo = new cards_1.CardRepository();
    const allIssuedCard = yield cardRepo.fetchAll('issued_card');
    const total_active_card = (_a = allIssuedCard === null || allIssuedCard === void 0 ? void 0 : allIssuedCard.length) !== null && _a !== void 0 ? _a : 0;
    const allRequestedCard = yield cardRepo.fetchAll('card_request');
    const filterPersonalized = yield (allRequestedCard === null || allRequestedCard === void 0 ? void 0 : allRequestedCard.filter((card) => 'card_type' in card).filter(card => card.card_type === "personalized"));
    const total_personalised_card = (_b = filterPersonalized === null || filterPersonalized === void 0 ? void 0 : filterPersonalized.length) !== null && _b !== void 0 ? _b : 0;
    let total_revenue = 0;
    allRequestedCard === null || allRequestedCard === void 0 ? void 0 : allRequestedCard.filter((card) => 'card_charges' in card).forEach(card => total_revenue += card.card_charges);
    const filterPendingRequest = yield (allRequestedCard === null || allRequestedCard === void 0 ? void 0 : allRequestedCard.filter((card) => "status" in card).filter(card => card.status === "pending"));
    const pending_request = (_c = filterPendingRequest === null || filterPendingRequest === void 0 ? void 0 : filterPendingRequest.length) !== null && _c !== void 0 ? _c : 0;
    return {
        recent_request: allRequestedCard,
        total_active_card,
        total_personalised_card,
        total_revenue,
        pending_request
    };
});
exports.dashboard = dashboard;
const findOneCard = (id, type) => __awaiter(void 0, void 0, void 0, function* () {
    const cardRepo = new cards_1.CardRepository();
    const card = yield cardRepo.fetchOne({ id: id }, type);
    if (type !== cardType_1.CardTypes.CARD_PROFILE && type !== cardType_1.CardTypes.REQUESTED_CARD) {
        throw new BadRequestError_1.default({ message: "Invalid Type" });
    }
    if (!card) {
        throw new resourceNotFoundError_1.default({ message: `Card with id ${id} not found` });
    }
    return card;
});
exports.findOneCard = findOneCard;
const fetchAllCards = (type, limit, offset, page) => __awaiter(void 0, void 0, void 0, function* () {
    if (type !== cardType_1.CardTypes.CARD_PROFILE && type !== cardType_1.CardTypes.REQUESTED_CARD) {
        throw new BadRequestError_1.default({ message: "Invalid Type" });
    }
    const cardRepo = new cards_1.CardRepository();
    const total = yield cardRepo.countAllCards(type);
    const data = yield cardRepo.fetchAll(type, offset, limit);
    if (!data || data.length === 0) {
        throw new resourceNotFoundError_1.default({ message: `Card not found` });
    }
    return {
        data,
        total,
        page,
        totalPages: Math.ceil(total / limit)
    };
});
exports.fetchAllCards = fetchAllCards;
