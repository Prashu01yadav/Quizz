const questions =[
    {
        question:" which is the largest animal in the world",
        answer:[
        
            {text:"Shark", correct:"false"},
            {text:"Blue whale", correct:"true"},
            {text:"Monkey", correct:"false"},
            {text:"Bull", correct:"false"},
        ]
    },
    {
        question:" which is the smallest country in the world",
        answer:[
        
            {text:"Vatican city", correct:"true"},
            {text:"Belgium", correct:"false"},
            {text:"Maxico", correct:"false"},
            {text:"India", correct:"false"},
        ]
    },
    {
        question:" which is the largest desert in the world",
        answer:[
        
            {text:"shahara", correct:"false"},
            {text:"Kalahari", correct:"false"},
            {text:"Gobi", correct:"false"},
            {text:"Thar", correct:"true"},
        ]
    },
    {
        question:" Biggest cultural economy  lies in...",
        answer:[
        
            {text:"Pakistan", correct:"false"},
            {text:"Thiland", correct:"false"},
            {text:"India", correct:"true"},
            {text:"Dubai", correct:"false"},
        ]
    },
    {
        question:" who is the biggest thief in the Dilip chaudhaery mess?",
        answer:[
        
            {text:"Maviya", correct:"false"},
            {text:"Shashwat", correct:"false"},
            {text:"Prashant", correct:"false"},
            {text:"Dilip", correct:"true"},
        ]
    },
    {
        question:" which is the largest building in the world",
        answer:[
        
            {text:"Viswa bangla", correct:"false"},
            {text:"Burj khalifa", correct:"true"},
            {text:"Mia khalifa", correct:"false"},
            {text:"Antilia", correct:"false"},
        ]
    },
    {
        question:" who is the most lazy person in the flate",
        answer:[
        
            {text:"Shashwat", correct:"false"},
            {text:"Shwet", correct:"true"},
            {text:"Aman", correct:"false"},
            {text:"Prince", correct:"false"},
        ]
    }
    

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuetionIndex =0;
let score =0;

function startQuiz(){
    let currentQuetionIndex =0;
    let score =0;
    nextButton.innerHTML= "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuetion = questions[currentQuetionIndex];
    let questionNo = currentQuetionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuetion.question;

    currentQuetion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });

}

function resetState(){
    nextButton.style.display ="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
}

function  showScore(){
    resetState();
    questionElement.innerHTML=`you scored ${score} out of  ${questions.length}!`;
    nextButton.innerHTML="play again";
    nextButton.style.display="block";
}
function handleNextButton(){
    currentQuetionIndex++;
    if(currentQuetionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuetionIndex<questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})
startQuiz();

