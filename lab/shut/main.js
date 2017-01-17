$(document).ready(function() {

    // slider using slides.js
    $(function(){
        $("#slides").slidesjs({
            width: 320,
            height: 77,

            navigation: {
                active: false,
                effect: "slide"
            },

            pagination: {
                active: false
            }
        });
    });

    // animate time

    $('#time').addClass('bounce delay');


    // toggle time

    var clicked = false;

    $('#nextContainer').click(function() {
        if (clicked === false) {
            clicked = true;

            $('p#time').animate({'opacity':0}, 100, 'easeInCubic', function() {
                $(this).text('12:34 pm').animate({'opacity':1}, 100, 'easeInCubic');
            });
        } else {
            clicked = false;

            $('p#time').animate({'opacity':0}, 100, 'easeInCubic', function() {
                $(this).text('6 minutes').animate({'opacity':1}, 100, 'easeInCubic');
            });
        }
    });
});