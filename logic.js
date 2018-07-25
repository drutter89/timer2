// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// Solution if you choose not to put it in an object

var time = 5;
var x = document.getElementById("myAudio");

function reset() {

  time = 0;
  

  $("#display").text("00:00");
  $("#laps").text("");

}

function start() {
  intervalId = setInterval(count, 1000);
}

function stop() {

  console.log("stopping");
  clearInterval(intervalId);

}

function count() {

  time--;
  var converted = timeConverter(time);
  $("#display").text(converted);
  console.log(time);
  if (time <= 0) {
    stop();
    alarm();
  }
}

function alarm() {
   playAudio();
  }


function timeConverter(t) {

  var minutes = Math.floor(t / 60);
  var seconds = t - (minutes * 60);

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  if (minutes === 0) {
    minutes = "00";
  }
  else if (minutes < 10) {
    minutes = "0" + minutes;
  }

  return minutes + ":" + seconds;
}
              
  function playAudio() { 
      x.play(); 
  } 
  
  function pauseAudio() { 
      x.pause(); 
  } 
  

