'use strict'
let Controller = require('./Controller')
const EVENT = require('../models/event')

class EventContoller extends Controller {

    constructor() {
        super(EVENT, 'events/')
    }

    findPublished(req, res, next) {
        if (req.query.limit && isNaN(Number(req.query.limit))) {
            next("Limit must be a number")
        } else {
            EVENT.find({
                isDraft: false
            }).sort({
                createdAt: "desc"
            }).limit(Number(req.query.limit) || 0 ).exec((err, objects) => {
                if (err)
                    next(err)
                else
                    res.json(objects)
            })
        }
    }

}

module.exports = EventContoller
