# rgbconf
simple Web-Interface for configuring RGB LEDs with Node.js on Raspberry Pi
## Install
- install [pi-blaster daemon](https://github.com/sarfata/pi-blaster)
- clone this repo ```git clone https://github.com/kai-oswald/rgbconf```
- run ```npm install```
- run the app ```node index.js```

## Usage
```javascript
var rgb = require("./rgb");
// to set a color you can either use this
rgb.setRGB(255, 0, 0);
// or this
var red = new rgb.Color(255, 0, 0);
rgb.setColor(red);

// get a random color
var rndColor = rgb.getRandomColor();
```
