let mongoose = require('mongoose'),
	Schema = mongoose.Schema

var DBreqSchema = new Schema({
        idFirstName:    String,
	idLastName:	String,
	idNumber:	String,
	idDOB:		String,
	idSex:		String,
	idParentsName:	String,
	idParentsContact: String,
	idParentsEmail:	String,
	idAddress:	String,
	idLanguage:	String,
	clinDiag1:	String,
	clinDiag2:	String,
	clinDiag3:	String,
	clinIsEpilepsy:	Boolean,
	timestamp:	{type: Date, default: Date.now()}
  },
  {collection: 'test'}
)

module.exports = mongoose.model('DBreq', DBreqSchema)
