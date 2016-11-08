'use strict'
let Controller = require('./Controller')
const EVENT = require('../models/event')

class EventContoller extends Controller {

    constructor() {
        super(EVENT, 'events/')
    }

    findPublished(req, res, next){
      EVENT.find({isDraft: false}).sort({createdAt:"desc"}).exec((err, objects) => {
          if (err)
              next(err)
          else
              res.json(objects)
      })
    }

}

module.exports = EventContoller
