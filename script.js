//  Declare Global Variables
var startButton = document.getElementById("startButton");
var answerButtons = document.getElementById("answers");
var controls = document.getElementById("controls");
var questionIndex = 0;
var dingAudio = new Audio('correctNoise.mp3');
var wrongNoise = new Audio('wrongNoise.mp3')
var containerEl = document.getElementById("container");
var scoreAreaEl = document.getElementById("scoreArea");
var score = 0;
var scoreH2 = document.getElementById("score");


//Question/Answer Buttons
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
var correctAnswerStorage = "";


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
    else{
        endGame();
    }
}

function endGame(){                    
    scoreAreaEl.setAttribute("class", "")
    var scoreText = "Your score is " + seconds;
    scoreH2.innerText = scoreText;
    timerEl.textContent = "";
    seconds = "";
    console.log(score);
    console.log("End Game Test");
    timerEl.setAttribute("class", "hide");
    container.setAttribute("class", "hide");
   

    
}

// Checks if the answer clicked is correct.
function answerCheck(event) {
 console.log("answerCheck() test")
    console.log(event.target.innerHTML);
        
    if (event.target.innerHTML === questionObjects[questionIndex].correctAnswer) {
        // console.log("Correct");
        dingAudio.play();
        questionIndex++;
        score++;
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
function displayScore(){
    

}

answer1Button.addEventListener("click", answerCheck);
answer2Button.addEventListener("click", answerCheck);
answer3Button.addEventListener("click", answerCheck);
answer4Button.addEventListener("click", answerCheck);