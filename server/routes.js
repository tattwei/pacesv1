// routes.js

let controllers = require('./controllers')
let api = require('./controllers/api')
let express = require('express')

module.exports.initialize = function(app, router){

	// ADD MY HTTP HANDLING METHODS HERE (POST, PUT, DELETE)
	router.get('/', controllers.home.index)
	router.get('/user/:subjectid', controllers.db.load)
	router.put('/user/:subjectid', controllers.db.save)
	//router.get('/api/images', api.images.list)
	
	// MIDDLEWARE HANDLING
	app.use('/', router)
	app.use(express.static('./server/public'))
}
