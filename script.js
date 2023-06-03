const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const newGameBtn = document.querySelector('.new-game');
const resultsContainer = document.querySelector('.results-container');

const playerContainer = document.querySelector('.player-choice');
const computerContainer = document.querySelector('.computer-choice');

const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');


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
  let playerScore = 0;
  let computerScore = 0;

  newGameBtn.addEventListener('click', () => {
    playerContainer.classList.add('winner');
    computerContainer.classList.add('winner');
    setTimeout(() => {
      playerContainer.classList.remove('winner');
      computerContainer.classList.remove('winner');
    }, 200);

    playerContainer.innerHTML = '';
    computerContainer.innerHTML = '';
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;
  });

  function flashWinner(winner) {
    winner.classList.add('winner');
    setTimeout(() => {
      winner.classList.remove('winner');
    }, 400);
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      flashWinner(computerContainer);
      flashWinner(playerContainer);
      return `It's a tie! You both picked ${computerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashWinner(computerContainer);
      return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashWinner(playerContainer);
      return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashWinner(playerContainer);
      return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashWinner(computerContainer);
      return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashWinner(computerContainer);
      return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashWinner(playerContainer);
      return "You win! Scissors beats Paper!";
    } else {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashWinner(computerContainer);
      return "Round forfeit! Computer wins!"
    }
  }

  function displayWinner() {
    const winner = document.createElement('p');
    if (playerScore < computerScore) {
      winner.textContent = `LOSER! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      return winner;
    } else if (playerScore > computerScore) {
      winner.textContent = `WINNER! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      return winner;
    } else if (playerScore === computerScore) {
      winner.textContent = `IT'S A TIE! TOTAL SCORES: ${playerScore} to ${computerScore}`;
      return winner;
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
    if (playerScore >= 5 || computerScore >= 5) {
      resultsContainer.appendChild(displayWinner());
    }
  })

  paperBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('paper', computerSelection);
    playerContainer.innerHTML = '<img src="images/paper.png" alt="Blank paper with a folded corner.">';
    if (playerScore >= 5 || computerScore >= 5) {
      resultsContainer.appendChild(displayWinner());
    }
  });

  scissorsBtn.addEventListener('click', () => {
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('scissors', computerSelection);
    playerContainer.innerHTML = '<img src="images/scissors.png" alt="Black handled scissors.">';
    if (playerScore >= 5 || computerScore >= 5) {
      resultsContainer.appendChild(displayWinner());
    }
  })
}

game();


//start game button just has to set the state of the game to that of a new game. scores to 0, blank the containers