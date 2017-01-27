$(document).ready(function() {

    // animate text entry

    $("#pictoname").animate({'opacity':1}, 1000, 'swing', function() {
        $(this).delay(1000).animate({'opacity':0.5}, 1000, 'swing');
    });


    $("#banner").bind( 'mouseenter click', function() {
        $("#pictoname").stop().animate({'opacity':1}, 500).focus();
        $("#enter").stop().animate({'opacity':1}, 500);
    }).mouseleave(function() {
        $("#pictoname").stop().animate({'opacity':0.5}, 500).blur();
        $("#enter").stop().animate({'opacity':0}, 500);
    });



    // give box random color

    function color(e) {
        var hue = 'rgb(' + (Math.floor((256-95)*Math.random()) +100 ) + ',' + (Math.floor((256-95)*Math.random()) +100 ) + ',' + (Math.floor((256-95)*Math.random()) +100 ) + ')';
  
        $(e).css({
          'background-color': hue
        });
    }

    // change color when returned to square 

    var cCount = 0;


    function pulse() {
        $("#container-inner").removeClass('pulse');
        
        if(cycle === true) {
            cCount++;
            if (cCount === 4) {
                $("#container-inner").addClass('pulse');
                color(".corner");
                cCount = 0;
                cycle = false;
            }
        }
    }

    color('.corner');

    // change shapes 

    $('.corner').data('count', 0);

    var shape_states = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen" ];

    var cycle = false;

    $('#container-inner').on("touchstart click", ".corner", function (e) {
        e.preventDefault();
    
        var $this = $(this),
            count = $this.data('count') + 1;
    
        $this.data('count', count);
    
        if(count > 14) {
            $this.switchClass(shape_states[count - 1], shape_states[0], 500, "swing");
            count = $this.data('count', 0);
            cycle = true;
        } else {
            $this.switchClass(shape_states[count - 1], shape_states[count], 500, "swing");
            cycle = false;
        }

        pulse();

    });
});