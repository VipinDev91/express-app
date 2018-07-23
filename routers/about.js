var express = require('express');
var router = express.Router();

router.get('/about', function(req, res){
	console.log("I am in about pageee"); 
	res.render('about');
});



module.exports = router;
