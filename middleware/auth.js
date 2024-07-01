const jwt = require('jsonwebtoken');
const User = require('../models/user');

const authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (!token) {
            return res.status(401).json({ success: false, message: 'Authentication token missing' });
        }

        const decoded = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log('userID >>>>', decoded.userid);
        const user = await User.findByPk(decoded.userid);
        if (!user) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        req.user = user;
        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({ success: false, message: 'Invalid token' });
    }
}

module.exports = {
    authenticate
};