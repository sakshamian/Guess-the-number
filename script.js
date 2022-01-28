'use strict';

const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}
let secretnumber = Math.trunc(Math.random()*20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener(
    'click',function(){
        const guess = Number(document.querySelector('.guess').value);
        console.log(typeof guess);
        
        if(!guess){
            displaymessage("🚫 No Number");
        }
        //when player wins
        else if(guess === secretnumber){
            document.querySelector('body').style.backgroundColor = '#60b347' ;
            document.querySelector('.number').style.width = '30rem';
            displaymessage("🎉 Correct Number");
            document.querySelector('.number').textContent = secretnumber;
            document.querySelector('.score').textContent = score;
            
            if(highscore > score || highscore == 0){
                highscore = score;
                document.querySelector('.highscore').textContent = highscore;
            }
        }

        else if(guess !== secretnumber ){
            score--;
            if(score > 1){
                displaymessage(guess > secretnumber ? "🤒 Too high" : "⬇️ Too low!");
            }
            else{
                displaymessage("😭 You Lost the game!");
            }
        }
    });
document.querySelector('.again').addEventListener('click',function(){
    displaymessage("Start guessing..");
    score=20;
    secretnumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').textContent = ' ';
    document.querySelector('body').style.backgroundColor = '#222' ;
    document.querySelector('.number').style.width = '15rem';
});
