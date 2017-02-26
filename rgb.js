var gpio = require("pi-gpio");

const RED_PIN = 17;
const GREEN_PIN = 22;
const BLUE_PIN = 24;

module.exports = function(r, g, b) {
    setLight(RED_PIN, r);
    setLight(GREEN_PIN, g);
    setLight(BLUE_PIN, b);
}

function setLight(pin, brightness) {
    gpio.open(pin, "input", function(err) {
        gpio.write(pin, brightness, function() {
            gpio.close(pin);
        });
    });
}