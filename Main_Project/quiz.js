const quizData = [
  {
    question: "Who should care about waste?",
    a: "Only mother because she cooks dinners",
    b: "Only father because he goes for shopping",
    c: "Only kids because they eat the least among of all",
    d: "Everyone should be aware of food wasting because it's our common responsibility",
    correct: "d",
  },
  {
    question: "What can we do with leftovers after lunch?",
    a: "We can reuse them in another dish",
    b: "We can put it to cupboard for another few days until we want to eat it again",
    c: "We can give them to kids to play with and have fun",
    d: "We should throw them away because everyone is full after meal",
    correct: "a",
  },
  {
    question: "What kind of food we waste the most?",
    a: "Fruit,vegetables",
    b: "Sweets",
    c: "Dairy products",
    d: "Herbs and spices",
    correct: "a",
  },
  {
    question: "What is wasted when food is thrown out?",
    a: "land",
    b: "water",
    c: "labor",
    d: "All the above",
    correct: "d",
  },
  {
    question: "How many people could be fed by that amount of wasted food?",
    a: "500,000 people",
    b: "1 million",
    c: "2 billion",
    d: "500 million",
    correct: "c",
  },
  {
    question: "Items that can be composted include",
    a: "Tea leaves and coffee grinds",
    b: "Vegetable peelings",
    c: "Pizza boxes",
    d: "All of the above",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
const reviewBtn = document.getElementById("review");
let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});