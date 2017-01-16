$(document).ready(function() {
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top - 70
          }, 500);
          return false;
        }
      }
    });
  });

  //var paths = ['.test1', '.test2', '.test3'];

  var initial_ts = new Date().getTime();
  var duration = 2000; // this animation should last for 2 seconds
  var path = document.querySelector('.test2');
  var length = path.getTotalLength();
  var handle = 0;

  path.style.strokeDasharray = length + ' ' + length; 
  path.style.strokeDashoffset = length;

  var draw = function() {
    var progress = (Date.now() - initial_ts)/duration;
    if (progress >= 1) {
      window.cancelAnimationFrame(handle);
    } else {
      path.style.strokeDashoffset = Math.floor(length * (1 - progress));
      handle = window.requestAnimationFrame(draw);
    }
  };

  draw();

  $('.cube').on('click', function(){
    initial_ts = new Date().getTime();
    duration = 2000; // this animation should last for 2 seconds
    path = document.querySelector('.test2');
    length = path.getTotalLength();
    handle = 0;

    path.style.strokeDasharray = length + ' ' + length; 
    path.style.strokeDashoffset = length;

    draw();
  });
});
