function getComputerChoice() {
  let score = Math.floor(Math.random() * 3)
  if (score === 0) {
    return "rock";
  } else if (score === 1) {
    return "paper";
  } else if (score === 2) {
    return "scissors";
  }
}