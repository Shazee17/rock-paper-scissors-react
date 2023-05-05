export const determineWinner = (userChoice, computersChoice) => {
  if (userChoice === computersChoice) {
    return "Tie";
  } else if (
    (userChoice === "Rock" && computersChoice === "Scissors") ||
    (userChoice === "Paper" && computersChoice === "Rock") ||
    (userChoice === "Scissors" && computersChoice === "Paper")
  ) {
    return "You Win";
  } else {
    return "Computer Wins";
  }
};
