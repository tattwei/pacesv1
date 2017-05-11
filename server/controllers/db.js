// server/controllers/db.js

let Models = require('../models')

module.exports={
    
   save(req,res){
        //var subjectid = req.body.subjectid
        console.log('In SERVER', req.body);
        //var mydoc = Models.Testdata (req.body);
        //mydoc.save((err,result)=> {
        //    res.json(result)
        //});
        Models.Testdata.create(req.body, (err,result)=>{
             res.json(result)
        })
   },

    load(req,res){
       //res.send(req.params.subjectid)
	Models.Testdata.find(req.params, (err,record)=>{
		res.json(record)           
	})
    }
}
