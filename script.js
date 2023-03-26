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
      return "It's a tie!";
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
    }
  }

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  console.log(playerScore, computerScore); //For testing purposes. Not meant to be permanent.
}

game();