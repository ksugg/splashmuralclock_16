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

  setInterval(function () {
    $(".box01").replaceWith('<div class= "box02">');
  }, 2000);
  setInterval(function () {
    $(".box02").replaceWith('<div class= "box03">');
  }, 4000);
  setInterval(function () {
    $(".box03").replaceWith('<div class= "box04">');
  }, 6000);
   setInterval(function () {
    $(".box04").replaceWith('<div class= "box05">');
  }, 8000);
    setInterval(function () {
    $("body").css("background-color", "darkblue");
  }, 10000);
  //   setInterval(function () {
  //   $(".box05").replaceWith('<div class= "box06">');
  // }, 12000);
     setInterval(function () {
    $(".box06").replaceWith('<div class= "box05">');
  }, 18000);
      setInterval(function () {
    $("body").css("background-color", "lightblue");
  }, 20000);
      setInterval(function () {
    $(".box05").replaceWith('<div class= "box04">');
  }, 22000);
      setInterval(function () {
    $(".box04").replaceWith('<div class= "box03">');
  }, 24000);
      setInterval(function () {
    $(".box03").replaceWith('<div class= "box02">');
  }, 26000);
      setInterval(function () {
    $(".box02").replaceWith('<div class= "box01">');
  }, 28000);




   });