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
exports.CardRepository = void 0;
const BaseRepository_1 = __importDefault(require("./BaseRepository"));
const cardprofile_1 = __importDefault(require("../models/cardprofile"));
const cardrequest_1 = __importDefault(require("../models/cardrequest"));
const cardType_1 = require("../constant/cardType");
class CardRepository extends BaseRepository_1.default {
    constructor() {
        super(cardprofile_1.default);
    }
    fetchOne(option, type) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = type.toLowerCase() === cardType_1.CardTypes.CARD_PROFILE ? cardprofile_1.default : cardrequest_1.default;
            return model.findOne({ where: option });
        });
    }
    fetchAll(type, offset, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = type.toLowerCase() === cardType_1.CardTypes.CARD_PROFILE ? cardprofile_1.default : cardrequest_1.default;
            return model.findAll({
                offset,
                limit,
                order: [['created_at', 'DESC']]
            });
        });
    }
    countAllCards(type) {
        return __awaiter(this, void 0, void 0, function* () {
            const model = type.toLowerCase() === cardType_1.CardTypes.CARD_PROFILE ? cardprofile_1.default : cardrequest_1.default;
            return model.count();
        });
    }
}
exports.CardRepository = CardRepository;
