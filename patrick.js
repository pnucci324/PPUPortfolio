var express = require('express');

var app = express();

//set up handlebars view engine
var handlebars = require('express3-handlebars')
	.create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3001);

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home',
		{
			page: 'home',
			tile: 'Homepage',
		}
	);
});

app.get('/projects',function(req,res){
	res.render('projects',
		{
			page: 'projects',
			title: 'Projects',
			isProjects: true,
		}
	);
});

app.get('/service',function(req,res){
	res.render('service',
		{
			page: 'service',
			title: 'Service',
			isService: true,
		}
	);
});

app.get('/about',function(req,res){
	res.render('about',
		{
			page: 'about',
			title: 'About',
			isAbout: true,
		}
	);
});
	
app.get('/clients',function(req,res){
	res.render('clients',
		{
			page: 'clients',
			title: 'Clients',
			isClients: true,
		}
	);
});

app.get('/contact',function(req,res){
	res.render('contact',
		{
			page: 'contact',
			title: 'Contact',
			isContact: true,
		}
	);
});
//404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found');
});

//505 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send('505 - Server Error');
});

app.listen(app.get('port'), function(){
	console.log( 'Express started on http://localhost: ' +
		app.get('port') + '; Ctrl-C to terminate.');
});
