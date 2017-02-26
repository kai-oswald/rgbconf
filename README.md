# rgbconf
simple Web-Interface for configuring RGB LEDs with Node.js on Raspberry Pi
## Install
- install [pi-blaster daemon](https://github.com/sarfata/pi-blaster)
- clone this repo ```git clone https://github.com/kai-oswald/rgbconf```
- run ```npm install```

## Usage
```javascript
var rgb = require("./rgb");
// set color to red
rgb.setColor(255, 0, 0);
```
