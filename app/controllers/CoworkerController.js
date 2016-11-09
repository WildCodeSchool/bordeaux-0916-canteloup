'use strict'
let fs = require('fs')
let formidable = require('formidable')
let Controller = require('./Controller')
const COWORKER = require('../models/coworker')

class CoworkerContoller extends Controller {

    constructor() {
        super(COWORKER)
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

    upload(req, res, next) {
        let form = new formidable.IncomingForm()

        form.uploadDir = './public/img/coworkers/'

        if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir);

        form
            .on('file', (field, file) => {
                fs.rename(file.path, form.uploadDir + "/" + file.name)
                this.model.findById(req.params.id).exec((err, coworker) => {
                    if (err){
                        next(err)
                    } else {
                      coworker.image = "/img/coworkers/" + file.name
                      coworker.save()
                    }
                })
            })
            .on('end', () => {
                console.log('-> upload done')
                res.sendStatus(200)
            });
        form.parse(req);
    }

}

module.exports = CoworkerContoller
