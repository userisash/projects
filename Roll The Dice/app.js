const player1CurrentScore = document.querySelector('#Current--0');
const player2CurrentScore = document.querySelector('#Current--1');
const player1Score = document.querySelector('#Score--0');
const player2Score = document.querySelector('#Score--1');
const rollBtn = document.querySelector('.Roll-Btn');
const holdBtn = document.querySelector('.Hold-Btn');
const newBtn = document.querySelector('.New-Btn');
const player1 = document.querySelector('.Player-1');
const player2 = document.querySelector('.Player-2');

// Set initial scores
let currentScore1 = 0;
let currentScore2 = 0;
let globalScore1 = 0;
let globalScore2 = 0;
let activePlayer = 1;
let rollClicked = false;
let targetScore  = 100;

rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', hold);
newBtn.addEventListener('click', newGame);

// const setTargetScore = document.getElementById("set-target-score");
// console.log(setTargetScore);
// setTargetScore.addEventListener("click", function() {
//   localStorage.setItem("targetScore", targetScore);
//   setTarget();
//   window.location.href = "Play.html";
// });

// function setTarget() {
//   targetScore = document.getElementById("target-score").value;
//   localStorage.setItem("targetScore", targetScore);
//   window.location.href = "Play.html";
// }

let player1Wins = 0;
let player2Wins = 0;
let dice1Img= document.querySelector('.Dice');
let dice2Img = document.querySelector('.Dice2');


function rollDice() {
  // Generate random numbers for the two dice
  let dice1 = Math.floor(Math.random() * 6) + 1;
  let dice2 = Math.floor(Math.random() * 6) + 1;
  dice1Img.src = `imgs/dice-${dice1}.png`;
  dice2Img.src = `imgs/dice-${dice2}.png`;
  let diceTotal = dice1 + dice2;

  if (activePlayer === 1) {
    currentScore1 += diceTotal;
    player1CurrentScore.innerText = currentScore1;
  } else {
    currentScore2 += diceTotal;
    player2CurrentScore.innerText = currentScore2;
  }

  rollClicked = true;
}

function hold() {
  debugger
  if (!rollClicked) {
    return;
  }
  if (activePlayer === 1) {
    globalScore1 += currentScore1;
    player1Score.textContent = globalScore1;
    currentScore1 = 0;
    player1CurrentScore.textContent = currentScore1;
    activePlayer = 2;
    player1.classList.remove('Active-Player');
    player2.classList.add('Active-Player');
  } else {
    globalScore2 += currentScore2;
    player2Score.textContent = globalScore2;
    currentScore2 = 0;
    player2CurrentScore.textContent = currentScore2;
    activePlayer = 1;
    player2.classList.remove('Active-Player');
    player1.classList.add('Active-Player');
    checkWin(player1Score.innerText, player2Score.innerText, targetScore);
  }

  rollClicked = false;
  checkWin(player1Score.innerText, player2Score.innerText, targetScore);
}

  
  function disableButtons(){
    document.querySelector('#btn').disabled = true;
  }
  
  function checkWin(player1Score, player2Score, targetScore) {
    debugger
    if(player1Score > targetScore) {
        alert("Player 2 Wins.");
        player2Wins++;
        document.getElementById("Player2Wins").textContent = "Player 2 Wins: " + player2Wins;
        disableButtons();

    } else if(player1Score === targetScore) {
        alert("Player 1 wins ");
        player1Wins++;
        document.getElementById("Player1Wins").textContent = "Player 1 Wins: " + player2Wins;
        disableButtons();

    } else if(player2Score > targetScore) {
      alert("Player 1 wins ");
      player1Wins++;
      document.getElementById("Player1Wins").textContent = "Player 1 Wins: " + player2Wins;
      disableButtons();
    } else if(player2Score === targetScore) {
      alert("Player 2 Wins.");
      player2Wins++;
      document.getElementById("Player2Wins").textContent = "Player 2 Wins: " + player2Wins;
      disableButtons();
    } else {
        console.log("The game continues.");
    }
    checkWin(player1Score.innerText, player2Score.innerText, targetScore);
    newGame();
    setTarget();
}

function newGame() {
  currentScore1 = 0;
  currentScore2 = 0;
  globalScore1 = 0;
  globalScore2 = 0;
  activePlayer = 1;
  rollClicked = false;

  player1CurrentScore.innerText = currentScore1;
  player2CurrentScore.innerText = currentScore2;
  player1Score.textContent = globalScore1;
  player2Score.textContent = globalScore2;

  player1.classList.add('Active-Player');
  player2.classList.remove('Active-Player');

  rollBtn.disabled = false;
  holdBtn.disabled = false;
}

