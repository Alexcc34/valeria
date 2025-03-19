let score = 0;
let currentQuestionIndex = 0;

const questions = [
    {
        question: "Que dia nos conocimos?",
        correctAnswer: "4",  // Correct answer as a string
        options: ["4", "26", "30", "3"]  // All options as strings
    },
    {
        question: "Que es lo que mas me gusta que hagas o me digas?",
        correctAnswer: "que me amas",
        options: ["besos", "que me amas", "que me digas guapo", "que me dejes verte"]
    },
    {
        question: "que es mi comida favorita?",
        correctAnswer: "tu",
        options: ["tu", "la piza", "los tacos", "la ensalada"]
    },
    {
        question: "que color es mi favorito?",
        correctAnswer: "morado",
        options: ["morado", "rojo", "azul", "cafe"]
    },
    {
        question: "¿Qué serie o película me encanta ver una y otra vez?",
        correctAnswer: "Harry Potter",
        options: ["batman", "interstellar", "Moonrise Kingdom", "Harry Potter"]
    },
    {
        question: "Que parte de tu cuerpo es mi favorito?",
        correctAnswer: "tus piernas",
        options: ["tus labios", "tus ojos", "tus manos", "tus piernas"]
    },
    {
        question: "Qué tipo de música me gusta más?",
        correctAnswer: "Indie",
        options: ["Rock", "alternativa", "Indie", "Baladas"]
    },
    {
        question: "si te tuviera a solas que es lo primero que haria?",
        correctAnswer: "analisar lo Linda que eres",
        options: ["besarte", "abrazarte", "algo mas X", "analisar lo Linda que eres"]
    },
    {
        question: "Qué es lo que más valoro de ti?",
        correctAnswer: "Tu inteligencia y Estilo",
        options: [ "Tu sentido del humor", "Tu apoyo incondicional", "Tu inteligencia y Estilo", "Tu amor y cariño"]
    }
];

function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestionIndex].correctAnswer;

    // Log the selected and correct answer to check the comparison
    console.log("Selected Answer: " + selectedAnswer + ", Correct Answer: " + correctAnswer);

    // Compare the selected answer with the correct answer as strings
    if (selectedAnswer === correctAnswer) {
        score++;
        document.getElementById("score").innerText = score;
        currentQuestionIndex++;

        // Trigger the confetti explosion if the answer is correct
        triggerConfetti();

        if (currentQuestionIndex < questions.length) {
            updateQuestion();
        } else {
            showPrize();
        }
    } else {
        showGameOver();
    }
}

function triggerConfetti() {
    // Trigger a confetti explosion
    confetti({
        particleCount: 200,
        spread: 70,
        origin: { y: 0.6 }
    });
}

function updateQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;
    const answerButtons = document.querySelectorAll(".answer button");

    // Set the button text for options
    question.options.forEach((option, index) => {
        answerButtons[index].innerText = option;
        // Ensure each button passes the correct value when clicked
        answerButtons[index].setAttribute('data-answer', option);
    });
}

function showPrize() {
    document.getElementById("game").style.display = 'none';
    document.getElementById("prize").style.display = 'block';
}

function showGameOver() {
    document.getElementById("game").style.display = 'none';
    document.getElementById("game-over").style.display = 'block';
}

function restartGame() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("game").style.display = 'block';
    document.getElementById("prize").style.display = 'none';
    document.getElementById("game-over").style.display = 'none';
    updateQuestion();
}

// Start the first question when the page loads
updateQuestion();

// Attach event listeners to buttons
document.querySelectorAll('.answer button').forEach(button => {
    button.addEventListener('click', function() {
        const selectedAnswer = this.innerText;  // Get the value of the clicked button
        checkAnswer(selectedAnswer);
    });
});
