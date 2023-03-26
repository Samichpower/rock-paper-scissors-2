# rock-paper-scissors-2

getComputerChoice() will return randomly either rock paper or scissors.

playRound(playerSelection, computerSelection), will play a single round of the game. 
Return a string declaring the winner like this: "You Lose! Paper beats Rock"
Make playerSelection parameter case-insensitive

game(). Previous function inside this one. Plays a 5 round game and keeps the score. Reports the best of 5 winner at the end.


PSEUDOCODE
getComputerChoice
Generate random num 0-2
If num === 0, return rock
if num === 1, return paper
if num === 2, return scissors



game()
let playerScore = 0
let computerScore = 0

for loop for 5 rounds
let playerSelection = prompt("rock paper or scissors?").toLowerCase()
let computerSelection = getComputerChoice()

playRound(playerSelection, computerSelection)
if playerSelection == "rock" and computerSelection == "scissors"
player wins, add a score to playerScore. 
return "You win! Rock beats scissors!"
Do this with all variations, INCLUDING TIES


Outside the loop, an if statement to check the winner
if playerScore > computerScore
console.log("You won! The score is " + playerScore + " to " + computerScore)

if playerScore < computerScore
console.log("You lost! The score is " + playerScore + " to " + computerScore)

else
console.log("It's a tie! The score is " + playerScore + " to " + computerScore)