express=require("express");
app=express();
reload=require("reload");
bodyParser = require('body-parser');
app.set('port', process.env.PORT || 3000);
app.set('view engine','ejs');
app.set('views','./views');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static('./public'));

app.use(require('./routers/index'));
app.use(require('./routers/about'));
app.use(require('./routers/contact'));
app.use(require('./routers/services'));
app.use(require('./routers/portfolio'));
app.use(require('./routers/blog-home'));
app.use(require('./routers/blog-single'));
app.use(require('./routers/price'));

/*
app.post('/contact', function(req, res){
	console.log("I am in contact post pageee");
		console.log(JSON.stringify(req.body));
	
	//res.render('contact');
});*/

var Server = app.listen(app.get('port'), function(){
  console.log('listen to port '+app.get('port'));
});

reload(Server, app);