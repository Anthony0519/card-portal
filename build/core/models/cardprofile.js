"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize_2 = __importDefault(require("../database/sequelize"));
class cardProfile extends sequelize_1.Model {
}
cardProfile.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    card_holder: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    masked_pan: {
        type: sequelize_1.DataTypes.BIGINT,
        allowNull: false
    },
    expiration: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    batch: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    date_issued: {
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
    tableName: "cardProfiles",
    underscored: true,
    sequelize: sequelize_2.default
});
exports.default = cardProfile;
