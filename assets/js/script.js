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

var index = 0;


console.log(questions);
console.log(questions[0].question);

questionText.textContent = questions[0].question;
qChoice1.textContent = questions[0].choices[0];
qChoice2.textContent = questions[0].choices[1];
qChoice3.textContent = questions[0].choices[2];
qChoice4.textContent = questions[0].choices[3];
correct.textContent = "You're right!";
wrong.textContent = "Wrong!";

// function to change out question
var changeQuestion = function () {
    if (index < questions.length) {
    index++;
    };
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
};

startButton.addEventListener("click", function (event) {
  console.log("it works");
  start.setAttribute("style", "display:none;");
  //   start timer
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
    // time subtract
  }
  changeQuestion();
});

qChoice2.addEventListener("click", function (event) {
  if (qChoice2.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});

qChoice3.addEventListener("click", function (event) {
  if (qChoice3.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});

qChoice4.addEventListener("click", function (event) {
  if (qChoice4.textContent === questions[index].answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});
