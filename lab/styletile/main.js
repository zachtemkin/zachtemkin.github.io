$(document).ready(function () {
    $('.moodImg').hover(function () {
        $(this).children('.overlay').addClass('hover');
    }, function () {
        $(this).children('.overlay').removeClass('hover');
    });

/*
    $('.button').hover(function () {
        $(this).addClass('shiftcolor');
    }, function () {
        $(this).removeClass('shiftcolor');
    });
*/
});