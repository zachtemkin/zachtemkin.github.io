$(document).ready(function() {
	
	$.fn.randomize = function (childElem) {
        return this.each(function () {
            var $this = $(this);
            var elems = $this.children(childElem);

            elems.sort(function () {
                return (Math.round(Math.random()) - 0.5);
            });

            $this.empty();

            for (var i = 0; i < elems.length; i++)
            $this.append(elems[i]);
        });
    };

	$(".flex-row").randomize(".cell");
	$(".container").randomize(".flex-row");

	$(".cell").draggable({ grid: [ 10, 10 ] });
});
