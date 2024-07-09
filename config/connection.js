require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.ecommerce_db, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  dialectOptions: {
    decimalNumbers: true,
  },
});

module.exports = sequelize;
