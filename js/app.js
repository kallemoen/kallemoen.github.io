// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

// Fade in content
(function() {

  var swInstance = new ScrollWatch({
      watch: 'div, footer',
      watchOnce: true,
      inViewClass: 'fade-in--animate',
      watchOffset: -100,
      infiniteScroll: false
  });

  var swInstance = new ScrollWatch({
      watch: '.button',
      watchOnce: true,
      inViewClass: 'bounce--animate',
      watchOffset: -200,
      infiniteScroll: false

  });

})();

// Day of week
var d = new Date();
var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var n = weekday[d.getDay()];

var day = n;
$(".weekday").html(day);


// Tab toggling, toggles title

window.onblur = function () { document.title = 'Read me later!'; }
window.onfocus = function () { document.title = 'Kalle Moen: Product Manager'; }
