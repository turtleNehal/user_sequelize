const { users } = require('../models')
const db = require('../models')

const Users = db.users

//create

const addUsers = (async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "please insert first name"
        })
        return
    }

    const userInfo = {
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        wallet_id: req.body.wallet_id,
        avatar_url: req.body.avatar_url,
    }
    try {
        const user = await Users.create(userInfo)
        res.status(200).send(user)
    } catch (err) {
        res.status(500).send({
            message: err.message || "error accured"
        })
    }

})

//get all users
const getalluser = (async (req, res) => {
    const user = await Users.findAll({})
    res.status(200).send(user)
})


module.exports = {
    addUsers,
    getalluser
}
