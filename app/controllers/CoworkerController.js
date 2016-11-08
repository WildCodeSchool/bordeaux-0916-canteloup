'use strict'
let Controller = require('./Controller')
const COWORKER = require('../models/coworker')

class CoworkerContoller extends Controller {

    constructor() {
        super(COWORKER, 'coworkers/')
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
