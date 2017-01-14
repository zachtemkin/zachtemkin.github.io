var $menu = document.getElementById('menu');
var $wrapper = document.getElementById('menu-wrapper');
var $ul = document.getElementById('main-nav ul');

$menu.on('click', function() {
  $wrapper.toggleClass('is-clicked');
  $ul.toggleClass('is-expanded');
});

var feed = new Instafeed({
  get: 'user',
  userId: 12532684,
  clientId: '8711b028c8b84f57882bb00336488d00',
  accessToken: '12532684.8711b02.5a40ec50407745e68341f0f403dacb52',
  template: '<a class="zt-gram" href="{{link}}"><img src="{{image}}" /> <ul class="info-container"><li class="likes">{{likes}}</li><li class="location">{{location}}</li><li class="caption">{{caption}}</li></ul></a>',
  limit: 4,
  resolution: 'standard_resolution'
});
feed.run();