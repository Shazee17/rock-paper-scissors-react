import React from "react";

const Winner = ({ userChoice, computersChoice, winner }) => {
  return (
    <div>
      <p>User: {userChoice}</p>
      <p>Computer: {computersChoice}</p>
      <h2>{winner}</h2>
    </div>
  );
};

export default Winner;
