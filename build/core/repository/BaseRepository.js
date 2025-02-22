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
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("../utilities/logger");
const sequelize_1 = require("sequelize");
class Repository {
    constructor(model) {
        this.model = model;
        this.model = model;
    }
    findByPk(id, options) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findByPk(id, options);
            return result ? result.toJSON() : null;
        });
    }
    findOne(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findOne(payload);
            return result ? result.toJSON() : null;
        });
    }
    findAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.findAll(payload);
            return result.map((item) => item.toJSON());
        });
    }
    countAll(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.count(payload);
        });
    }
    generateSelectQuery(options) {
        var _a;
        const queryInterface = (_a = this.model.sequelize) === null || _a === void 0 ? void 0 : _a.getQueryInterface();
        if (!queryInterface)
            throw new Error('An error occurred generating a query');
        if (options === null || options === void 0 ? void 0 : options.include) {
            this.model._validateIncludedElements.bind(this.model)(options);
        }
        sequelize_1.Utils.mapFinderOptions(options, this.model);
        const query = queryInterface.queryGenerator.selectQuery(this.model.getTableName(), options, this.model);
        logger_1.logger.info(`[DATABASE QUERY ${new Date()}] => Generated: ${query}`);
        return query;
    }
}
exports.default = Repository;
