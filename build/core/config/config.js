"use strict";
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('dotenv').config();
const databaseConfig = {
    database: process.env.MYSQL_DATABASE,
    username: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    }
};
module.exports = {
    development: Object.assign({}, databaseConfig),
    test: Object.assign({}, databaseConfig),
    staging: Object.assign({}, databaseConfig),
    production: Object.assign(Object.assign({}, databaseConfig), { logging: false })
};
