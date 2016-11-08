'use strict'
let fs = require('fs')
let formidable = require('formidable')

class Controller {

    constructor(model, uploadFolder) {
        this.model = model
        this.uploadFolder = uploadFolder || ''
    }

    findAll(req, res, next) {
        this.model.find({}).sort({createdAt:"desc"}).exec((err, objects) => {
            if (err)
                next(err)
            else
                res.json(objects)
        })
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

    upload(req, res, next) {
        let form = new formidable.IncomingForm()

        form.uploadDir = './public/img/' + this.uploadFolder
        
        if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir);

        form
            .on('file', (field, file) => {
                fs.rename(file.path, form.uploadDir + "/" + file.name)
                this.model.findById(req.params.id).exec((err, coworker) => {
                    if (err){
                        next(err)
                    } else {
                      coworker.image = "/img/" + this.uploadFolder + file.name
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

module.exports = Controller
