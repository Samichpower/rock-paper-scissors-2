const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultsContainer = document.querySelector('.results-container');

const playerContainer = document.querySelector('.player-choice');
const computerContainer = document.querySelector('.computer-choice');


function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3)
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "scissors";
  }
}

function game() {
  let roundCounter = 0;
  let playerScore = 0;
  let computerScore = 0;

  function flashWinner(winner) {
    winner.classList.add('winner');
    setTimeout(() => {
      winner.classList.remove('winner');
    }, 500);
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! You both picked ${computerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      roundCounter++;
      flashWinner(computerContainer);
      return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      roundCounter++;
      flashWinner(playerContainer);
      return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      roundCounter++;
      flashWinner(playerContainer);
      return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      roundCounter++;
      flashWinner(computerContainer);
      return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      roundCounter++;
      flashWinner(computerContainer);
      return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      roundCounter++;
      flashWinner(playerContainer);
      return "You win! Scissors beats Paper!";
    } else {
      computerScore++;
      roundCounter++;
      flashWinner(computerContainer);
      return "Round forfeit! Computer wins!"
    }
  }

  function checkForWinner() {
    let winner = document.createElement('p');
    if (playerScore < computerScore) {
      winner.textContent = `LOSER! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      playerScore = 0;
      computerScore = 0;
      return winner;
    } else if (playerScore > computerScore) {
      winner.textContent = `WINNER! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      playerScore = 0;
      computerScore = 0;
      return winner;
    } else if (playerScore === computerScore) {
      winner.textContent = `IT'S A TIE! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      playerScore = 0;
      computerScore = 0;
      return winner;
    }
  }

  function displayWinner(choice) {
    if (roundCounter === 0) resultsContainer.innerHTML = '';
    const newPara = document.createElement('p');
    newPara.textContent = playRound(choice, getComputerChoice());
    resultsContainer.appendChild(newPara);
    const scores = document.createTextNode(`Player Score: ${playerScore} :: Computer Score: ${computerScore}`);
    resultsContainer.appendChild(scores);
    
    if (roundCounter === 5) {
      resultsContainer.appendChild(checkForWinner());
      roundCounter = 0;
    }
  }

  rockBtn.addEventListener('click', () => {
    displayWinner('rock');
    playerContainer.innerHTML = '<img src="images/rock.jpg" alt="A nice brown rock.">'
  })

  paperBtn.addEventListener('click', () => {
    displayWinner('paper');
    playerContainer.innerHTML = '<img src="images/paper.png" alt="Blank paper with a folded corner.">'
  });

  scissorsBtn.addEventListener('click', () => {
    displayWinner('scissors');
    playerContainer.innerHTML = '<img src="images/scissors.png" alt="Black handled scissors.">'
  })
}

game();




//The player will click their choice then click play round to actually play the round. On click, the computers choice will be made and compared against the players and the winner will flash yellow for a second and their score will increase by one, then the round will reset. Upon reset, the round counter will increment by one and both their images will be cleared.

//Need to wait to call playRound function until the Play Round button is pressed.