$(document).ready(function() {

	var panelWidth = $('figure').width();
	var panelHeight = $('figure').height();
	var tz = Math.round( ( panelWidth / 2 ) / Math.tan( Math.PI / 9 ) );
	var tzy = Math.round( ( panelHeight / 2 ) / Math.tan( Math.PI / 9 ) );

	$('#carousel figure:nth-child(2)').css({'-webkit-transform': 'rotateY(  -40deg) translateZ('+ tz +'px)'});
	$('#carousel figure:nth-child(3)').css({'-webkit-transform': 'rotateY(    0deg) translateZ('+ tz +'px)'});
	$('#carousel figure:nth-child(4)').css({'-webkit-transform': 'rotateY(   40deg) translateZ('+ tz +'px)'});
	$('#carousel figure:nth-child(1)').css({'-webkit-transform': 'rotateX(   40deg) translateZ('+ panelHeight +'px) translateY('+ -(tz-284) +'px)'});
	$('#carousel figure:nth-child(5)').css({'-webkit-transform': 'rotateX(  -40deg) translateZ('+ panelHeight +'px) translateY('+ (tz-284) +'px)'});

	function getRandomInt (min, max) {
    	return Math.floor(Math.random() * (max - min + 1)) + min;
	}	

	function loadQuestions() {

		var n = getRandomInt(1, 4);

		var q = $('.questions li:nth-child('+ n +')').text();
		var a = $('.answers:nth-child('+ (n+1) +') li:nth-child(1)').text();
		var b = $('.answers:nth-child('+ (n+1) +') li:nth-child(2)').text();
		var c = $('.answers:nth-child('+ (n+1) +') li:nth-child(3)').text();
		var d = $('.answers:nth-child('+ (n+1) +') li:nth-child(4)').text();

		$('#carousel figure:nth-child(3) span').append(q);
		$('#carousel figure:nth-child(1) span').append(a);
		$('#carousel figure:nth-child(2) span').append(b);
		$('#carousel figure:nth-child(4) span').append(c);
		$('#carousel figure:nth-child(5) span').append(d);
	}

	loadQuestions();

    // Position Variables
	var x = 0;
	var y = 0;
	var z = 0;

	// Speed - Velocity
	var vx = 0;
	var vy = 0;
	var vz = 0;

	// Acceleration
	var ax = 0;
	var ay = 0;
	var az = 0;
	var ai = 0;
	var arAlpha = 0;
	var arBeta = 0;
	var arGamma = 0;

	var delay = 100;
	var vMultiplier = 0.01;

	var alpha = 0;
	var beta = 0;
	var gamma = 0;

    if (window.DeviceMotionEvent !== undefined) {
    	window.ondevicemotion = function(event) {
    		ax = event.accelerationIncludingGravity.x * 1;
			ay = event.accelerationIncludingGravity.y * 1;
			az = event.accelerationIncludingGravity.z * 1;		
			ai = Math.round(event.interval * 100) / 100;
			rR = event.rotationRate;
			if (rR != null) {
				arAlpha = Math.abs(rR.alpha);
				arBeta = Math.abs(rR.beta);
				arGamma = Math.abs(rR.gamma);
			}
		}

		window.ondeviceorientation = function(event) {
			alpha = event.alpha;
			beta = event.beta;
			gamma = event.gamma;
		}	

		setInterval( function() {
			if (arBeta > arAlpha) {
				$('#carousel').css({'-webkit-transform': 'rotateY(' + ax*5 + 'deg) rotateX(0deg)'});
			} else {
				$('#carousel').css({'-webkit-transform': 'rotateX(' + ay*5 + 'deg) rotateY(0deg)'}); 
			}	
		}, delay);	
    }
    
    $('html').on('mousemove', function(e) {
        $('#carousel').css({'-webkit-transform': 'rotateY(' + e.pageX + 'deg) rotateX( -' + e.pageY + 'deg)'});
    });

});