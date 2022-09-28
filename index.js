const readlineSync = require("readline-sync");
var userName;
console.log(
  "welcome to the game \nThis is a quiz on capital cities of the Indian states. \nIt has five questions and has four options each. \nFor every correct answer, your score increments by one point and there is no negative marking.\nAfter submission, your score out of 5 will be displayed on the screen."
);

function nameFun() {
  userName = readlineSync.question("Enter your name :");
}

nameFun();

if (userName === "") {
  alert("Please enter your name to proceed.");
  nameFun();
}

const answers = ["Bangalore", "Guwahati", "Ahmedabad", "Mumbai", "Chennai"];

const questionOne = readlineSync.question(
  "Which is the capital city of Karnataka? \n"
);

const questionTwo = readlineSync.question(
  "Which is the capital city of Assam?"
);

const questionThree = readlineSync.question(
  "Which is the capital city of Gujarat?"
);

const questionFour = readlineSync.question(
  "Which is the capital city of Maharashtra?"
);

const questionFive = readlineSync.question(
  "Which is the capital city of Tamilnadu?"
);

const userAnswers = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

let score = 0;
for (let i = 0; i < userAnswers.length; i++) {
  if (userAnswers[i].toLowerCase() === answers[i].toLowerCase()) {
    score++;
  } else {
    score;
  }
}

console.log(
  `Hi ${userName}, you scored ${score}/5. \nCorrect Answers: Bangalore, Guwahati, Ahmedabad, Mumbai, Chennai \nYour Answers: ${questionOne},${questionTwo},${questionThree},${questionFour},${questionFive} `
);
