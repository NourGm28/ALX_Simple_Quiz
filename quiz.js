let feedback = document.querySelector("#feedback");
let submit = document.getElementById("submit-answer")
let correctAnswer = "4";
function checkAnswer(){
    let userAnswer =document.querySelector('input[name="quiz"]').value;
    if(userAnswer == correctAnswer){
        feedback.textContent = "Correct! Well done.";
    }else{
        feedback.textContent = "Incorrect! Please try again.";
    }
}
submit.addEventListener("click", checkAnswer);

