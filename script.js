const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")
const output = document.querySelector(".output")
const humanScoreDOM = document.querySelector(".humanScore")
const computerScoreDOM = document.querySelector(".computerScore")

let humanChoice = ""

rockButton.addEventListener("click", () => {
  humanChoice = "rock"
  playRound()
})
paperButton.addEventListener("click", () => {
  humanChoice = "paper"
  playRound()
})
scissorsButton.addEventListener("click", () => {
  humanChoice = "scissors"
  playRound()
})



function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3)
  switch(computerChoice) {
    case 0:
      return "rock"
    case 1:
      return "paper"
    case 2:
      return "scissors"
  }
}

let humanScore = 0
let computerScore = 0

function playRound(computerChoice) {
  computerChoice = getComputerChoice()
  if (computerChoice === humanChoice) {
    output.textContent = `Draw computer selected ${computerChoice}`
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    output.textContent = "You win! rock beats scissors"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    output.textContent = "You lose! paper beats rock"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerChoice++
    output.textContent = "You lose! scissors beat paper"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanChoice++
    output.textContent = "You win! paper beats rock"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerChoice++
    output.textContent = "You lose! rock beats scissors"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanChoice++
    output.textContent = "You win! scissors beat paper"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
  }
}

