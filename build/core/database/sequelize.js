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
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const sequelizeConfig = require('../config/config')[process.env.NODE_ENV || 'development'];
const { database, username, password } = sequelizeConfig, otherConfig = __rest(sequelizeConfig, ["database", "username", "password"]);
const modifiedConfig = Object.assign(Object.assign({}, otherConfig), { defind: {
        underscored: true
    } });
const sequelize = new sequelize_1.Sequelize(database || '', username || '', password || '', modifiedConfig);
exports.default = sequelize;
