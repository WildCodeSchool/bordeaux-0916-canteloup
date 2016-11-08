/* -------------------------------- *\
	 				   ROUTES EVENTS
\* -------------------------------- */
'use strict'
let EventController = require('../controllers/EventController')
let Auth = require('../middlewares/authorization.js')

module.exports = (app) => {

	let eventCtrl = new EventController()

	app.get('/events', (req, res, next) => { return eventCtrl.findAll(req, res, next) })

	app.get('/events/published', (req, res, next) => { return eventCtrl.findPublished(req, res, next) })

	app.get('/events/:id', (req, res, next) => { return eventCtrl.findById(req, res, next) })

	app.post('/events', Auth.user.isAdministrator,  (req, res, next) => { return eventCtrl.create(req, res, next) })

	app.put('/events/:id', Auth.user.isAdministrator, (req, res, next) => { return eventCtrl.update(req, res, next) })

	app.delete('/events/:id', Auth.user.isAdministrator, (req, res, next) => { return eventCtrl.delete(req, res, next) })

	app.post('/events/upload/:id', Auth.user.isAdministrator, (req, res, next) => { return eventCtrl.upload(req, res, next) })

}
