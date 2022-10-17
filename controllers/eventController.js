const { events } = require('../models')
const db = require('../models')

const Events = db.events

//create

const addEvents = (async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "please insert id"
        })
        return
    }

    const eventInfo = {
        name: req.body.name,
        description: req.body.description,
        date_of_event: req.body.date_of_event,
        no_of_ticket: req.body.no_of_ticket,
        cost: req.body.cost,
        user_id: req.body.user_id,
    }
    try {
        const event = await Events.create(eventInfo)
        res.status(200).send(event)
    } catch (err) {
        res.status(500).send({
            message: err.message || "error accured"
        })
    }

})

//get all users
const getallEvents = (async (req, res) => {
    const event = await Events.findAll({})
    res.status(200).send(event)
})


module.exports = {
    addEvents,
    getallEvents
}
