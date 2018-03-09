// This generates the RNG for outcome
function getRandomInt(min,max){
  return Math.floor(Math.random() * (max-min + 1)) + min ;
}
//This function operates the opponents/computers outcome
function computerPlay(){
  const arr = ["Rock", "Paper", "Scissors"];

  return arr [getRandomInt(0,2)];
}

//Gameplay rounds setting up winning and losing conditions
function playRound (event){
  const playerSelection =  event.target.textContent.toLowerCase();
  const computerSelection = computerPlay().toLowerCase();

  let playerScoreOutput = document.getElementById('player-score');
  let computerScoreOutput = document.getElementById('computer-score');
  let roundResultOutput = document.querySelector ("#output p");

//Setup for tie conditions
  if ((computerSelection === 'rock' && playerSelection === 'rock') || (computerSelection === 'paper' && playerSelection === 'paper') || (computerSelection === 'scissors' && playerSelection === 'scissors')) {
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Tie game!`;
  }
  // Setup for win conditions
  else if (computerSelection === 'rock' && playerSelection === 'paper'){
    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Won!`;
  } else if (computerSelection === 'paper' && playerSelection === 'scissors'){
    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Won!`;
  } else if (computerSelection === 'scissors' && playerSelection === 'rock'){
    playerScore += 1;
    roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Won!`;
}
// Setup for lose conditions
    else if (computerSelection === 'rock' && playerSelection === 'scissors'){
      computerScore += 1;
      roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Lost!`;
    } else if (computerSelection === 'paper' && playerSelection === 'rock'){
      computerScore += 1;
      roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Lost!`;
    } else if (computerSelection === 'scissors' && playerSelection === 'paper'){
      computerScore += 1;
      roundResultOutput.innerHTML = `${playerSelection} against ${computerSelection}. Round Lost!`;
    }
    
    playerScoreOutput.innerHTML = playerScore;
    computerScoreOutput.innerHTML = computerScore;
  }

  // Setup for when player or computer reaches 5 wins.
  function game(){
    let gameWinnerOutput = document.getElementById("game-win");
    let buttons = document.querySelectorAll('button');
// Winner condition
    if (playerScore === 5){
      gameWinnerOutput.innerHTML = `
      <h2> WINNER WINNER CHICKEN DINNER! </h2>
      <button class= "button-primary" id="play-again" onClick="playAgain()"> Play Again </button>
      `;
      buttons.forEach(button => {
     button.setAttribute('disabled', '');
     button.classList.add('disabled');
   });
 } // Loser condition
    if (computerScore === 5){
      gameWinnerOutput.innerHTML =  `
      <h2> YOU LOSE! </h2>
      <button class= "button-primary" id="play-again" onClick="playAgain()"> Play Again </button>
      `;
      buttons.forEach(button => {
     button.setAttribute('disabled', '');
     button.classList.add('disabled');
   });

    }
  }

  // Play again function to reload Gameplay
  function playAgain() {
    window.location.reload();
  }

  // Score tracking - starts scores at 0
  let playerScore = 0;
  let computerScore = 0;

  //Event Listeners
  document.getElementById('rock').addEventListener('click',() =>{
    playRound(event);
    game();
  });

  document.getElementById('paper').addEventListener('click',() =>{
    playRound(event);
    game();
  });
  document.getElementById('scissors').addEventListener('click',() =>{
    playRound(event);
    game();
  });
