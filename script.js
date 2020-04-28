//  Declare Global Variables
var startButton = document.getElementById("startButton");
var answerButtons = document.getElementById("answers");
var controls = document.getElementById("controls");
var questionIndex = 0;
var containerEl = document.getElementById("container");
var scoreAreaEl = document.getElementById("scoreArea");
var initialFormEl = document.getElementById("initialForm");


//Sound effects
var dingAudio = new Audio('correctNoise.wav');
var wrongNoise = new Audio('wrongNoise.mp3')

var score = 0;
var scoreH2 = document.getElementById("score");


//Buttons
var questions = document.createElement("div");
questions.setAttribute("class", "question");
var answer1Button = document.createElement("button");
answer1Button.setAttribute("class", "button");
answer1Button.setAttribute("id", "answer1");
var answer2Button = document.createElement("button");
answer2Button.setAttribute("class", "button");
answer2Button.setAttribute("id", "answer2");
var answer3Button = document.createElement("button");
answer3Button.setAttribute("class", "button");
answer3Button.setAttribute("id", "answer3");
var answer4Button = document.createElement("button");
answer4Button.setAttribute("class", "button");
answer4Button.setAttribute("id", "answer4");
var seeHighScoreButton = document.getElementById("showScoresButton");
var enterInitialsButton = document.createElement("button");
enterInitialsButton.setAttribute("class", "button");
enterInitialsButton.setAttribute("id", "enterInitialsButton");
enterInitialsButton.innerText = "Enter";
var input = document.createElement("input");
input.setAttribute("id", "initialForm");
document.body.children[1].children[2].children[0].children[0].appendChild(enterInitialsButton);


//Timer
var timerEl = document.getElementById("timer");
var seconds = 120;

//Array for High Scores
var highScoreStorage
    if (localStorage.highScoreStorage === undefined){
       highScoreStorage = []; 
    }else {
        highScoreStorage = JSON.parse(window.localStorage.highScoreStorage);
    }

// Question Objects

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
        correctAnswer: "Anson Jones"
    },
]


// Functions

startButton.addEventListener("click", function () {
    controls.innerHTML = "";
    startTimer();
    getQuestion();
})

function startTimer() {
    seconds = 120;
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

    questions.textContent = questionObjects[questionIndex].question;
    answer1Button.textContent = questionObjects[questionIndex].answer1;
    answer2Button.textContent = questionObjects[questionIndex].answer2;
    answer3Button.textContent = questionObjects[questionIndex].answer3;
    answer4Button.textContent = questionObjects[questionIndex].answer4;
    correctAnswerStorage = questionObjects[questionIndex].correctAnswer;

    //Appending HTML to dislay question
    document.body.children[1].children[1].children[0].appendChild(questions);
    document.body.children[1].children[1].children[1].appendChild(answer1Button);
    document.body.children[1].children[1].children[1].appendChild(answer2Button);
    document.body.children[1].children[1].children[1].appendChild(answer3Button);
    document.body.children[1].children[1].children[1].appendChild(answer4Button);
}

function nextQuestion() {
    if (questionIndex < questionObjects.length) {
        console.log("nextQuestion Function Accessed")
        getQuestion();
    }
    else {
        endGame();
    }
}

function endGame() {
    scoreAreaEl.setAttribute("class", "")
    score = seconds;
    scoreH2.innerText =  "Your score is " + score ;
    timerEl.textContent = "";
    seeHighScoreButton.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    container.setAttribute("class", "hide");
}

function enterYourScore(event){
        event.preventDefault();
        // console.log(score);
        var newInput = initialFormEl;
        var userInput = newInput.value.trim();
        
        var newScore = userInput + " : " + score + " seconds";
        console.log(newScore);
        highScoreStorage.push(newScore);
        console.log(highScoreStorage);
        localStorage.setItem("highScoreStorage", JSON.stringify(highScoreStorage));
        
}

// Checks if the answer clicked is correct.
function answerCheck(event) {
    console.log("answerCheck() test")
    console.log(event.target.innerHTML);

    if (event.target.innerHTML === questionObjects[questionIndex].correctAnswer) {
        // console.log("Correct");
        dingAudio.play();
        questionIndex++;
        nextQuestion();
    }
    else {
        // console.log("bad");
        console.log(questionObjects[questionIndex].correctAnswer);
        seconds = seconds - 10;
        wrongNoise.play();
        questionIndex++;
        nextQuestion();
    }
}


answer1Button.addEventListener("click", answerCheck);
answer2Button.addEventListener("click", answerCheck);
answer3Button.addEventListener("click", answerCheck);
answer4Button.addEventListener("click", answerCheck);
// Event listener to submit Initials
enterInitialsButton.addEventListener("click", enterYourScore)


