'use strict'
let fs = require('fs')
let formidable = require('formidable')
let Controller = require('./Controller')
const TARIF = require('../models/tarif')

class TarifContoller extends Controller {

    constructor() {
        super(TARIF)
    }
    upload(req, res, next) {
        let form = new formidable.IncomingForm()

        form.uploadDir = './public/img/tarifs/'

        if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir);

        form
            .on('file', (field, file) => {
                if (!fs.existsSync(form.uploadDir + field)) fs.mkdirSync(form.uploadDir + field);
                fs.rename(file.path, form.uploadDir + file.name)
                this.model.findById(req.params.id).exec((err, event) => {
                    if (err) {
                        next(err)
                    } else {
                        event[field] = "/img/tarifs/" + file.name
                        event.save()
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

module.exports = TarifContoller
