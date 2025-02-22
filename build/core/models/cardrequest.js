"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../database/sequelize"));
class requestCard extends sequelize_1.Model {
}
requestCard.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    branch_name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    card_type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    initiator: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    card_charges: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    batch: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false
    },
    date_requested: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    tableName: "requestedCards",
    underscored: true,
    sequelize: sequelize_2.default
});
exports.default = requestCard;
