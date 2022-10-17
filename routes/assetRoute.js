const express = require('express')
const router = express.Router()
const assetController = require('../controllers/assetController')

router.post('/',assetController.addAssetToEvent)
router.get('/',assetController.getAssetofEvent)
router.delete('/:id',assetController.deleteAssetOfevent)

module.exports = router