const rockButton = document.querySelector(".rockButton")
const paperButton = document.querySelector(".paperButton")
const scissorsButton = document.querySelector(".scissorsButton")
const output = document.querySelector(".output")
const humanScoreDOM = document.querySelector(".humanScore")
const computerScoreDOM = document.querySelector(".computerScore")
const finalScore = document.querySelector(".finalScore")
const body = document.body
const reset = document.querySelector(".reset")
const myChoice = document.querySelector(".myChoice")
const computerChoiceDOM = document.querySelector(".computerChoice")

let humanChoice = ""
rockButton.addEventListener("click", rock = function() {
  humanChoice = "rock"
  playRound()
})
paperButton.addEventListener("click", paper = function() {
  humanChoice = "paper"
  playRound()
})
scissorsButton.addEventListener("click", scissors = function() {
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
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    output.textContent = "You win! rock beats scissors"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    output.textContent = "You lose! paper beats rock"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++
    output.textContent = "You lose! scissors beat paper"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++
    output.textContent = "You win! paper beats rock"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++
    output.textContent = "You lose! rock beats scissors"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++
    output.textContent = "You win! scissors beat paper"
    humanScoreDOM.textContent = `Your Score: ${humanScore}`
    computerScoreDOM.textContent = `Computer Score: ${computerScore}`
    myChoice.textContent = humanChoice
    computerChoiceDOM.textContent = computerChoice
  }
  if (humanScore > 4) {
    finalScore.textContent = `YOU WIN!`
    
  } else if (computerScore > 4) {
    finalScore.textContent = `YOU LOSE!`
  }
  if (humanScore > 4 || computerScore > 4) {
    rockButton.removeEventListener("click", rock)
    paperButton.removeEventListener("click", paper)
    scissorsButton.removeEventListener("click", scissors)
  }
}

reset.addEventListener("click", () => {
  computerScore = 0
  humanScore = 0
  output.textContent = ""
  humanScoreDOM.textContent = ""
  computerScoreDOM.textContent = ""
  finalScore.textContent = ""
  rockButton.removeEventListener("click", rock)
  paperButton.removeEventListener("click", paper)
  scissorsButton.removeEventListener("click", scissors)
  rockButton.addEventListener("click", rock = function() {
    humanChoice = "rock"
    playRound()
  })
  paperButton.addEventListener("click", paper = function() {
    humanChoice = "paper"
    playRound()
  })
  scissorsButton.addEventListener("click", scissors = function() {
    humanChoice = "scissors"
    playRound()
  })
})

