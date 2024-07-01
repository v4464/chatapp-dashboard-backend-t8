const express = require('express');
const userController = require('../controllers/user');
const { authenticate } = require('../middleware/auth');
const router = express.Router();


router.post('/signup', userController.signup);
router.post('/login' , userController.login);
router.get('/loggedin', authenticate, userController.getLoggedInUsers);


module.exports = router;