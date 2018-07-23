var express = require('express');
var router = express.Router();

router.get('/services', function(req, res){
	console.log("I am in services pageee"); 
	res.render('services');
});



module.exports = router;
