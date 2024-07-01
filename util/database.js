const Sequelize = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();
const sequelize = new Sequelize('chatapp', 'root', 'Vaibhav@123', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;
