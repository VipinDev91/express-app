var express = require('express');
var router = express.Router();

router.get('/portfolio', function(req, res){
	console.log("I am in about pageee"); 
	res.render('portfolio');
});



module.exports = router;
