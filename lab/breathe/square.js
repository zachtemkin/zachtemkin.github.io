$(document).ready(function() {
    $("#container").click(function() {
        var randomColor = 'rgb(' + (Math.floor((300) * Math.random())) + ',' + (Math.floor((200) * Math.random())) + ',' + (Math.floor((100) * Math.random())) + ')';
        var randomcolor = 'rgb(' + (Math.floor((300) * Math.random())) + ',' + (Math.floor((200) * Math.random())) + ',' + (Math.floor((100) * Math.random())) + ')';
        $(".red").css("background-color", randomColor);
        $(".blue").css("background-color", randomcolor);
    });
});