import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-regular-svg-icons";

const getIcon = (choice) => {
  switch (choice) {
    case "Rock":
      return (
        <FontAwesomeIcon
          icon={faHandBackFist}
          size="xl"
          className="font-awesome-icon"
        />
      );
    case "Paper":
      return (
        <FontAwesomeIcon
          icon={faHand}
          size="xl"
          className="font-awesome-icon"
        />
      );
    case "Scissors":
      return (
        <FontAwesomeIcon
          icon={faHandScissors}
          size="xl"
          className="font-awesome-icon"
        />
      );
    default:
      return null;
  }
};

const Winner = ({ userChoice, computersChoice, winner }) => {
  return (
    <div className="winnerScreen">
      <div className="icon-container">
        <div>{getIcon(userChoice)}</div>
        <div>{getIcon(computersChoice)}</div>
      </div>
      <h2>{winner}</h2>
    </div>
  );
};

export default Winner;
