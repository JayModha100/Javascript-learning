function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) return "rock";
  if (random === 1) return "paper";
  return "scissors";
}

function getHumanChoice() {
  let choice = prompt("Throw Rock, Paper or Scissors");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  
  if (humanChoice === computerChoice) {
    document.getElementById("result").innerHTML += "Tie!<br>";
    return;
  }

  const humanWins =
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper");

  if (humanWins) {
    document.getElementById("result").innerHTML += "Human Wins!<br>";
  } else {
    document.getElementById("result").innerHTML += "Computer Wins!<br>";
  }
}

// play 5 rounds
for (let i = 0; i < 5; i++) {
  const human = getHumanChoice();
  const computer = getComputerChoice();
  playRound(human, computer);
}
