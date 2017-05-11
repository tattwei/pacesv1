let mongoose = require('mongoose'),
	Schema = mongoose.Schema

var UserauthSchema = new Schema({
        name: 		String,
	password: 	String,
	isAdmin:	Boolean
  },
  {collection: 'user'}
)

module.exports = mongoose.model('Userauth', UserauthSchema)
