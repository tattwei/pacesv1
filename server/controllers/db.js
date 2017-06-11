// server/controllers/db.js

let Models = require('../models')
let jwt = require('jsonwebtoken')

module.exports={

   auth(req,res,next){
	var token = req.body.token || req.query.token ||req.headers['x-access-token']
	//console.log(token)
	if(token){
	    let privateKey= "PACESisthefuture!"
	    jwt.verify(token, privateKey, (err, decoded)=>{
		if (err){
		    return res.send({
			success: false,
			message: "Invalid Token"
		    });
		} else{
		    req.decoded = decoded;
		    next();
		}
	    });

	} else{
	    return res.status(403).send({
		success: false,
		message: "No Token provided"
	    });
	}
   },
    
   save(req,res){
        //var subjectid = req.body.subjectid
        console.log('In SERVER', req.body);
        //var mydoc = Models.Testdata (req.body);
        //mydoc.save((err,result)=> {
        //    res.json(result)
        //});
        Models.DBreq.create(req.body, (err,result)=>{
             res.json(result)
        })
   },

    load(req,res){
       //res.send(req.params.subjectid)

       console.log("DB Search filter is ",req.params)
	Models.DBreq.find(req.params, (err,record)=>{

            console.log("DB found record(s) ", record)
            if(record.length==0){
               res.json({ success: false, message: "No records found", numrecords: 0 })

            }else{
               res.json({success: true, message: "OK", numrecords: record.length, records: record})
            }
            
	})
    }
}
