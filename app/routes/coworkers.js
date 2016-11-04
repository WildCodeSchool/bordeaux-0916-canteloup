/* -------------------------------- *\
	 				   ROUTES PAGES
\* -------------------------------- */
'use strict'
let CoworkerController = require('../controllers/CoworkerController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let coworkeCtrl = new CoworkerController()

	app.get('/coworkers', (req, res, next) => { return coworkeCtrl.findAll(req, res, next) })

	app.get('/coworkers/:name', (req, res, next) => { return coworkeCtrl.findByName(req, res, next) })

	app.post('/coworkers', Auth.user.isAdministrator,  (req, res, next) => { return coworkeCtrl.create(req, res, next) })

	app.put('/coworkers/:id', Auth.user.isAdministrator, (req, res, next) => { return coworkeCtrl.update(req, res, next) })

	app.delete('/coworkers/:id', Auth.user.isAdministrator, (req, res, next) => { return coworkeCtrl.delete(req, res, next) })

}
