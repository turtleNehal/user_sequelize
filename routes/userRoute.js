const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.post('/',userController.addUsers)
router.get('/',userController.getalluser)


module.exports = router