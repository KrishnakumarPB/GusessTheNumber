'use strict'
let a=0;
var secretnumber=Math.trunc(Math.random()*20)+1;
console.log(secretnumber);
const btnCheck=document.querySelector(".btncheck");
const btnagain=document.querySelector(".btnagain")
var message=document.querySelector(".message");
var score=document.querySelector(".score");
var highScore=document.querySelector(".highscore");
var findingNumber=document.querySelector(".number");
var displayHighscore=0;
var currentScore=20;
// score.textContent=currentScore;
btnCheck.addEventListener("click",function(){
    const guess=Number(document.querySelector(".userinput").value);
    if (currentScore>0)
    {
        if (guess>20 || guess<0||guess=="")
        {
            message.textContent="Provide a valid number between 0 & 20";
        }
        else
        {
            if (guess>secretnumber)
            {
                currentScore=currentScore-1;
                score.textContent=currentScore;
                message.textContent="You are too high";
            
            }
            else if(guess<secretnumber)
            {
                currentScore=currentScore-1;
                score.textContent=currentScore;
                message.textContent="You are too low";

            }
            else if(guess===secretnumber)
            {
                message.textContent="You Won";
                findingNumber.textContent=secretnumber;
                if(displayHighscore<currentScore)
                {
                    displayHighscore=currentScore;
                    highScore.textContent=currentScore;
                    
                } 
                currentScore=20;
                score.textContent=currentScore;
            }
        }
    }
    else
    {
        message.textContent="Sorry You Lost";
    }
})
btnagain.addEventListener("click",function(){
findingNumber.textContent="?"
score.textContent=20;
highScore.textContent=displayHighscore;
secretnumber=Math.trunc(Math.random()*20)+1;
console.log(secretnumber);
})