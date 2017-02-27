var rgb = require("./rgb");

module.exports = function (app) {

    app.get('/', function (req, res) {
        res.render("index.html");
    });

    app.post("/color", function (req, res) {
        // if color is empty, set random color
        var color = req.body;
        if (Object.keys(color).length === 0 && color.constructor === Object) {
            color = rgb.getRandomColor();
        }
        rgb.setColor(color);
        res.setHeader('Content-Type', 'application/json');
        res.json(color);
    });
}