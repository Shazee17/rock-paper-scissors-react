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
  const [score, setScore] = useState(0);

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
      setScore((prevScore) => prevScore + 1);
    } else if (winner === "Computer Wins") {
      setScore((prevScore) => prevScore - 1);
    }
  };

  return (
    <div className="container">
      <div className="score">Score: {score}</div>
      {!winnerDeclared && (
        <>
          <button onClick={() => handleChoice("Rock")}>
            <FontAwesomeIcon icon={faHandBackFist} size="xl" />
          </button>

          <button onClick={() => handleChoice("Paper")}>
            <FontAwesomeIcon icon={faHand} size="xl" />
          </button>

          <button onClick={() => handleChoice("Scissors")}>
            <FontAwesomeIcon icon={faHandScissors} size="xl" />
          </button>
        </>
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
