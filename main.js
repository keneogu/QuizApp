const quizData = [
  {
    question: "How old is Kene",
    a: "10",
    b: "17",
    c: "26",
    d: "110",
    correct: "c",
  },
  {
    question: "What is the best programming language",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "Who is the president of US",
    a: "Kene Ogu",
    b: "Abeid Ahmed",
    c: "Amit kumar",
    d: "Uduak John",
    correct: "a",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Makrup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Application Progamming Interface",
  },
  {
    question: "What year was JAvascript launched?",
    a: "1994",
    b: "1996",
    c: "1995",
    d: "none of the above",
    corret: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionE1 = document.getElementById("question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionE1.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
  }

  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2> You have answered correctly at ${score}/${quizData.length} questions.</h2>`;
  }
});
