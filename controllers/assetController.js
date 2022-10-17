const { asset } = require('../models')
const db = require('../models')

const Assets = db.asset

//create

const addAssetToEvent = (async (req, res) => {
    if (!req.body.asset_url) {
        res.status(400).send({
            message: "please insert url"
        })
        return
    }

    const assetInfo = {
        asset_url: req.body.asset_url,
        asset_name: req.body.asset_name,
        asset_size: req.body.asset_size,
        asset_type: req.body.asset_type,
    }
    try {
        const asset = await Assets.create(assetInfo)
        res.status(200).send(asset)
    } catch (err) {
        res.status(500).send({
            message: err.message || "error accured"
        })
    }

})

//get all users
const getAssetofEvent = (async (req, res) => {
    const asset = await Assets.findAll({})
    res.status(200).send(asset)
})


//delete 
const deleteAssetOfevent = (async (req, res) => {
    id = req.params.id
    await Assets.destroy({ where: { id: id } })
    res.status(200).send("deleted")
})


module.exports = {
    addAssetToEvent,
    getAssetofEvent,
    deleteAssetOfevent
}
