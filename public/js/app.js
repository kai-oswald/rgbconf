$(document).ready(function () {
    var partyMode;
    var fadeMode;

    function stopPartyMode() {
        clearInterval(partyMode);
    }

    function stopFadeMode() {
        fading = false;
        clearInterval(fadeMode);
    }

    $("#btnParty").click(function () {
        partyMode = setInterval(changeColor, 1000);
    });

    $("#btnRnd").click(function () {
        changeColor({});
    });

    $("#btnOff").click(function () {
        stopPartyMode();
        stopFadeMode();
        changeColor(new Color(0, 0, 0));
    });
    $("#btnFade").click(function () {
        fadeR = Math.round(pickerColor.r * 0.1);
        fadeG = Math.round(pickerColor.g * 0.1);
        fadeB = Math.round(pickerColor.b * 0.1);
        startColor = pickerColor;
        fadeMode = setInterval(function () {
            fade(pickerColor);
        }, 100);
    });
});

var pickerColor = new Color(0, 0, 0);
var fadeR;
var fadeG;
var fadeB;
var fading = false;
function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function update(jscolor) {
    var chosenColor = new Color(Math.round(jscolor.rgb[0]), Math.round(jscolor.rgb[1]), Math.round(jscolor.rgb[2]));
    pickerColor = chosenColor;
    changeColor(chosenColor);
}

function changeColor(color) {
    $.ajax({
        method: "POST",
        url: "/color",
        data: color,
        success: function (req) {
            setBackground(new Color(req.r, req.g, req.b));
        },
        error: function (e) {
            console.log("error:");
            console.log(e);
        }
    });
}

var startColor;
var currentColor;
var brighten = false;
function fade(color) {
    if(!fading) {
        currentColor = color;
        fading = true; 
    }    
    var r;
    var g;
    var b;
    if (currentColor.r === 0 && currentColor.g === 0 && currentColor.b === 0) {
        brighten = true;
    } else if (currentColor.r === startColor.r && currentColor.g === startColor.g && currentColor.b === startColor.b) {
        brighten = false;
    }
    if (brighten) {
        r = max(Math.round(currentColor.r + fadeR), startColor.r);
        g = max(Math.round(currentColor.g + fadeG), startColor.g);
        b = max(Math.round(currentColor.b + fadeB), startColor.b);
    } else {
        r = min(Math.round(currentColor.r - fadeR), 0);
        g = min(Math.round(currentColor.g - fadeG), 0);
        b = min(Math.round(currentColor.b - fadeB), 0);
    }
    currentColor = new Color(r, g, b);
    changeColor(currentColor);
    function min(val, min) {
        if (val < min) {
            return min;
        } else {
            return val;
        }
    }

    function max(val, max) {
        if (val > max) {
            return max;
        } else {
            return val;
        }
    }

}

function setBackground(color) {
    var c = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    document.getElementById('jsclr').jscolor.fromRGB(color.r, color.g, color.b);
}