//  Declare Global Variables
var startButton = document.getElementById("startButton");
var answerButtons = document.getElementById("answers");
var controls = document.getElementById("controls");

//Question/Answer Buttons
var questions = document.createElement("div");
questions.setAttribute("class", "question");
var Answer1 = document.createElement("button");
Answer1.setAttribute("class", "button");
Answer1.setAttribute("id", "answer1");
var Answer2 = document.createElement("button");
Answer2.setAttribute("class", "button");
Answer2.setAttribute("id", "answer2");
var Answer3 = document.createElement("button");
Answer3.setAttribute("class", "button");
Answer3.setAttribute("id", "answer3");
var Answer4 = document.createElement("button");
Answer4.setAttribute("class", "button");
Answer4.setAttribute("id", "answer4");


var timerEl = document.getElementById("timer");
var seconds = 120;

// var questionArray = ["Who is the capital of Texas named after?", "Who was the first President of the Republic of Texas?"];

// Attemting question objects

var questionObjects = [
    {
        question: "Who is the capital of Texas named for?",
        answer1: "Sam Houston",
        answer2: "Moses Austin",
        answer3: "Stephen Austin",
        answer4: "Richard Austin",
        correctAnswer: "Stephen Austin"
    },
    {
        question: "Who was the last president of the Republic of Texas?",
        answer1: "Sam Houston",
        answer2: "Anson Jones",
        answer3: "Stephen F. Austin",
        answer4: "Mirabeau B. Lamar",
        correctAnswer: "answer2"
    },
]


startButton.addEventListener("click", function () {
    controls.innerHTML = "";
    startTimer();
    getQuestion();
})

function startTimer() {
    timerEl.textContent = "Timer : " + seconds;
    var timerInterval = setInterval(function () {
        seconds--;
        timerEl.textContent = "Timer : " + seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}




function getQuestion() {

    questions.textContent = questionObjects[0].question;
    Answer1.textContent = questionObjects[0].answer1;
    Answer2.textContent = questionObjects[0].answer2;
    Answer3.textContent = questionObjects[0].answer3;
    Answer4.textContent = questionObjects[0].answer4;

    //Appending HTML to dislay question
    document.body.children[1].children[1].children[0].appendChild(questions);
    document.body.children[1].children[1].children[1].appendChild(Answer1);
    document.body.children[1].children[1].children[1].appendChild(Answer2);
    document.body.children[1].children[1].children[1].appendChild(Answer3);
    document.body.children[1].children[1].children[1].appendChild(Answer4);

    answer3.addEventListener("click", answerCheck(questionObjects[0].answer3));


}

function answerCheck( answer ){

    console.log (answer);
if ( answer === questionObjects[0].correctAnswer){
    console.log("good");
}
else{
    console.log("bad");
}
    
{

}
 
}