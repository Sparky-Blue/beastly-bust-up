import React from "react";

export default ({ startPlayer, playerRank, computerRank }) => {
  return (
    <div>
      <h2>Lets start the game.</h2>
      <h3>Computers total rank is {computerRank}</h3>
      <h3>Your total rank is {playerRank}</h3>
      <h2>{startPlayer} starts</h2>
      <button>Start</button>
    </div>
  );
};
