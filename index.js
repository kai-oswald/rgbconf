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
            console.log("success");
        } else {
            console.log(response.statusCode);
        }
    });
}

var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.get('/', function (req, res) {
    res.render("index.html")
});

app.get("/color", function (req, res) {
    var random = rndColor();
    changeColor(random);
    res.send("true");
});

function rndColor() {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return {
        r: r,
        g: g,
        b: b
    }

}
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});