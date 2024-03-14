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
      scoreCurrent += 1;
      return "You win!";
    } else {
      scoreCurrent -= 1;
      return "You lost :(";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "rock") {
      scoreCurrent += 1;
      return "You win!";
    } else {
      scoreCurrent -= 1;
      return "You lost :(";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "paper") {
      scoreCurrent += 1;
      return "You win!";
    } else {
      scoreCurrent -= 1;
      return "You lost :(";
    }
  } else {
    return "Try again you made a typo";
  }
}

function playGame() {
  let playerInput = prompt("What is your choice? ");
  console.log(playRound(playerInput));
}

const buttons = document.querySelector("#buttons");
const result = document.querySelector("#result");

const scoreboard = document.querySelector("#score");
let scoreCurrent = 0;

buttons.addEventListener("click", (e) => {
  let target = e.target;

  result.textContent = playRound(target.textContent, getComputerChoice());

  scoreboard.textContent = scoreCurrent;

  if (scoreCurrent == 5) {
    result.textContent = "You won the game!!!";
    resetGame();
  } else if (scoreCurrent == -5) {
    result.textContent = "You lost the game :(";
    resetGame();
  }
});

function resetGame() {
  scoreCurrent = 0;
  buttons.setAttribute("hidden", "hidden");

  let restartButton = document.createElement("button");
  restartButton.textContent = "New Game";
  let body = document.querySelector("body");
  body.appendChild(restartButton);

  restartButton.addEventListener("click", () => {
    buttons.removeAttribute("hidden");
    body.removeChild(restartButton);

    result.textContent = "Click to start";
    scoreboard.textContent = scoreCurrent;
  });
}
