var express = require('express');
var router = express.Router();

router.get('/price', function(req, res){
	console.log("I am in price pageee"); 
	res.render('price');
});



module.exports = router;
