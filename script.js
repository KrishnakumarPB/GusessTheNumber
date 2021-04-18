'use strict'
let a=0;
const secretnumber=Math.trunc(Math.random()*20)+1;
console.log(secretnumber);
const btnCheck=document.querySelector(".btncheck");
var score=Number(document.querySelector(".score").innerHTML);
btnCheck.addEventListener("click",function(){
    const guess=Number(document.querySelector(".userinput").value);
    if (guess>20 || guess<0||guess==null)
    {
        //alert to input a proper number
    }
    else
    {
        if (guess>secretnumber)
        {
            score=score-1;
            score.innerHTML=score;
            console.log(score);
        }
        else if(guess<secretnumber)
        {
            //too low
            score.textContent=score--;

        }
        else if(guess===secretnumber)
        {
            //You won
            //score=highscore

        }
    }
})