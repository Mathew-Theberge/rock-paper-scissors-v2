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

function getHumanChoice() {
  humanChoice = prompt("Rock Paper Scissors?").toLowerCase()
  if (humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper") {
    return humanChoice
  } else {
    playRound()
  }
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
  computerChoice = getComputerChoice()
  humanChoice = getHumanChoice()
  if (computerChoice === humanChoice) {
    console.log(`Draw computer selected ${computerChoice}`)
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++
    console.log("You win! rock beats scissors")
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++
    console.log("You lose! paper beats rock")
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerChoice++
    console.log("You lose! scissors beat paper")
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanChoice++
    console.log("You win! paper beats rock")
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerChoice++
    console.log("You lose! rock beats scissors")
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanChoice++
    console.log("You win! scissors beat paper")
  }
}

playRound()