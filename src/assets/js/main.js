$(document).on('ready', function() {
	var feed = new Instafeed({
	  get: 'user',
	  userId: 12532684,
	  clientId: '8711b028c8b84f57882bb00336488d00',
	  accessToken: '12532684.8711b02.5a40ec50407745e68341f0f403dacb52',
	  template: '<a class="zt-gram" href="{{link}}"><img src="{{image}}" /> <div class="info-container"><p class="likes">{{likes}}</p><p class="location">{{location}}</p><p class="insta-caption">{{caption}}</p></div></a>',
	  limit: 4,
	  resolution: 'standard_resolution'
	});
	feed.run();

	$('header nav a').on('click', function() {
		if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		}

		if (target.length) {
			$('html,body').animate({
				scrollTop: target.offset().top - 50
			}, 500);
			return false;
		}
	});

  $("img.lazy").lazyload({
		 threshold : 200
  });
});
