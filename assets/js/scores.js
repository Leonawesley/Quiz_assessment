let highscore = document.querySelector("#highscores");
let clearScore = document.querySelector("#clear")
let values = JSON.parse(localStorage.getItem("objectToPass"));
let initial = parseInt(values).initials;

//create element  to add initial and highscore and append it
let liEle = document.createElement("li");
liEle.textContent = values.initials + " - " +values.score;
highscore.appendChild(liEle);

//To add event to the clear score button
clearScore.addEventListener("click",function(event){
     highscore.removeChild(liEle);
     localStorage.clear();
 })