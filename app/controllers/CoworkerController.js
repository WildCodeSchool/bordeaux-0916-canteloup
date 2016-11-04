'use strict'
let Controller = require('./Controller')
const PAGE = require('../models/page')

class CoworkerContoller extends Controller {

    constructor() {
        super(PAGE)
    }

    findByName(req, res, next) {
        this.model.findOne({
            company: req.params.name
        }, (err, coworker) => {
            if (err)
                next(err)
            else if (!coworker)
                res.sendStatus(404)
            else
                res.json(coworker)
        })
    }
}

module.exports = CoworkerContoller
