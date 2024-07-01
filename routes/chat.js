const express = require('express');
const chatController = require('../controllers/chat');
const { authenticate } = require('../middleware/auth');
const router = express.Router();

router.post('/message', authenticate, chatController.postMessage);
// Attach the authenticate middleware here

router.get('/messages', authenticate, chatController.getMessages);

module.exports = router;