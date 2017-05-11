let mongoose = require('mongoose'),
	Schema = mongoose.Schema

var DBreqSchema = new Schema({
	record1: 	String,
	subjectid:	String,
	timestamp:	{type: Date, default: Date.now()}
  },
  {collection: 'test'}
)

module.exports = mongoose.model('DBreq', DBreqSchema)
