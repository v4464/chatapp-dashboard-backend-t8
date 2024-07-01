const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./util/database');
const userRoutes = require('./routes/user');
const chatRoutes = require('./routes/chat');
const User = require('./models/user');
const ChatMessage = require('./models/chatMessage');
const cors = require('cors');

const app = express();

dotenv.config();

app.use(cors({
    origin: "*",
    credentials: true,
})
);
app.use(express.json());
app.use('/user', userRoutes);
app.use('/chat', chatRoutes);

User.hasMany(ChatMessage, { foreignKey: 'userId' });
ChatMessage.belongsTo(User, { foreignKey: 'userId' });

app.use(express.static(path.join(__dirname, 'public')));

app.get('/signup.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'signup', 'signup.html'));
});

app.get('/login.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'login', 'login.html'));
});

app.get('/ChatApp/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'ChatApp', 'index.html'));
});

sequelize
.sync({force: true})
.then(() => {
    app.listen(5000);
})
.catch(err => {
    console.log(err);
});