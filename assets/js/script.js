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
var questions = [q1, q2];
// question objects
var q1 = {
  question: "What does HTML stand for?",
  choices: [
    "Hyper Trainer Markup Language",
    "Hyper Text Marketing Language",
    "Hyper Text Markup Language",
    "Hyena Toothfairy Madeup Lingo",
  ],
  answer: "Hyper Text Markup Language",
};

var q2 = {
    question: "<h1>Header</h1> is the correct way of making a header in HTML.",
    choices: ["True", "False", "Red", "Blue"],
    answer: "True",
}

questionText.textContent = q1.question;
qChoice1.textContent = q1.choices[0];
qChoice2.textContent = q1.choices[1];
qChoice3.textContent = q1.choices[2];
qChoice4.textContent = q1.choices[3];
correct.textContent = "You're right!";
wrong.textContent = "Wrong!";

// function to change out question
var changeQuestion = function() {
    // for (var i = 0; i < questions.length; i++) {
    //     questionText.textContent = questions[i].question;
    //     qChoice1.textContent = questions[i].choices[0];
    //     qChoice2.textContent = questions[i].choices[1];
    //     qChoice3.textContent = questions[i].choices[2];
    //     qChoice4.textContent = questions[i].choices[3];
    // }  
    questionText.textContent = q2.question;
    qChoice1.textContent = q2.choices[0];
    qChoice2.textContent = q2.choices[1];
    qChoice3.textContent = q2.choices[2];
    qChoice4.textContent = q2.choices[3];
    questionBox.appendChild(questionText);
    questionBox.appendChild(listEl);
    listEl.appendChild(qChoice1);
    listEl.appendChild(qChoice2);
    listEl.appendChild(qChoice3);
    listEl.appendChild(qChoice4);
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

qChoice1.addEventListener("click", function(event) {
    if (qChoice1.textContent === q1.answer) {
        listEl.appendChild(correct);
        score++;
    } else {
        listEl.appendChild(wrong);
        // time subtract
    }
    changeQuestion();
});

qChoice2.addEventListener("click", function (event) {
  if (qChoice2.textContent === q1.answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});

qChoice3.addEventListener("click", function (event) {
  if (qChoice3.textContent === q1.answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});

qChoice4.addEventListener("click", function (event) {
  if (qChoice4.textContent === q1.answer) {
    listEl.appendChild(correct);
    score++;
  } else {
    listEl.appendChild(wrong);
    // time subtract
  }
  changeQuestion();
});

console.log(score);

