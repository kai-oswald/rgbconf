$(document).ready(function () {
    var partyMode;
    
    function stopPartyMode() {
        clearInterval(partyMode);
    } 

    $("#btnParty").click(function () {
        partyMode = setInterval(changeColor, 1000);
    });

    $("#btnRnd").click(function () {
        changeColor({});
    });

    $("#btnOff").click(function () {
        stopPartyMode();
        changeColor(new Color(0, 0, 0));
    });    
});

function Color(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
}

function update(jscolor) {
    var chosenColor = new Color(Math.round(jscolor.rgb[0]), Math.round(jscolor.rgb[1]), Math.round(jscolor.rgb[2]));   
    changeColor(chosenColor);
}

function changeColor(color) {    
    $.ajax({
        method: "POST",
        url: "/color",
        data: color,
        success: function (req) {
            setBackground(req.r, req.g, req.b);
        },
        error: function(e) {
            console.log(e);
        },
        dataType: "application/json"
    });
}

function setBackground(color) {
    var c = "rgb(" + color.r + ", " + color.g + ", " + color.b + ")";
    document.body.setAttribute("style", "background: " + c);
}