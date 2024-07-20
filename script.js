function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3)
  switch(computerChoice) {
    case 0:
      return "Rock"
    case 1:
      return "Paper"
    case 2:
      return "Scissors"
  }
}

function getHumanChoice() {
  humanChoice = prompt("Rock Paper Scissors?").toLowerCase()
  if (humanChoice === "rock" || humanChoice === "scissors" || humanChoice === "paper") {
    return humanChoice
  } else {
    getHumanChoice()
  }
}

console.log(getHumanChoice())