$(document).ready(function() {
  setInterval(function() {
    if (timer.hour < 10) {
      timer.hour = '0' + timer.hour;
    }
    if (timer.minutes < 10) {
      timer.minutes = '0' + timer.minutes;
    }
    if (timer.seconds < 10) {
      timer.seconds = '0' + timer.seconds;
    }
    $("#clock").html(timer.hour + ':' + timer.minutes + ':' + timer.seconds + ' ');
  }, 1000);
  setTimeout(function() {
    $('#box_01').fadeOut(5000);
  }, 1000);
  });
