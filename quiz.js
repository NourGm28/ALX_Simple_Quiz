let feedback = document.querySelector("#feedback");
let submit = document.getElementById('submit-answer');
const correctAnswer = "4";
function checkAnswer(){
    const correctAnswer = "4";
    const form = document.getElementById("quiz-container");
    let userAnswer =form.querySelector('input[name ="quiz"]:checked').value;
        if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
        
    }
}

submit.addEventListener('click', checkAnswer);

