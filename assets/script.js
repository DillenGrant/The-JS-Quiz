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
var timeLeft = 60;
var score = 0;

//start the quiz
function startQuiz() {
    startButton.style.display = "none";
    quizScreen.style.display = "block";
    NextQuestion();
    startTimer();
}

// go to next question
function NextQuestion() {
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
                    timeLeft -= 10;
                }
                currentQuestionIndex++;
                NextQuestion();
            });
            answerButtons.appendChild(button);
        });
    } else {
        endQuiz();
    }
}

// start the timer
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

// end the quiz
function endQuiz() {
    quizScreen.style.display = "none";
    endScreen.style.display = "block";
    finalScore.textContent = score;
}

// score submission
submitScoreButton.addEventListener("click", () => {
    var initials = initialsInput.value;
    saveScore(initials, score)
    alert(`Score saved for ${initials}: ${score}`);

    location.reload();
});

function saveScore(initials, score) {
    localStorage.setItem(initials, score)
}

startButton.addEventListener("click", startQuiz);

var questions = [
    {
        question: "What is JavaScript?",
        answers: [
            "A way to make coffee",
            "The lines for a movie",
            "something with MineCraft?",
             "A programming language",
        ],
        correctAnswer: 3,
    },
  {
    question: 'What is JavaScript primarily used for?',
    answers: [
      'Creating responsive web designs',
      'Styling web pages',
      'Managing server-side database',
      'Adding interactivity to web pages',
    ],
    correctAnswer: 3,
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
    correctAnswer: 1,
  },
  {
    question: 'Which JavaScript data type represents a single character?',
    answers: [
        'char',
        'string',
        'character',
        'charstring',
    ],
    correctAnswer: 1,
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