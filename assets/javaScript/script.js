// Ready for fresh Code!!
// Here I will establish variables so they are organized
const startButton = document.getElementById("start-button")
const startingPage = document.getElementById("starting-page")
const quizContainer = document.getElementById("quiz-container")
const questionBulbs = document.getElementById("question-bulbs")
const timer = document.getElementById("timer")
const timeLeft = document.getElementById("time-left")
const choices = document.getElementById("choices")
const questionTitle = document.getElementById("question-title")

// Defining the Quiz questions as an array
const quizQuestions = [
    { // Question 1
        question: "This is a test question",
        choices: ["Sample", "Answer", "Choices"],
        correctAnswer: "Answer"
    },
    { // Question 2
        question: "Sample question two",
        choices: ["More", "Sample", "Choices"],
        correctAnswer: "More"
    },
    { // Question 3
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 4
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 5
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 6
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 7
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 8
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { //Question 9
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    { // Question 10
        question: "",
        choices: [",,"],
        correctAnswer: ""
    },
    //repeat structure for the rest of my questionsd
]

// Establishing some variables that will change value
let currentQuestionIndex = 0;
let timeInSeconds = 60;
let score = 0;


// Here I will add an event listener for the click of the start button to begin the quiz
startButton.addEventListener("click", startQuiz)
// Code for what to do when the button is clicked
function startQuiz() {
    // Hide what was on the page before cliclking the button
    startingPage.style.display = "none";
    quizContainer.style.display = "block";
    // Begin the timer
    startTimer();
    // Display questions
    showQuestion(currentQuestionIndex);
};

// A function to start the timer
function startTimer() {
    const timerInterval = setInterval(function() {
        // What to display if the timer hits 0 or fewer seconds
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's Up!";
        } else { // What to do if there is still time left
        timeInSeconds--;
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        timeLeft.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        }
    }, 1000);
}

// Function to display a question and its answer choices
function showQuestion(index) {
    if (index < quizQuestions.length) {
        const question = quizQuestions[index];
        questionTitle.textContent = question.question;

        // Clear existing choices
        choices.innerHTML = "";

        // Display answer choices as buttons
        question.choices.forEach((choice, i) => {
            const button = document.createElement("button");
            button.textContent = choice;
            button.type = "button"; // Specify the type for non-submit buttons
            button.addEventListener("click", () => {
                // Handle the user's choice (e.g., check if it's correct)
                if (choice === question.correctAnswer) {
                    // Handle the correct answer
                    score++;
                    scoreDisplay.textContent = score;
                    displayMessage("Correct")
                } else {
                    // Handle incorrect answers
                    timeInSeconds -=3;
                    timeLeft.textContent = `${timeInSeconds} seconds`;
                    displayMessage("Incorrect");
                }
                // Move to the next question
                nextQuestion();
            });
            choices.appendChild(button);
        });

    } else {
        // Handle quiz completion (no more questions)
        endQuiz();
    }
}

// Display the score on the web page (if you have an element for it)
const scoreDisplay = document.getElementById("score-display");
scoreDisplay.textContent = `Score: ${score}`;


// Function to move to the next question
function nextQuestion() {
    currentQuestionIndex++;
    // Check for more questions
    if(currentQuestionIndex < quizQuestions.length) {
        showQuestion(currentQuestionIndex);
    } else {
        endQuiz();
    }
}

function displayMessage(message) {
    // Create a new HTML element to display the message
    const messageElement = document.createElement("p");
    messageElement.textContent = message;

    // Append the message element to the "choices" container (or another target element)
    choices.appendChild(messageElement);
}

function endQuiz() {
    if (currentQuestionIndex >= quizQuestions.length) {
        const userName = prompt("Congratulations! You completed the quiz. Enter your name to save your score:");
        if (userName) {
            const userScore = { name: userName, score: score };
            // Retrieve existing scores from local storage or initialize an empty array if none exist
            const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
            highScores.push(userScore);
            // Sort scores in descending order
            highScores.sort((a, b) => b.score - a.score);
            // Save the updated scores back to local storage
            localStorage.setItem("highScores", JSON.stringify(highScores));
        }
        // Redirect to the high scores page
        window.location.href = "./assets/highScores/high-scores.html";
    }
}


// I need it to display the users score at the end of the quiz and provide a text box to enter the users initials and save them along with their score

// I need to save those scores to local storage and have them accesible for later viewing by clicking a link

// I need it to display "CORRECT" or "INCORRECT" at the bottom of the screen appropriately after each question is answered

// If all the above is done I need to ensure I am not missing any steps and that all the code is written as effeciently as possible