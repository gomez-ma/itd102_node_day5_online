const config = require('../config/db');
const sequelize = require('sequelize');

//for connect database
const dataType = new sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
);

const db = {};

//(dataType, sequelize)
db.employee = require("./employee.model")(dataType, sequelize);

module.exports = db;