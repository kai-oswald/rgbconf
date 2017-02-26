var piblaster = require("pi-blaster.js");

const RED_PIN = 17;
const GREEN_PIN = 22;
const BLUE_PIN = 24;

exports.setColor = function(r, g, b) {
    setLight(RED_PIN, r);
    setLight(GREEN_PIN, g);
    setLight(BLUE_PIN, b);
}

function setLight(pin, brightness) {
    var realBrightness = (brightness / 255).toFixed(2);
    piblaster.setPwm(pin, realBrightness);
}
