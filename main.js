function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "scissors") {
      return "You win!";
    } else {
      return "You lost :(";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      return "You win!";
    } else {
      return "You lost :(";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      return "You win!";
    } else {
      return "You lost :(";
    }
  } else {
    return "Try again you made a typo";
  }
}
