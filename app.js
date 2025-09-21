document.addEventListener("DOMContentLoaded", function () {
  // ===== Quiz Questions =====
  const questions = [
    {
      question: "What is 2 + 2?",
      options: ["2", "3", "4", "5"],
      answer: "4"
    },
    {
      question: "Capital of India?",
      options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
      answer: "Delhi"
    },
    {
      question: "Which is a programming language?",
      options: ["Python", "Lion", "Rose", "Elephant"],
      answer: "Python"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Venus"],
      answer: "Mars"
    },
    {
      question: "What is the boiling point of water (°C)?",
      options: ["90", "100", "80", "120"],
      answer: "100"
    }
  ];

  // ===== DOM Elements =====
  const startBtn = document.getElementById("start-btn");
  const quizContainer = document.getElementById("quiz-container");
  const scoreContainer = document.getElementById("score-container");

  let currentQuestion = 0;
  let score = 0;

  // ===== Start Quiz =====
  startBtn.addEventListener("click", startQuiz);

  function startQuiz() {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    showQuestion();
  }

  // ===== Show Question =====
  function showQuestion() {
    const q = questions[currentQuestion];
    quizContainer.innerHTML = `
      <h2>Question ${currentQuestion + 1}: ${q.question}</h2>
      <ul>
        ${q.options
          .map(
            (option) =>
              `<li><button class="option-btn">${option}</button></li>`
          )
          .join("")}
      </ul>
    `;

    document.querySelectorAll(".option-btn").forEach((btn) => {
      btn.addEventListener("click", checkAnswer);
    });
  }

  // ===== Check Answer =====
  function checkAnswer(e) {
    const selected = e.target.textContent;
    if (selected === questions[currentQuestion].answer) {
      score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }

  // ===== Show Final Score =====
  function showScore() {
    quizContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreContainer.innerHTML = `
      <h2>Your Score: ${score} / ${questions.length}</h2>
      <button id="restart-btn">Restart Quiz</button>
    `;

    document
      .getElementById("restart-btn")
      .addEventListener("click", restartQuiz);
  }

  // ===== Restart Quiz =====
  function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    scoreContainer.style.display = "none";
    startBtn.style.display = "block";
  }
});
