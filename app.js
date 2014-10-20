var express = require('express');
var bodyParser = require('body-parser');

//require the mongoose module
var mongoose=require('mongoose');

//our controller
var indexController = require('./controllers/index.js');

//connect to the mongodb
//only needed once per project
mongoose.connect('mongodb://localhost/drugs');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', indexController.index);
app.post('/smokeIt', indexController.smokeIt);

var server = app.listen(5098, function() {
	console.log('Express server listening on port ' + server.address().port);
});
