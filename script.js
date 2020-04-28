//  Declare Global Variables
var startButton = document.getElementById("startButton");
var answerButtons = document.getElementById("answers");
var controls = document.getElementById("controls");

var timerEl = document.getElementById("timer");
var seconds = 120;

var questionArray = ["Who is the capital of Texas named after?", "Who was the first President of the Republic of Texas?"];

// Attemting question objects

var questionObjects = [
    {
        question: "Who is the capital of Texas named for?",
        answer1: "Sam Houston",
        answer2: "Moses Austin",
        answer3: "Stephen Austin",
        answer4: "Richard Austin",
        correctAnswer: "3"
    },
    {
        question: "Who was the last president of the Republic of Texas?",
        answer1: "Sam Houston",
        answer2: "Anson Jones",
        answer3: "Stephen F. Austin",
        answer4: "Mirabeau B. Lamar",
        correctAnswer: "2"
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

        //Creating and assigning Questions to div for display
        var questions = document.createElement("div");
        questions.setAttribute("class", "question");
        questions.textContent = questionArray[1];

        //Creating and assigning Questions to div for display
        var Answer1 = document.createElement("button");
        Answer1.setAttribute("class", "button");
        var Answer2 = document.createElement("button");
        Answer2.setAttribute("class", "button");
        var Answer3 = document.createElement("button");
        Answer3.setAttribute("class", "button");
        var Answer4 = document.createElement("button");
        Answer4.setAttribute("class", "button");
        Answer1.textContent = "hi";
        Answer2.textContent = "bye";
        Answer3.textContent = "Yo";
        Answer4.textContent = "idk";

        //Appending HTML to dislay question
        document.body.children[1].children[1].children[0].appendChild(questions);
        document.body.children[1].children[1].children[1].appendChild(Answer1);
        document.body.children[1].children[1].children[1].appendChild(Answer2);
        document.body.children[1].children[1].children[1].appendChild(Answer3);
        document.body.children[1].children[1].children[1].appendChild(Answer4);
    
}