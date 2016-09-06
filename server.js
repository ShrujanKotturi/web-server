var express = require('express');
var app = express();

// app.get('/', function (req, res){
// 	res.send('Hello Express');
// });

var middleware = require('./middleware');

app.use(middleware.logger);

app.get('/about', middleware.requireAuthentication, function (req, res){
	res.send('About page');
});

var PORT = 3000;

app.use(express.static(__dirname + '/public'));
//console.log(__dirname);
//app.listen(3000);
app.listen(PORT, function (){
	console.log('Express server listening on port number - '+ PORT);
});