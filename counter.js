var p1 = document.querySelector("#p1");             //player 1 button
var p1score = document.querySelector("#p1score");   //player 1 display
var p2 = document.querySelector("#p2");             //player 2 button
var p2score = document.querySelector("#p2score");   //player 2 display
var reset = document.querySelector("#reset");       //reset button
var input = document.querySelector("#input");
var limit = document.querySelector("#limit");
score1 = 0;
score2 = 0;
gameOver = false;
var winningScore = 5;


p1.addEventListener('click' , function(){
  if(!gameOver && winningScore > 0){
    score1++;
    if(score1 === winningScore){
      p1score.style.color = 'green';
      gameOver = true;
    }
    p1score.textContent = score1;
  }
})

p2.addEventListener('click' , function(){
  if(!gameOver && winningScore > 0){
    score2++;
    if(score2 === winningScore){
      p2score.style.color = 'green';
      gameOver = true;
    }
    p2score.textContent = score2;
}
})

reset.addEventListener('click' , function(){
  reset1();
  input.value = null;
})

input.addEventListener("change" , function(){
  winningScore = Number(input.value);
  limit.textContent = winningScore;
  reset1();
})

function reset1(){
  score1 = 0;
  score2 = 0;
  p1score.textContent = score1;
  p2score.textContent = score2;
  p1score.style.color = 'black';
  p2score.style.color = 'black';
  gameOver = false;
}