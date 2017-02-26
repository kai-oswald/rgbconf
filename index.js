var request = require('request');
var rgb = require("./rgb");
var express = require('express');
var bodyParser = require('body-parser');

function changeColor(color) {
    rgb.setColor(color.r, color.g, color.b);
}

var app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); // to support JSON-encoded bodies

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    res.render("index.html");
});

app.post("/color", function (req, res) {
    // if color is empty, set random color
    var color = req.body;
    if (Object.keys(color).length === 0 && color.constructor === Object) {
        color = rndColor();
        changeColor(color);
    } else {
        changeColor(color);
    }
    res.send(color);

});

function rndColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return new Color(r, g, b);
}

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function logColorChange(color) {
    console.log("change color to: rgb(" + color.r + ", " + color.g + ", " + color.b + ").");
}

app.listen(3000, function () {
    console.log('rgbconf listening on port 3000!');
});