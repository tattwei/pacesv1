// server/controllers/db.js

let Models = require('../models')

module.exports={
    
   save(req,res){
	res.send('<h1>SaveDB</h1>')
   },

    load(req,res){
       //res.send(req.params.subjectid)
	Models.Testdata.find(req.params, (err,record)=>{
		res.json(record)           
	})
    }
}
