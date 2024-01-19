// Episode: 147
const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

const checkWinner = (player, computer) => {
  if (player === computer) {
    return "draw.";
  } else if (player === "rock") {
    return computer === "scissors" ? "player" : "computer";
  } else if (player === "paper") {
    return computer === "rock" ? "player" : "computer";
  } else {
    return computer === "paper" ? "player" : "computer";
  }
};

const showResult = (result) => {
  if (result === "player") {
    playerScore++;
    console.log("You win.");
  } else if (result === "computer") {
    computerScore++;
    console.log("You lose !");
  } else {
    console.log("It's a tie.");
  }
  console.log(`Your score is: ${playerScore}`);
  console.log(`Computer score is: ${computerScore}`);
  console.log("*-*-*-*-*-*-*-*-*-*-*-*-*-*");
};

const play = () => {
  const playerChoice = prompt("Please choose rock, paper or scissors");
  if (choices.indexOf(playerChoice?.toLowerCase()) !== -1) {
    console.log(`You choose ${playerChoice}.`);
  } else {
    console.log("You cheated !");
    return;
  }
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  console.log(`Computer chooses ${computerChoice}.`);
  const gameResult = checkWinner(playerChoice, computerChoice);
  showResult(gameResult);
  play();
};

play();
