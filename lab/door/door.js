$(document).ready(function() {
    $(".container").click(function() {
        postoscroll = $(this).position().top;
        $("html,body").animate({scrollTop: postoscroll}, 500);
    });
});