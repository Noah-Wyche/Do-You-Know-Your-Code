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
    {
        question: "This is a test question",
        choices: ["Sample", "Answer", "Choices"],
        correctAnswer: "Answer"
    },
    {
        question: "Sample question two",
        choices: ["More", "Sample", "Choices"],
        correctAnswer: "More"
    },
    //repeat structure for the rest of my questionsd
]

let currentQuestionIndex = 0;
let timeInSeconds = 60;

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

function startTimer() {
    const timerInterval = setInterval(function() {
        if (timeInSeconds <= 0) {
            clearInterval(timerInterval);
            timeLeft.textContent = "Time's Up!";
        } else {
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

        // Display answer choices
        question.choices.forEach((choice, i) => {
            const choiceItem = document.createElement("li");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = "answer";
            input.value = choice;
            choiceItem.appendChild(input);
            choiceItem.appendChild(document.createTextNode(` ${choice}`));
            choices.appendChild(choiceItem);
        });
    } else {
        // Handle quiz completion (no more questions)
        quizContainer.innerHTML = "Quiz Completed!";
    }
}


// I also need it so that when a question is answered the timer either stays the same or time is removed depending on if the answer is correct or not

// I need it to display the users score at the end of the quiz and provide a text box to enter the users initials and save them along with their score

// I need to save those scores to local storage and have them accesible for later viewing by clicking a link

// I need it to display "CORRECT" or "INCORRECT" at the bottom of the screen appropriately after each question is answered

// If all the above is done I need to ensure I am not missing any steps and that all the code is written as effeciently as possible