/* -------------------------------- *\
	 				   ROUTES EVENTS
\* -------------------------------- */
'use strict'
let TarifController = require('../controllers/TarifController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let ctrl = new TarifController()

	app.get('/tarifs', (req, res, next) => { return ctrl.findAll(req, res, next) })

	app.get('/tarifs/:id', (req, res, next) => { return ctrl.findById(req, res, next) })

	app.post('/tarifs', Auth.user.isAdministrator,  (req, res, next) => { return ctrl.create(req, res, next) })

	app.put('/tarifs/:id', Auth.user.isAdministrator, (req, res, next) => { return ctrl.update(req, res, next) })

	app.delete('/tarifs/:id', Auth.user.isAdministrator, (req, res, next) => { return ctrl.delete(req, res, next) })

	app.post('/tarifs/upload/:id', Auth.user.isAdministrator, (req, res, next) => { return ctrl.upload(req, res, next) })

}
