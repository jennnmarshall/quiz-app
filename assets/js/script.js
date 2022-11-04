// global variable list
var startButton = document.querySelector("#start");
var start = document.querySelector("#start-quiz");
var body = document.body;
var questionBox = document.createElement("section");
var questionText = document.createElement("h2");
var listEl = document.createElement("ol");
var qChoice1 = document.createElement("li");
var qChoice2 = document.createElement("li");
var qChoice3 = document.createElement("li");
var qChoice4 = document.createElement("li");
var correct = document.createElement("p");
var wrong = document.createElement("p");
var score = 0;
var index = 0;
var timeLeft = 75;
var timer = document.querySelector("#timer");
var highScore = document.querySelector("#score");
var gameOver = document.querySelector("#game-over");
var gameOverPage = document.querySelector(".last-page");
var timeInterval = null;
var initialSubmit = document.querySelector("#submit");
var initialInput = document.querySelector("#name-init");
var scoreList = document.createElement("ol");
// adds class "alt colors" to the score list
scoreList.classList.add("alt-colors");
// user array with initials and score

// variable array of question objects
var questions = [
  {
    question: "What does HTML stand for?",
    choices: [
      "Hyper Trainer Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Text Markup Language",
      "Hyena Toothfairy Madeup Lingo",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "<h1>Header</h1> is the correct way of making a header in HTML.",
    choices: ["True", "False", "Red", "Blue"],
    answer: "True",
  },
];

// text content for first question
questionText.textContent = questions[0].question;
qChoice1.textContent = questions[0].choices[0];
qChoice2.textContent = questions[0].choices[1];
qChoice3.textContent = questions[0].choices[2];
qChoice4.textContent = questions[0].choices[3];
correct.textContent = "You're right!";
wrong.textContent = "That's incorrect!";

// function for timer
function startTimer() {
  timeInterval = setInterval(function () {
    timeLeft--;
    timer.textContent = timeLeft + " seconds left";
    body.appendChild(timer);

    if (timeLeft === 0) {
      clearInterval(timeInterval);
      timer.textContent = "Time's up!";
      body.appendChild(timer);
    }
  }, 1000);
}

// function to stop the timer, called when user finishes before time
function stopTimer() {
  clearInterval(timeInterval);
  timer.textContent = "Time's up!";
  body.appendChild(timer);
}

// var newScore = (score * 5);
// console.log(newScore);

// return user
// function to change out question, or to go to the end page if out of questions
var changeQuestion = function () {
  index++;
  if (index === questions.length) {
    gameOverPage.setAttribute("style", "display:block");
    highScore.textContent = "Your score is " + score + ", well done!";
    gameOver.appendChild(highScore);
    questionText.remove();
    qChoice1.remove();
    qChoice2.remove();
    qChoice3.remove();
    qChoice4.remove();
    correct.remove();
    wrong.remove();
    stopTimer();
  } else {
    questionText.textContent = questions[index].question;
    qChoice1.textContent = questions[index].choices[0];
    qChoice2.textContent = questions[index].choices[1];
    qChoice3.textContent = questions[index].choices[2];
    qChoice4.textContent = questions[index].choices[3];
    questionBox.appendChild(questionText);
    questionBox.appendChild(listEl);
    listEl.appendChild(qChoice1);
    listEl.appendChild(qChoice2);
    listEl.appendChild(qChoice3);
    listEl.appendChild(qChoice4);
    console.log(score);
  }
};

// start button event listener function
startButton.addEventListener("click", function (event) {
  document.getElementById("start-quiz").style.display = "none";
  startTimer();
  body.appendChild(questionBox);
  questionBox.appendChild(questionText);
  questionBox.appendChild(listEl);
  listEl.appendChild(qChoice1);
  listEl.appendChild(qChoice2);
  listEl.appendChild(qChoice3);
  listEl.appendChild(qChoice4);
});

qChoice1.addEventListener("click", function (event) {
  if (qChoice1.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice2.addEventListener("click", function (event) {
  if (qChoice2.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice3.addEventListener("click", function (event) {
  if (qChoice3.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice4.addEventListener("click", function (event) {
  if (qChoice4.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});
// High Scores! title on page 3
var scoreTitle = document.querySelector("#score-title");
// unhide page 3 variable
var highScorePage = document.querySelector(".score-page");

// console.log(user);
// console.log(initialInput);

// this function gets the item
function scoreTable(event) {
  event.preventDefault();
  gameOverPage.setAttribute("style", "display:none");
  highScorePage.setAttribute("style", "display:block");
  // userscore is an empty array where the userInfo objects are stored

  var userScore = JSON.parse(localStorage.getItem("user")) || [];
  //   set item, add displays here
  // userinfo is the object array containing the initials and player score

  userScore.push(userInfo);

  localStorage.setItem("user", JSON.stringify(userScore));
  console.log(userScore);
}
var userScore = [];
// go back button, reset scores button
initialSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  gameOverPage.setAttribute("style", "display:none");
  highScorePage.setAttribute("style", "display:block");
  // var userInfo = {
  //     name: initialInput.value,
  //     score: score,
  // };
  var userInfo = initialInput.value + " - " + score;
  userScore = userScore.concat(userInfo);
  localStorage.setItem("user", JSON.stringify(userScore));
  console.log(userScore);
  
  userScore.push(userInfo);
  printHighScores();
});

var newUser = JSON.parse(localStorage.getItem("user"));

function printHighScores() {
    console.log("print high scores");
  // move get item localstorage
//   userScore.sort(function (a, b) {
//     return b.score - a.score;
//   });
  for (var i = 0; i < userScore.length -1; i++) {
    var newLine = document.createElement("li");
    newLine.textContent = newUser[i];
    scoreTitle.appendChild(scoreList);
    scoreList.appendChild(newLine);
    console.log("for loop");
  }
}
