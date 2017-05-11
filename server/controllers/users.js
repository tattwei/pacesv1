

// server/controllers/users.js

let Models = require('../models')
let jwt = require('jsonwebtoken')

module.exports={
    
   auth(req,res){
        console.log(req.body)
        Models.Userauth.findOne({name: req.body.name}, (err,user)=>{
	    if (err) throw err;

            console.log(user)
            if(!user){
		res.json({
		    success: false,
		    message: "Authentication failed. User not found",
		    token: 'NULL'
		});
            } else if(user){
		//Check if passwords match
		if (user.password != req.body.password){
		    res.json({
			success:false,
			message: "Authentication failed. Wrong password",
			token: 'NULL'
		    });
		} else {

		    var privateKey = "PACESisthefuture!"
		    // Create a token
		    var token = jwt.sign(user, privateKey ,{expiresIn: '24h'});
		    res.json({
			success:true,
			message: "Enjoy your token",
			token: token
		    });
		}
	    }

        });
   }

}
