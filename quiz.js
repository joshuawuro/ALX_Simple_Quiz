function checkAnswer(){
    const correctAnswer = "4";
}

const selectedValue = document.querySelector('input[name="quiz"]:checked');
selectedValue.value = userAnswer;


const feedback = document.getElementById('feedback');

if (correctAnswer = userAnswer){
    feedback.textContent = "Correct! Well done." 
} else if (correctAnswer != userAnswer) {
    feedback.textContent = "That's incorrect. Try again!"
}

const submitAnswer = document.getElementById('submit-answer');

submitAnswer.addEventListener('click', checkAnswer);
