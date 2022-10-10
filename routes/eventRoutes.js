const express = require('express')
const router = express.Router()
const userController = require('../controllers/eventController')

router.post('/',userController.addEvents)
router.get('/',userController.getallEvents)


module.exports = router