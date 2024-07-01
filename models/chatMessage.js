const Sequelize = require('sequelize');
const sequelize = require('../util/database');
const User = require('./user');

const ChatMessage = sequelize.define('chatMessage', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});


module.exports = ChatMessage;