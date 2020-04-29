//  Declare Global Variables
var startButton = document.getElementById("startButton");
var answerButtons = document.getElementById("answers");
var controls = document.getElementById("controls");
var questionIndex = 0;
var containerEl = document.getElementById("container");
var scoreAreaEl = document.getElementById("scoreArea");
var initialFormEl = document.getElementById("initialForm");
var scoreHeaderEl = document.getElementById("scoreHeader")
var scoreListEL = document.getElementById("scoreList");
var HighScoreSectionEl = document.getElementById("highScoreSection");



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
var clearHighScoreButton = document.createElement("button");
input.setAttribute("id", "clearHighScore");
clearHighScoreButton.innerText = "Clear High Scores";
document.body.children[1].children[4].children[3].appendChild(clearHighScoreButton);
var restartButton = document.createElement("button");
input.setAttribute("id", "restartButton");
restartButton.innerText = "Try Again";
document.body.children[1].children[4].children[4].appendChild(restartButton);


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
        question: "What is the state tree pf Texas?",
        answer1: "Peach",
        answer2: "Oak",
        answer3: "Mesquite",
        answer4: "Pecan",
        correctAnswer: "Pecan"
    },
    {
        question: "In what major city is the Alamo?",
        answer1: "San Antonio",
        answer2: "Houston",
        answer3: "Austin",
        answer4: "Dallas",
        correctAnswer: "San Antonio"
    },
    {
        question: "What was the final battle of the Texas Revolution?",
        answer1: "Battle of the Alamo",
        answer2: "Battle of San Jacinto",
        answer3: "Battle of Goliad",
        answer4: "Battle of Gonzales",
        correctAnswer: "Battle of San Jacinto"
    },
    {
        question: "Which military leader surrendered at Coleto Creek on March 20, 1836??",
        answer1: "Sam Houston",
        answer2: "Mirabeau B. Lamar",
        answer3: "Stephen Austin",
        answer4: "James Fanin",
        correctAnswer: "James Fanin"
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
    HighScoreSectionEl.setAttribute("class", "hide")
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

//Once all questions have been read function endGame 
//collects the player's score and hides the quiz section
function endGame() {
    scoreAreaEl.setAttribute("class", "")
    score = seconds;
    scoreH2.innerText =  "Your score is " + score ;
    timerEl.textContent = "";
    seeHighScoreButton.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    container.setAttribute("class", "hide");
}

//Functions allows you to enter your initials and store initials/score in local storage.
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
        showHighScores()
}
function showHighScores(){
    
    //Clears page
    scoreAreaEl.setAttribute("class", "")
    controls.innerHTML = "";
    timerEl.textContent = "";
    seeHighScoreButton.setAttribute("class", "hide");
    timerEl.setAttribute("class", "hide");
    container.setAttribute("class", "hide");
    scoreAreaEl .setAttribute("class", "hide")

    //Display High Score List
    HighScoreSectionEl.setAttribute("class", "")
    for (let i = 0; i < highScoreStorage.length; i++) {
        var highScoreLi = document.createElement("li");
        scoreListEL.setAttribute("class", "high-scores");
        scoreHeaderEl.textContent = "High Scores : ";
        scoreListEL.appendChild(highScoreLi);
        highScoreLi.textContent = highScoreStorage[i];
    }
}

function clearStorage(){
        localStorage.clear();
        tryagain();
}

function tryagain(){
    location.reload();
}

answer1Button.addEventListener("click", answerCheck);
answer2Button.addEventListener("click", answerCheck);
answer3Button.addEventListener("click", answerCheck);
answer4Button.addEventListener("click", answerCheck);
// Event listener to submit Initials
enterInitialsButton.addEventListener("click", enterYourScore);
seeHighScoreButton.addEventListener("click", showHighScores);
restartButton.addEventListener("click", tryagain);
clearHighScoreButton.addEventListener("click", clearStorage);