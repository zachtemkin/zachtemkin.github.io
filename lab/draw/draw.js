$(document).ready(function() {
// create canvas 
    var unitSize = 20;
    var unitsWide = 45;
    var unitsTall = 25;
    var drawing = $('<div class="drawing"></div>').css({
        overflow: 'hidden',
        width: 900,
		height: 500
    });

    var i = 0;
    for (; i < unitsWide * unitsTall; i++) {
        $('<span class="square"></span>').css({
            display: 'block',
            float: 'left',
            width: unitSize,
            height: unitSize,
            'background-color': 'transparent'
        }).appendTo(drawing);
    }
    drawing.appendTo($('#canvas'));

	$('#canvas').bind("touchmove", function(event) {
		event.preventDefault();
	});

// select shape 
    $('.tool').mouseenter(function() {
        $(this).addClass('toolhover');
    }).mouseleave(function() {
        $(this).removeClass('toolhover');
    }).click(function() {
        var Id = "#" + $(this).attr("id");
        var rawId = $(this).attr("id");
        $(".tool").removeClass('selected');
        $(Id).addClass('selected');
        $(".square").bind('mousedown mouseover', function() {
			if (mouse_down === true) {
            	$(this).attr('id', rawId);
			}
        });
    });

    $(window).load(function() {
        $('#tool16').click();
    });

// drag to draw
	var mouse_enter = false;
	var mouse_down = false;
	var clicked = false;

	function color(e) {
		var randomColor = 'rgb('+ (Math.floor((300) * Math.random())) + ','+ (Math.floor((200) * Math.random())) + ',' + (Math.floor((100) * Math.random())) + ')';
		if (clicked === false) {
    		$(e).css('background-color', randomColor);
		} else if (clicked === true) {
    		$(e).css('background-color', 'transparent');
		}
	}

    function draw() {
        $('.square').mouseover(function() {
            if (mouse_enter === true && mouse_down === true) {
                color(this);
            }
        });
    }

    $('.square').mouseenter(function() {
        mouse_enter = true;
        draw();
    }).mouseleave(function() {
        mouse_enter = false;
        draw();
    }).mousedown(function() {
        mouse_down = true;
        draw();
		color(this);
    });
	$(document).mouseup(function() {
        mouse_down = false;
        draw();
    });
		
//erase
    $('#eraser').click(function() {
        if (clicked === false) {
            clicked = true;
            $(this).addClass('bttnDwn');
 			$(this).css('box-shadow', '0px 3px 0px rgb(140,78,98)');
        }
        else if (clicked === true) {
            clicked = false;
            $(this).removeClass('bttnDwn');
			$(this).css('box-shadow', '0px 6px 0px rgb(140,78,98)');
        }
    });

//clear
    $('#clear').click(function() {
        $('.square').each(function() {
            $(this).css('background-color', 'transparent');
        });
    }).mousedown(function() {
		$(this).addClass('bttnDwn'); 
		$(this).css('box-shadow', '0px 3px 0px rgb(143,40,40)');
    }).mouseup(function() {
       	$(this).removeClass('bttnDwn'); 
		$(this).css('box-shadow', '0px 6px 0px rgb(143,40,40)');
    });

//save
    $('#save').mousedown(function() {
       	$(this).addClass('bttnDwn'); 
		$(this).css('box-shadow', '0px 3px 0px rgb(27,80,133)');
    }).mouseup(function() {
		$(this).removeClass('bttnDwn'); 
		$(this).css('box-shadow', '0px 6px 0px rgb(27,80,133)');
    });

/*hide-show 
    $('#hide-canvas').click(function() {
        $(this).hide();
        $('#show-canvas').show();
        $('#canvas').css('background', 'transparent').css('box-shadow', 'none');
    });
    $('#show-canvas').click(function() {
        $(this).hide();
        $('#hide-canvas').show();
        $('#canvas').css('background', 'white').css('box-shadow', '0px 2px 10px rgba(0,0,0,0.7)');
    });
*/

//info
	$('#info').mouseenter(function() {
        $(this).addClass('infohover');
		$('#info-sheet').fadeIn(400);
    }).mouseleave(function() {
        $(this).removeClass('infohover');
		$('#info-sheet').fadeOut(400);
    });
	
//shortcuts
    $(document).shortkeys({
        'e': function() {
            $('#eraser').click();
        },
        'c': function() {
            $('#clear').click();
        }
    });
});