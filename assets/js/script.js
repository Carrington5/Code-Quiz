// Defining HTML Elements
const questionEl = document.getElementById("question");
const buttConEl = document.getElementById("button-container");
const responseEl = document.getElementById("response");
const optionsEl = document.getElementById("answer-buttons");
const startButtonEl = document.getElementById("start-button");
const timerEl = document.getElementById("time-remaining");

// where the variables are set
var score = 0
var timer = 100
var qNum = 0
var timerID;
timerEl.innerHTML = timer;


// Timer function
const countdown = function() {
    if (tiner <= 0) {
        clearInterval(timerID);
        timerEl.innerHTML ="0"
        endQuiz();
    } else {
        timerEl.innerHTML = timer;
        timer--;
    }
}

// questions as objects names
const q0 = {
    question: "____ is the process of finding errors and fixing them within a program.",
    a: "A. Scripting",
    b: "B. Moving",
    c: "C. Debugging",
    d: "D. Scanning",
    answer: "C. Debugging"
}

const q1 = {
    question: "What element is used to store multiple values in a single variable?",
    a: "A. Arrays",
    b: "B. ()",
    c: "C. {}",
    d: "D. Strings",
    answer: "A. Arrays"
}

const q2 = {
    question: "The condition in an if/else statement is enclosed with _____.",
    a: "A. quotes",
    b: "B. curly brackets",
    c: "C. parenthesis",
    d: "D. square brackets",
    answer: "C. parenthesis"
}

const q3 = {
    question: "Which tool can you use to ensure code quality?",
    a: "A. Linting",
    b: "B. Papa Smurf",
    c: "C. DStore",
    d: "D. ESLint",
    answer: "D. ESLint"
}

let questions = [q0, q1, q2, q3,]

// validate question selection
const validateSelection = function(selection) {
    if (selection === questions[qNum].answer) {
        score+= 10;
        responseEl.textContent = "Correct!";
    } else {
        timer-= 10;
        timerEl.textContent = timer;
        responseEl.textContent = "Wrong!";
    }

    qNum++;

    answerSubmit()
}

// End quiz
const endQuiz = function() {
    questionEl.textContent = "You have completed the quiz! Thank you for your participation! Refresh the page to take again."
    buttConEl.remove(buttConEl);        
}

