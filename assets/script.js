var quizScreen = document.getElementById("quiz-screen");
var startButton = document.getElementById("start-button");
var questionText = document.getElementById("question-text");
var answerButtons = document.getElementById("answer-buttons");
var timer = document.getElementById("timer");
var timeRemaining = document.getElementById("time-remaining");
var endScreen = document.getElementById("end-screen");
var finalScore = document.getElementById("final-score");
var initialsInput = document.getElementById("initials");
var submitScoreButton = document.getElementById("submit-score");

var currentQuestionIndex = 0;
var timeLeft = 90;
var score = 0;

// Function to start the quiz
function startQuiz() {
    startButton.style.display = "none";
    quizScreen.style.display = "block";
    setNextQuestion();
    startTimer();
}

// Function to set the next question
function setNextQuestion() {
    if (currentQuestionIndex < questions.length) {
        var question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        answerButtons.innerHTML = "";

        question.answers.forEach((answer, index) => {
            var button = document.createElement("button");
            button.textContent = answer;
            button.addEventListener("click", () => {
                if (index === question.correctAnswer) {
                    score++;
                } else {
                    timeLeft -= 10; // Penalty for wrong answer
                }
                currentQuestionIndex++;
                setNextQuestion();
            });
            answerButtons.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

// Function to start the timer
function startTimer() {
    var timerInterval = setInterval(() => {
        timeLeft--;
        timeRemaining.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
}

// Function to end the quiz
function endQuiz() {
    quizScreen.style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = score;
}

// Function to handle score submission
submitScoreButton.addEventListener("click", () => {
    var initials = initialsInput.value;
    // Save the score and initials here (you can use localStorage or an API)
    alert(`Score saved for ${initials}: ${score}`);
    location.reload();
});


// Add event listener to start the quiz
startButton.addEventListener("click", startQuiz);

var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            "A programming language",
            "A type of coffee",
            "A book",
        ],
        correctAnswer: 0,
    },
  {
    question: 'What is JavaScript primarily used for?',
    answers: [
      'Adding interactivity to web pages',
      'Styling web pages',
      'Creating responsive web designs',
      'Managing server-side database',
    ],
    correctAnswer: 0,
  },
  {
    question: 'How do you declare a function in JavaScript?',
    answers: [
      'func myFunction() {}',
      'function: myFunction() {}',
      'function myFunction() {}',
      'def myFunction() {}',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Is web development fun?',
    answers: [
     'Kinda',
      'YES!!!',
      'Um no',
      'IDK',
    ],
    correctAnswer: 2,
  },
  {
    question: 'Which JavaScript data type represents a single character?',
    answers: [
        'char',
        'string',
        'character',
        'charstring',
    ],
    correctAnswer: 2,
  },
  {
    question: 'What does the "DOM" stand for in the context of web development?',
    answers: [
      'Data Object Management',
      'Dynamic Object Manipulation',
      'Document Object Model',
      'Document Order Model',
    ],
    correctAnswer: 2,
  },
  {
    question: 'What is the purpose of the alert() function in JavaScript?',
    answers: [
      'Display an alert dialog box with a message',
      'Display a message in the browsers console',
      'Prompt the user for input',
      'Execute a function immediately'
    ],
    correctAnswer: 0,
  },
]