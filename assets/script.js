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
var timeLeft = 90; // Set the initial time limit in seconds
var score = 0;