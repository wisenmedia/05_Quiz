document.addEventListener("DOMContentLoaded", () => {
  //Buttons
  const startBtn = document.getElementById("start-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

  //containers

  const questionaireContainer = document.getElementById("question-container");
  const resultContainer = document.getElementById("result-container");
  // Assets
  const questionstext = document.getElementById("question-text");
  const choicesList = document.getElementById("choices-list");

  // Displays
  const scoreDisplay = document.getElementById("score");
  // storage

  //const score = [];
  const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "What is the Capital of 'Haiti'?",
      choices: ["Port-au-Prince", "Cap-Haitian", "Cayes", "Hinche"],
      answer: "Port-au-Prince",
    },
  ];
  let currentQuestionIndex = 0;
  let score = 0;

  // start the quizz
  startBtn.addEventListener("click", startQuiz);
  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", restartQuizz);

  function startQuiz() {
    //hide the start button
    startBtn.classList.add("hidden"); //hide start button
    resultContainer.classList.add("hidden"); // hide the result to show at the end
    questionaireContainer.classList.remove("hidden"); //now  remove the class "hidden" to show the questionaire
    showQuestion(); // call a method to display the questions and styling
  }

  function showQuestion() {
    nextBtn.classList.add("hidden"); //hide the next button until user chooses an option
    questionstext.textContent = questions[currentQuestionIndex].question;

    //refresh the choice option for the next question
    choicesList.innerHTML = "";

    questions[currentQuestionIndex].choices.forEach((choice) => {
      const li = document.createElement("li");
      // add content inside the li
      li.textContent = choice;
      // use a call back function since we don't want the selectAnswer() to execute immediately
      li.addEventListener("click", () => selectAnswer(choice));
      choicesList.appendChild(li);
    });
  }
  function selectAnswer(choice) {
    // grab the correct answere
    console.log(`Anserwer selected: ${choice}`);
    const correctAnswer = questions[currentQuestionIndex].answer;
    //confirm the correct answer against the user's choice
    if (choice === correctAnswer) {
      score++;
    }
    nextBtn.classList.remove("hidden");
  }
  function showResult() {
    questionaireContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");
    scoreDisplay.textContent = `${score} out of ${questions.length}`;
  }
  function restartQuizz() {
    //questionaireContainer.classList.remove("hidden");
    resultContainer.classList.add("hidden");
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
  }
});
