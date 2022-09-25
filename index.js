const readlineSync = require("readline-sync");
var userName;
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

console.log(`Hi ${userName}, you scored ${score}/5`);
