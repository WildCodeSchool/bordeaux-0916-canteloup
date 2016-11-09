'use strict'
let fs = require('fs')
let formidable = require('formidable')
let Controller = require('./Controller')
const PAGE = require('../models/page')

class PageController extends Controller {

    constructor() {
        super(PAGE)
    }

    findByName(req, res, next) {
        this.model.findOne({
            name: req.params.name
        }, (err, page) => {
            if (err)
                next(err)
            else if (!page)
                res.sendStatus(404)
            else
                res.json(page)
        })
    }

    upload(req, res, next) {
        let form = new formidable.IncomingForm()

        form.uploadDir = './public/img/pages/' + req.params.id

        if (!fs.existsSync('./public/img/pages/')) fs.mkdirSync('./public/img/pages/');
        if (!fs.existsSync(form.uploadDir)) fs.mkdirSync(form.uploadDir);

        form
            .on('file', (field, file) => {
                fs.rename(file.path, form.uploadDir + "/" + file.name)
                this.model.findById(req.params.id).exec((err, page) => {
                    if (err){
                        next(err)
                    } else {
                      let content = JSON.parse(page.content)
                      content[field] = 'img/pages/' + req.params.id + '/' + file.name
                      page.content = JSON.stringify(content)
                      page.save()
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

module.exports = PageController
