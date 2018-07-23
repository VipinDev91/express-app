var express = require('express');
var router = express.Router();

router.get('/blog-home', function(req, res){
	console.log("I am in blog-home pageee"); 
	res.render('blog-home');
});



module.exports = router;
