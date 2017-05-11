// routes.js

let controllers = require('./controllers')
let api = require('./controllers/api')
let express = require('express')
let bodyParser = require('body-parser') 

module.exports.initialize = function(app, router){

	// ADD MY HTTP HANDLING METHODS HERE (POST, PUT, DELETE)
	router.get('/', controllers.home.index)
	router.get('/user/:subjectid', controllers.db.auth, controllers.db.load)
        router.post('/user/:subjectid', controllers.db.auth, controllers.db.save)
        router.post('/authenticate', controllers.users.auth)
	//router.get('/api/images', api.images.list)
	
	// MIDDLEWARE HANDLING
	app.use('/', router)
	app.use(express.static('./server/public'))
        app.use(bodyParser.urlencoded({extended:false}))
        app.use(bodyParser.json())
}
