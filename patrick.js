var express = require('express');

var app = express();

app.set('port', process.env.PORT || 3000);

//404 page
app.use(function(req, res){
	res.type('text/plain');
	res.status(404);
	res.send('404 - Not Found);
});

//505 page
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.type('text/plain');
	res.status(500);
	res.send(505 - Server Error');
});

app.listen(app.get('port), function(){
	console.log( 'Express started on http://localhost: ' +
		app.get('port') + '; Ctrl-C to terminate.');
});
