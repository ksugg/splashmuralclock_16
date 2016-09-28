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


    var d = new Date();
    var currentHour = d.getHours();
    var currentMinute = d.getMinutes(); 

    if (currentHour <= 5) 
     { 
        $('body').css('background-color', 'black');
        $('#container').hide();
      }
    else if (currentHour == 6)
    {
        $('body').css('background-color', 'rgb(0, 0, 179)');
        $('#container').show();
      }
     else if (currentHour == 6 && currentMinute == 30)
    {
        $('body').css('background-color', 'rgb(0, 102, 255)');
        $('#container').animate({
          height: '2%',
        }, 5000);
      }
    else if (currentHour == 7)
    {
        $('body').css('background-color', 'rgb(0, 204, 255)');
        $('#container').animate({
          height: '10%',
        }, 50000);
      }
    else if (currentHour ==8)
    {
        $('body').css('background-color', 'rgb(0, 204, 255)');
        $('#container').animate({
          height: '100%',
        }, 300000);
      }
    else if (currentHour == 18)
    {
        $('body').css('background-color', 'rgb(0, 204, 255)');
        $('#container').animate({
          height: '10%',
        }, 30000);
      }
    else if (currentHour == 19)
    {
        $('body').css('background-color', 'rgb(0, 0, 179)');
        $('#container').animate({
          height: '2%',
        }, 50000);
      }
    else if (currentHour == 20)
    {
        $('body').css('background-color', 'black');
        $('#container').hide()
      }
    else if (currentHour >= 21 && currentHour <= 4)
    {
        $('body').css('background-color', 'rgb(0, 102, 255)');
        $('#container').hide()
      }
      else {
        $('body').css('background-color', 'rgb(0, 204, 255)');
        $('#container').height('100%');
        $('.box01').css('background', 'rgb(255, 45, 146)');
        $('.box02').css('background', 'rgb(255, 62, 0)');
        $('.box03').css('background', 'rgb(0, 66, 246)');
        $('.box04').css('background', 'rgb(255, 0, 0)');
        $('.box05').css('background', 'rgb(182, 0, 228)');
        $('.box06').css('background', 'rgb(222, 252, 2)');
        $('.box07').css('background', 'rgb(252, 2, 93)');
        $('.box08').css('background', 'rgb(255, 45, 146)');
        $('.box09').css('background', 'rgb(255, 224, 0)');
        $('.box10').css('background', 'rgb(0, 222, 57)');
      }
});