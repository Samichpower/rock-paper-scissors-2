const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultsContainer = document.querySelector('.results-container');


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

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a tie! You both picked ${computerSelection}!`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You lose! Paper beats Rock!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You win! Rock beats Scissors!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You win! Paper beats Rock!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerScore++;
      return "You lose! Scissors beats Paper!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You lose! Rock beats Scissors!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerScore++;
      return "You win! Scissors beats Paper!";
    } else {
      computerScore++;
      return "Round forfeit! Computer wins!"
    }
  }

  rockBtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = playRound('rock', getComputerChoice());
    resultsContainer.appendChild(newPara);
    const scores = document.createTextNode(`Player Score: ${playerScore} :: Computer Score: ${computerScore}`);
    resultsContainer.appendChild(scores);

    if (playerScore === 5 || computerScore === 5) {
      resultsContainer.appendChild(checkForWinner());
    }
  })

  paperBtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = playRound('paper', getComputerChoice())
    resultsContainer.appendChild(newPara);
    const scores = document.createTextNode(`Player Score: ${playerScore} :: Computer Score: ${computerScore}`);
    resultsContainer.appendChild(scores);

    if (playerScore === 5 || computerScore === 5) {
      resultsContainer.appendChild(checkForWinner());
    }
  });

  scissorsBtn.addEventListener('click', () => {
    const newPara = document.createElement('p');
    newPara.textContent = playRound('scissors', getComputerChoice());
    resultsContainer.appendChild(newPara);
    const scores = document.createTextNode(`Player Score: ${playerScore} :: Computer Score: ${computerScore}`);
    resultsContainer.appendChild(scores);

    if (playerScore === 5 || computerScore === 5) {
      resultsContainer.appendChild(checkForWinner());
    }
  })

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
}

game();