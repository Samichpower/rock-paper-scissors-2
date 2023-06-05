const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const newGameBtn = document.querySelector('.new-game');

const finalSplash = document.querySelector('.final-splash');
const finalScores = document.querySelector('.final-scores')

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
    playerContainer.classList.add('round-winner');
    computerContainer.classList.add('round-winner');
    setTimeout(() => {
      playerContainer.classList.remove('round-winner');
      computerContainer.classList.remove('round-winner');
    }, 200);

    playerContainer.innerHTML = '';
    playerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerContainer.innerHTML = '';
    computerScore = 0;
    computerScoreDisplay.textContent = computerScore;

    finalSplash.innerHTML = '';
  });

  function flashRoundWinner(winner) {
    winner.classList.add('round-winner');
    setTimeout(() => {
      winner.classList.remove('round-winner');
    }, 400);
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      flashRoundWinner(computerContainer);
      flashRoundWinner(playerContainer);
      return `It's a tie! You both picked ${computerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashRoundWinner(computerContainer);
      return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashRoundWinner(playerContainer);
      return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashRoundWinner(playerContainer);
      return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashRoundWinner(computerContainer);
      return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashRoundWinner(computerContainer);
      return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      flashRoundWinner(playerContainer);
      return "You win! Scissors beats Paper!";
    } else {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      flashRoundWinner(computerContainer);
      return "Round forfeit! Computer wins!"
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

  function displayGameWinner() {
    if (playerScore < computerScore) {
      finalSplash.textContent = `LOSER!`;
      finalScores.textContent = `${playerScore} to ${computerScore}`
    } else if (playerScore > computerScore) {
      finalSplash.textContent = 'WINNER!';
      finalScores.textContent = `${playerScore} to ${computerScore}`
    }
  }

  rockBtn.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) return;
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('rock', computerSelection);
    playerContainer.innerHTML = '<img src="images/rock.jpg" alt="A nice brown rock.">';
    if (playerScore >= 5 || computerScore >= 5) {
      displayGameWinner();
      return;
    }
  })

  paperBtn.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) return;
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('paper', computerSelection);
    playerContainer.innerHTML = '<img src="images/paper.png" alt="Blank paper with a folded corner.">';
    if (playerScore >= 5 || computerScore >= 5) {
      displayGameWinner();
      return;
    }
  });

  scissorsBtn.addEventListener('click', () => {
    if (playerScore >= 5 || computerScore >= 5) return;
    const computerSelection = getComputerChoice();
    displayComputerChoice(computerSelection)
    playRound('scissors', computerSelection);
    playerContainer.innerHTML = '<img src="images/scissors.png" alt="Black handled scissors.">';
    if (playerScore >= 5 || computerScore >= 5) {
      displayGameWinner();
      return;
    }
  })
}

game();