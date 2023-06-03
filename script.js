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
    }, 750);
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

  function displayWinner() {
    if (roundCounter >= 5) {
      resultsContainer.appendChild(checkForWinner());
      roundCounter = 0;
    }
  }

  function displayComputerChoice(computerSelection) {
    if (computerSelection === 'rock') {
      computerContainer.innerHTML = '<img src="images/rock.jpg" alt="A nice brown rock.">';
    } else if (computerSelection === 'paper') {
      computerContainer.innerHTML = '<img src="images/paper.png" alt="Blank paper with a folded corner.">';
    } else if (computerSelection === 'scissors') {
      computerContainer.innerHTML = '<img src="images/scissors.png" alt="Black handled scissors.">';
    }
  }

  rockBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('rock', computerSelection);
    playerContainer.innerHTML = '<img src="images/rock.jpg" alt="A nice brown rock.">';
    console.log(computerSelection);
  })

  paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('paper', computerSelection);
    playerContainer.innerHTML = '<img src="images/paper.png" alt="Blank paper with a folded corner.">';
  });

  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('scissors', computerSelection);
    playerContainer.innerHTML = '<img src="images/scissors.png" alt="Black handled scissors.">';
  })
}

game();




//The player will click their choice and it will immediatly return the winner and display the results and stuff. The middle button will simply progress to the next round and reset everything.