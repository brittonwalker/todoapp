// set up ======
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database')
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// configuration ===
mongoose.connect(database.url)

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

// load routes
require('./routes/routes')(app);

// listen 
app.listen(8080);
console.log('Todo app listening on port 8080');
