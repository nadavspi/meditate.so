$(document).ready(function() {
  var interval;
  var timer_limit = 120;
  function pad(val) {
    return val > 9 ? val : "0" + val;
  }
  function stop_timer() {
    clearInterval(interval);
    interval = false;
  }
  $(".timer-button").on("click", function(event) {
    var timer = $(this).closest(".timer");
    var seconds = timer.find(".timer-seconds");
    var minutes = timer.find(".timer-minutes");
    timer.toggleClass("is-running");
    event.preventDefault();
    if (!interval) {
      var i = 0;
     interval = setInterval( function() {
       seconds.html(pad(++i%60));
       minutes.html(pad(parseInt(i/60))); 
       if (i == timer_limit) {
        stop_timer();
        timer.find(".timer-body").fadeOut(500, function () { 
          $(this).remove();
          timer.find(".timer-success").fadeIn(800).delay(3000).fadeOut(800);
        });  
       }
     }, 1000);
     $(this).text("Stop");
    }
    else {
      stop_timer();
      seconds.html("00");
      minutes.html("00");
      $(this).text("Start");
    }
  });
});
