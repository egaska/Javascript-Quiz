 
 var startButton = document.querySelector("#startButton");
 var questions = document.getElementById("questions");
 var answerButtons = document.getElementById("answers");

console.log ("Connection Check");

 startButton.addEventListener("click", function(){
     console.log("Inside function")
     hideButton();

 })

 function hideButton() {
    if (startButton.style.display === "none") {
      startButton.style.display = "block";
    } else {
      startButton.style.display = "none";
    }
  }