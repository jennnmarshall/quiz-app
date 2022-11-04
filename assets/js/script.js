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
var restartButton = document.querySelector("#restart");
var clearButton = document.querySelector("#clear");
// adds class "alt colors" to the score list
scoreList.classList.add("alt-colors");
// user array with initials and score
// storageValid();
// variable array of question objects
var questions = [
  {
    question: "I'm never gonna dance again, Guilty feet have got no rhythm",
    choices: [
      "China Girl - David Bowie",
      "Careless Whisper - George Michael",
      "Beat It - Michael Jackson",
      "Wake Me Up Before You Go-Go - Wham",
    ],
    answer: "Careless Whisper - George Michael",
  },
  {
    question: "I'm gonna live forever, I'm gonna learn how to fly",
    choices: [
      "Nothing Else Matters - Metallica",
      "Never Gonna Give You Up - Rick Astley",
      "Fame - Irene Cara",
      "Sheer Heart Attack - Queen",
    ],
    answer: "Fame - Irene Cara",
  },
  {
    question: "Clock strikes upon the hour, and the sun begins to fade",
    choices: [
      "I Wanna Dance With Somebody - Whitney Houston",
      "These Dreams - Heart",
      "Love Shack - The B-52s",
      "Kiss - The Revolution",
    ],
    answer: "I Wanna Dance With Somebody - Whitney Houston",
  },
  {
    question: "Pardon me for thinking, there's something under my hair",
    choices: [
      "Sweet Dreams(Are Made of This) - The Eurythmics",
      "Fight For Your Right - Beastie Boys",
      "New Power Generation - Prince",
      "Push It! - Salt 'N Pepa",
    ],
    answer: "New Power Generation - Prince",
  },
  {
    question:
      "See the stone set in your eyes, see the thorn twist in your side",
    choices: [
      "Edge of Seventeen - Stevie Nicks",
      "With or Without You - U2",
      "Careless Whisper - George Michael",
      "Time After Time - Cyndi Lauper",
    ],
    answer: "With or Without You - U2",
  },
  {
    question: "Loving you would be easy if your colors were like my dreams",
    choices: [
      "Karma Chameleon - Culture Club",
      "Keep on Loving You - REO Speedwagon",
      "The Safety Dance - Men At Work",
      "Straight Up - Paula Abdul",
    ],
    answer: "Karma Chameleon - Culture Club",
  },
  {
    question: "Why is the bedroom so cold? You've turned away on your side",
    choices: [
      "Cold Hearted Snake - Paula Abdul",
      "Pictures of You - The Cure",
      "I Ran - Flock of Seagulls",
      "Love Will Tear Us Apart - Joy Division",
    ],
    answer: "Love Will Tear Us Apart - Joy Division",
  },
  {
    question:
      "Once upon a time not long ago, when people wore pajamas and lived life slow",
    choices: [
      "Walk This Way - Run DMC",
      "Children's Story - Slick Rick",
      "Whatta Man - Salt 'N Pepa",
      "Boyz-N-The-Hood - Eazy-E",
    ],
    answer: "Children's Story - Slick Rick",
  },
  {
    question: "Trapped in purgatory, a lifeless object, alive",
    choices: [
      "One - Metallica",
      "Boys Don't Cry - The Cure",
      "Straight Outta Compton - NWA",
      "Raining Blood - Slayer",
    ],
    answer: "Raining Blood - Slayer",
  },
  {
    question: "I've been putting out fire with gasoline",
    choices: [
      "Girls Just Want to Have Fun - Cyndi Lauper",
      "A Forest - The Cure",
      "Cat People - David Bowie",
      "Walk This Way - Run DMC",
    ],
    answer: "Cat People - David Bowie",
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
    }
  }, 1000);
}

// function to stop the timer, called when user finishes before time
function stopTimer() {
  clearInterval(timeInterval);
  timer.textContent = "Time's up!";
  body.appendChild(timer);
}

// runs storage check to prevent rewriting user score

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
    wrong.remove();
    score++;
  } else {
    listEl.appendChild(wrong);
    correct.remove();
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice2.addEventListener("click", function (event) {
  if (qChoice2.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    wrong.remove();
    score++;
  } else {
    listEl.appendChild(wrong);
    correct.remove();
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice3.addEventListener("click", function (event) {
  if (qChoice3.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    wrong.remove();
    score++;
  } else {
    listEl.appendChild(wrong);
    correct.remove();
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});

qChoice4.addEventListener("click", function (event) {
  if (qChoice4.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    wrong.remove();
    score++;
  } else {
    listEl.appendChild(wrong);
    correct.remove();
    timeLeft = timeLeft - 10;
  }
  changeQuestion();
});
// High Scores! title on page 3
var scoreTitle = document.querySelector("#score-title");
// unhide page 3 variable
var highScorePage = document.querySelector(".score-page");

// this function gets the item
// function scoreTable(event) {
//   event.preventDefault();
//   gameOverPage.setAttribute("style", "display:none");
//   highScorePage.setAttribute("style", "display:block");
//   // userscore is an empty array where the userInfo objects are stored

//   var userScore = JSON.parse(localStorage.getItem("user")) || [];
//   //   set item, add displays here
//   // userinfo is the object array containing the initials and player score

//   userScore.push(userInfo);

//   localStorage.setItem("user", JSON.stringify(userScore));
//   console.log(userScore);
// }
var userScore = storageValid();

function storageValid() {
  if (localStorage.length === 0) {
    console.log("clear");
    newUser = [];
  } else {
    console.log("else");
    newUser = JSON.parse(localStorage.getItem("user"));
  }
  return newUser;
}

restartButton.addEventListener("click", function (event) {
  location.reload();
});

clearButton.addEventListener("click", function () {
  localStorage.clear();
});

// go back button, reset scores button
initialSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  gameOverPage.setAttribute("style", "display:none");
  highScorePage.setAttribute("style", "display:block");
  var userInfo = initialInput.value + " - " + score;
  userScore = userScore.concat(userInfo);
  localStorage.setItem("user", JSON.stringify(userScore));
  console.log(userScore);
  userScore.push(userInfo);
  newUser = JSON.parse(localStorage.getItem("user"));
  printHighScores();
});

var newUser = JSON.parse(localStorage.getItem("user"));

function printHighScores() {
  console.log("print high scores");
  for (var i = 0; i < userScore.length; i++) {
    var newLine = document.createElement("li");
    newLine.textContent = newUser[i];
    scoreList.appendChild(newLine);
    console.log("for loop");
  }
  scoreTitle.appendChild(scoreList);
    
};




