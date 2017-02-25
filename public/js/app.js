$(document).ready(function() {

    var ip;

    $("#btnIp").click(function() {
        ip = $("#inputIp").val();
        init();
    });

    $("#btnParty").click(function() {
        setInterval(changeColor, 1000);
    });

    $("#btnRnd").click(function() {
        changeColor();
    });

     $("#btnOff").click(function() {
        $.ajax({
            method: "GET",
            url: "/none",
            success: function() {
            }

        });
    });

    function changeColor() {
           $.ajax({
            method: "GET",
            url: "/color",
            success: function() {
            }

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