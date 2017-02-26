$(document).ready(function () {
    var ip;
    var partyMode;

    function stopPartyMode() {
        clearInterval(partyMode);
    }
    
    $("#btnIp").click(function () {
        ip = $("#inputIp").val();
        init();
    });

    $("#btnParty").click(function () {
        partyMode = setInterval(changeColor, 1000);
    });

    $("#btnRnd").click(function () {
        changeColor();
    });

    $("#btnOff").click(function () {
        stopPartyMode();
        $.ajax({
            method: "POST",
            url: "/color",
            data: new Color(0, 0, 0),
            success: function () {}
        });
    });

    function changeColor() {
        $.ajax({
            method: "POST",
            url: "/color",
            success: function () {}

        });
    }

    function init() {
        var red = new Color(255, 0, 0);
        changeColor(red);

    }
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
        success: function () {
        },
        error: function(e) {
            console.log(e);
        },
        dataType: "application/json"
    });
}