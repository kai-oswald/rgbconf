var request = require('request');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(express.static(__dirname + '/public'));

require('./routes')(app);

app.listen(3000, function () {
    console.log('rgbconf listening on port 3000!');
});