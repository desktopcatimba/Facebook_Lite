const express = require('express')
const router = express.Router()
const ChatsControllers = require('../controllers/chatsControllers')

router.get('/:id', ChatsControllers.getChat)

module.exports = router