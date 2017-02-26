var request = require('request');
var ip = "http://192.168.2.103:4000";


function changeColor(color) {
    var options = {
        uri: ip,
        method: 'POST',
        contentType: "application/json",
        json: color
    };
    request(options, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            logColorChange(color);
        } else {
            console.log("could not change color.");
        }
    });
}

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render("index.html")
});

app.post("/color", function (req, res) {
    // if color is empty, set random color
    if (Object.keys(req.body).length === 0 && req.body.constructor === Object) {
        changeColor(rndColor());
    } else {
        changeColor(req.body);
    }
    res.send("true");
});

function rndColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return new Color(r, g, b);
}
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function logColorChange(color) {
    console.log("change color to: rgb(" + color.r + ", " + color.g + ", " + color.b + ").");
}