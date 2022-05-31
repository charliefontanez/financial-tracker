const dotenv = require('dotenv').config('../config.env')
const Sequelize = require('sequelize');

sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
        decimalNumbers:true
    }
});

module.exports = sequelize;