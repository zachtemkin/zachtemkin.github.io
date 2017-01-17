$(document).ready(function() {
	$('.readmore').click(function() {
	    $(this).parents('.container').children('div').toggleClass("open");
	    $(this).html($(this).parents('.container').children('div').hasClass("open") ? "Less &uarr;" : "Read More &darr;");
	});
	$('#contact').click(function() {
		$('#info').fadeToggle();
	});
});