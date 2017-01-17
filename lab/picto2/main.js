$(document).ready(function() {
 
  var w = $(window).width();
  
  var wRnd = Math.floor(w/2)*2;
  var hRnd = (wRnd*10)/16;
  
  var x = (wRnd/16)*2;
  
  $('.container').width(wRnd).height(hRnd);
   
  function createBox() {
    var box = $(document.createElement('div')).addClass('box');
    $('.boxes').append(box);
    $('.box').width(x/2).height(x/2);
  }
  
  function createBoxes() {
    var boxes = $(document.createElement('div')).addClass('boxes');
    $('.container').append(boxes);
    $('.boxes').width(x).height(x);
  }
  
  for(var j=0; j < (wRnd*hRnd)/(x*x); j++) {
    createBoxes();
  }
  
  for(var i=0; i<4; i++) {
    createBox();
  }

  // give box random color

  var hue = 'rgb(' + (Math.floor((256-95)*Math.random()) +100 ) + ',' + (Math.floor((256-95)*Math.random()) +100 ) + ',' + (Math.floor((256-95)*Math.random()) +100 ) + ')';
  

  $('.box').css({
    'background-color': hue
  });

  
  $('.box').data('count', 0);
  
  var shape_states = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen"];
  
  $('.boxes').on("touchstart click", ".box", function (e) {
    e.preventDefault();
    
    var $this = $(this),
        count = $this.data('count') + 1;
    $this.data('count', count);
    
    if(count > 14) {
      $this.switchClass(shape_states[count - 1], shape_states[0], 500, "swing");
      count = $this.data('count', 0) ;
    } else {
      $this.switchClass(shape_states[count - 1], shape_states[count], 500, "swing");
    }
  });
});