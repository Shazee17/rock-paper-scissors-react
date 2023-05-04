import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons";
import Winner from "./Winner";
import { determineWinner } from "./gameLogic";

const Buttons = () => {
  const [userChoice, setUserChoice] = useState(null);
  const [computersChoice, setComputersChoice] = useState(null);
  const [winnerDeclared, setWinnerDeclared] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const handleChoice = (choice) => {
    setUserChoice(choice);
    const computerChoice = randomComputersChoice();
    setComputersChoice(computerChoice);
    const winner = determineWinner(choice, computerChoice);
    updateScore(winner);
    setWinnerDeclared(true);
  };

  const randomComputersChoice = () => {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
  };

  const updateScore = (winner) => {
    if (winner === "You Win") {
      setUserScore((prevScore) => prevScore + 1);
    } else if (winner === "Computer Wins") {
      setComputerScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <div className="container">
      <h1 className="gameTitle">'ROCK PAPER SCISSORS'</h1>

      <div className="score">User Score: {userScore}</div>
      <div className="score">Computer Score: {computerScore}</div>

      {!winnerDeclared && (
        <div className="button-container">
          <div class="top-buttons">
            <button title="Rock" onClick={() => handleChoice("Rock")}>
              <FontAwesomeIcon
                icon={faHandBackFist}
                size="xl"
                className="font-awesome-icon"
              />
            </button>

            <button title="Paper" onClick={() => handleChoice("Paper")}>
              <FontAwesomeIcon
                icon={faHand}
                size="xl"
                className="font-awesome-icon"
              />
            </button>
          </div>

          <button title="Scissors" onClick={() => handleChoice("Scissors")}>
            <FontAwesomeIcon
              icon={faHandScissors}
              size="xl"
              className="font-awesome-icon"
            />
          </button>
        </div>
      )}

      {winnerDeclared && (
        <>
          <Winner
            userChoice={userChoice}
            computersChoice={computersChoice}
            winner={determineWinner(userChoice, computersChoice)}
          />

          <button onClick={() => setWinnerDeclared(false)}>Try Again</button>
        </>
      )}
    </div>
  );
};

export default Buttons;
