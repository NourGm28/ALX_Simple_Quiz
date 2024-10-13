let feedback = document.querySelector("#feedback");
const correctAnswer = "4";
function checkAnswer(){
    let feedback = document.querySelector("#feedback");
    
    const correctAnswer = "4";
    const form = document.getElementById("quiz-container");
    let userAnswer =form.querySelector('input[name ="quiz"]:checked');
    if(userAnswer) {
        if (userAnswer.value === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "That's incorrect. Try again!";
        }
    }
}
let submit = document.getElementById('submit-answer');
submit.addEventListener('click', checkAnswer);

