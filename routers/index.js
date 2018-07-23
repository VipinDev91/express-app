var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	console.log("I am in first index page");
	res.render('index');
});

module.exports = router;
