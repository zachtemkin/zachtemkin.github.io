$(document).ready(function () {
    
    //bounce
    $("#bounce-button").click(function () {
        $("#box").addClass("bounce");

        setTimeout(function () {
            $("#box").removeClass("bounce");
        }, 1000);
    });

    //pulse 
    $("#pulse-button").click(function () {
        $("#box").addClass("pulse");

        setTimeout(function () {
            $("#box").removeClass("pulse");
        }, 1000);
    });

    // fade in down
    $("#fade-in-button").click(function () {
        $("#box").addClass("fadeInDown");

        setTimeout(function () {
            $("#box").removeClass("fadeInDown");
        }, 1000);
    });

    //bounce in down
    $("#bounce-in-button").click(function () {
        $("#box").addClass("bounceInDown");

        setTimeout(function () {
            $("#box").removeClass("bounceInDown");
        }, 1000);
    });
});