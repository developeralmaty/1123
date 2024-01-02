// quiz.js

const questions = [
    {
        question: "What does RSI stand for?",
        options: ["Relative Strength Index", "Random Stock Indicator", "Real-time Stock Investment"],
        correctIndex: 0
    },
    {
        question: "What do candlestick patterns represent in trading?",
        options: ["Weather patterns", "Price movements", "Economic forecasts"],
        correctIndex: 1
    },
    // Add more questions as needed
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = `Question ${currentQuestion + 1}: ${questions[currentQuestion].question}`;

    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsElement.appendChild(document.createElement("li").appendChild(button));
    });
}

function checkAnswer(index) {
    if (index === questions[currentQuestion].correctIndex) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const resultElement = document.getElementById("result");
    resultElement.textContent = `You scored ${score} out of ${questions.length}.`;

    const questionSection = document.getElementById("question-section");
    const resultSection = document.getElementById("result-section");

    questionSection.style.display = "none";
    resultSection.style.display = "block";
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();

    const questionSection = document.getElementById("question-section");
    const resultSection = document.getElementById("result-section");

    questionSection.style.display = "block";
    resultSection.style.display = "none";
}

// Initial show
showQuestion();
