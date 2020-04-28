//  Declare Global Variables
 var startButton = document.getElementById("startButton");
 var questions = document.getElementById("questions");
 var answerButtons = document.getElementById("answers");
 var controls = document.getElementById("controls");

 var timerEl = document.getElementById("timer");
 var seconds = 120;




// console.log ("Connection Check");

 startButton.addEventListener("click", function(){
     controls.innerHTML = "";
     startTimer();
 })

//  function hideButton() {
//     if (this.style.display === "none") {
//       this.style.display = "block";
//     } else {
//       this.style.display = "none";
//     }
//   }

function startTimer(){
    timerEl.textContent = "Timer : " + seconds;
    var timerInterval = setInterval(function() {
        seconds--;
        timerEl.textContent = "Timer : " + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}