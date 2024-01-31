const trivia = [
  {
    question: "What is the capital of France?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which planet is known as the 'Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
  {
    question: "Who wrote the play 'Romeo and Juliet?",
    choices: ["Shakespeare", "Austen", "Dickens", "Fitzgerald"],
    answer: "Shakespeare",
  },
  {
    question: "What is the main ingredient in guacamole?",
    choices: ["Tomatoes", "Avocado", "Onions", "Cilantro"],
    answer: "Avocado",
  },
  {
    question: "WWat is the chemical symbol for water?",
    choices: ["1776", "1789", "1804", "1812"],
    answer: "1776",
  },
  {
    question: "In which year did the United States declare its independence?",
    choices: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the largest mammal on Earth?",
    choices: ["Elephant", "Giraffe", "Blue Whale", "Gorilla"],
    answer: "Blue Whale",
  },
  {
    question: "Who is the author of 'To Kill a Mockingbird'?",
    choices: ["Rowling", "Lee", "Orwell", "Hemingway"],
    answer: "Lee",
  },
  {
    question: "What is the currency of Japan?",
    choices: ["Yuan", "Won", "Yen", "Ringgit"],
    answer: "Yen",
  },
  {
    question: "Which element has the chemical symbol'Fe?'",
    choices: ["Iron", "Gold", "Silver", "Copper"],
    answer: "Iron",
  },
];

let timeLeft = 45;
let quizIndex = 0;

const init = () => {
  timer();
};

const timer = () => {
  const timeEl = document.querySelector(".timer");
  timeEl.textContent = "Timer: " + timeLeft;
};

const startButtonEl = document.querySelector(".btn-start");

const displayQuestions = () => {
  const clearInstructions = document.querySelector(".instructions-container");
  const buttonContainer = document.querySelector(".btn-container-choices");

  clearInstructions.textContent = "";
  buttonContainer.textContent = "";

  for (let i = 0; i < trivia[quizIndex].choices.length; i++) {
    const currentQuestion = trivia[quizIndex].question;
    const questionContainer = document.querySelector(".question-container");
    const questionsEl = document.querySelector(".questions");
    questionsEl.textContent = currentQuestion;
    questionContainer.insertBefore(
      questionsEl,
      questionContainer.childNodes[0]
    );

    const buttons = document.createElement("button");
    buttons.textContent = trivia[quizIndex].choices[i];
    buttonContainer.appendChild(buttons);
  }
  buttonContainer.addEventListener("click", checkAnswer);
};

const checkAnswer = (event) => {
  const { question, choices, answer } = trivia[quizIndex];

  const target = event.target;
  console.log("target.tagName", target.tagName);

  if (target.matches("BUTTON")) {
    if (target.textContent === answer) {
      console.log("you are correct");
    } else {
      console.log("you are wrong");
    }
  } else {
    console.log("you are not pressing a button");
  }
  quizIndex++;
  displayQuestions();
};

startButtonEl.addEventListener("click", displayQuestions);

init();
