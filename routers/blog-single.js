var express = require('express');
var router = express.Router();

router.get('/blog-single', function(req, res){
	console.log("I am in blog-single pageee"); 
	res.render('blog-single');
});



module.exports = router;
