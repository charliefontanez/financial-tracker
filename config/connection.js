require('dotenv').config('../config.env');

const Sequelize = require('sequelize');

let sequelize;
console.log('start');
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  console.log('local');
  sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  });
}

//const sequelize = process.env.JAWSDB_URL
 // ? new Sequelize(process.env.JAWSDB_URL)
  //: new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    
 //     host: 'localhost',
  //    dialect: 'mysql',
  //    dialectOptions: {
  //      decimalNumbers: true,
  //    },
  //  });

module.exports = sequelize;
