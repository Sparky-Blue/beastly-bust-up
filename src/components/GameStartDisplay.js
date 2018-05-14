import React from "react";
import GameStartPose from "./GameStartPose";
import ActionButton from "./ActionButton";
import "./GameStartPose.css";

export default ({ startPlayer, playerRank, computerRank, startGame }) => {
  return (
    <GameStartPose className="gameStartPose" pose={"enter"}>
      <h2>Lets start the game.</h2>
      <h3>Computers total rank is {computerRank}</h3>
      <h3>Your total rank is {playerRank}</h3>
      <h2>{startPlayer} starts</h2>
      <ActionButton title="Start" func={startGame} />
    </GameStartPose>
  );
};
