let timeCount = document.querySelector("#time");
let startButton = document.querySelector("#start");
let questionsList = document.querySelector("#questions")
let startScreen = document.querySelector("#start-screen")
let questionSpace = document.querySelector("#question-title")
let choice = document.querySelector("#choices");
let endScreen = document.querySelector("#end-screen")
let submitBtn = document.querySelector("#submit")
let currentQuestion = 1;

let myQuestions = [
    {
        question: "What is actually electricity?",
        answers:["1. A flow of water","2. A flow of air","3. A flow of electrons","4. A flow of atoms"],
        correctAnswer:3
    },
    {
        question:"Which of the following disorders is the fear of being alone?",
        answers: ["1. Agoraphobia","2. Aerophobia","3. Acrophobia","4. Arachnophobia"],
        correctAnswer:1
    },
    {
        question:"What is the main component of the sun?",
        answers: ["1. Liquid lava","2. Gas","3. Molten Iron","4. Rock"],
        correctAnswer: 2
    },
    {
        question:"Which of the following animals can run the fastest?",
        answers: ["1. Cheetah","2. Leopard","3. Lion","4. Tiger"],
        correctAnswer: 1
    },
    {
        question:"Which of the following actors was the first one to play James Bond?",
        answers: ["1. Timothy Dalton","2. Roger Moore","3. Sean Connery","4. George Lazenby"],
        correctAnswer: 3
    },
    {
        question:"In which country is Transylvania?",
        answers: ["1. Bulgaria","2. Romania","3. Croatia","4. Serbia"],
        correctAnswer:2
    }];

//For countdown
let timer = 60;
let intervalId;
startButton.addEventListener("click",function(event){
    startScreen.setAttribute("class","hide");
    intervalId = setInterval(function(){
        timeCount.textContent = timer;
        timer--;
        if(timer < 0){
            clearInterval(intervalId);
        }
    },1000)
    questionsList.setAttribute("class","start");
    showQuestion();
})


//To display questions and options
function showQuestion(){
    if(currentQuestion <= myQuestions.length){
        console.log(currentQuestion);
        choice.innerHTML = "";
        //document.querySelector("#answers").textContent = "";
        questionSpace.textContent = "";
        questionSpace.textContent = myQuestions[currentQuestion-1].question;
        for (let i = 0; i < myQuestions[currentQuestion-1].answers.length; i++) {
            const answer = myQuestions[currentQuestion-1].answers[i];
            let buttonOption = document.createElement("button");
            buttonOption.setAttribute("value",i)
            buttonOption.innerHTML = answer;
            choice.appendChild(buttonOption);  
        }
    }
    if(currentQuestion > myQuestions.length){
        endScreen.setAttribute("class","start");
        questionsList.setAttribute("class","hide");
        // choice.innerHTML = "";
        // document.querySelector("#answers").textContent = "";
        // questionSpace.textContent = "";
        clearInterval(intervalId);
    }
    currentQuestion++;
}


//Button event
choice.addEventListener("click",function(event){
    if(event.target.matches("button")){
        let str = event.target.getAttribute("value");
        str = parseInt(str)+1;
        if(str === myQuestions[currentQuestion-2].correctAnswer){
            document.querySelector("#answers").textContent = "Correct answer";
        }
        else{
            document.querySelector("#answers").textContent = "Wrong answer";
            timer = timer - 10;
           
        }
    }
    showQuestion();
    //console.log(event);
   });

   //To get initials from the form
   submitBtn.addEventListener("click",function(){
       let initial = document.getElementById("#initials").value;
       console.log(initial);

   })
   