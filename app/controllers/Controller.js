'use strict'
class Controller {

    constructor(model) {
        this.model = model
    }

    findAll(req, res, next) {
        if (req.query.limit && isNaN(Number(req.query.limit))) {
            next("Limit must be a number")
        } else {
            this.model.find({}).sort({
                createdAt: "desc"
            }).limit(Number(req.query.limit) || 0).exec((err, objects) => {
                if (err)
                    next(err)
                else
                    res.json(objects)
            })
        }
    }

    findById(req, res, next) {
        this.model.findById(req.params.id, (err, object) => {
            if (err)
                next(err)
            else
                res.json(object)
        })
    }

    create(req, res, next) {
        this.model.create(req.body, (err, object) => {
            if (err)
                next(err)
            else
                res.json(object)
        })
    }

    update(req, res, next) {
        this.model.update({
            _id: req.params.id
        }, req.body, (err, object) => {
            if (err)
                next(err)
            else
                return this.findById(req, res, next)
        })
    }

    delete(req, res, next) {
        this.model.findByIdAndRemove(req.params.id, (err) => {
            if (err)
                next(err)
            else
                res.sendStatus(200)
        })
    }

}

module.exports = Controller
