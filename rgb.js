var piblaster = require("pi-blaster.js");

const RED_PIN = 17;
const GREEN_PIN = 22;
const BLUE_PIN = 24;

exports.setColor = function(color) {
    exports.setRGB(color.r, color.g, color.b);
}

exports.setRGB = function (r, g, b) {
    setLight(RED_PIN, r);
    setLight(GREEN_PIN, g);
    setLight(BLUE_PIN, b);
}

exports.Color = function (r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

exports.getRandomColor = function () {
    var r = Math.round(Math.random() * 255);
    var g = Math.round(Math.random() * 255);
    var b = Math.round(Math.random() * 255);
    return new exports.Color(r, g, b);
}

function setLight(pin, brightness) {
    var realBrightness = (brightness / 255).toFixed(2);
    piblaster.setPwm(pin, realBrightness);
}