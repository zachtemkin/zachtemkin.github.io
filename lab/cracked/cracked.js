$(document).ready(function() {
    for (i = 1; i <= 6; i++) {
        $("<div class='cracked'></div>").attr('id', '_' + i).appendTo("#cracked");
    }
});