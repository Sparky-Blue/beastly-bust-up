import React from "react";
import StartButton from "./StartButton";
import "./StartScreen.css";

const StartScreen = ({ start }) => {
  return (
    <div className="model" id="startScreen">
      <StartButton title="Player v Player" id="PvPbutton" start={start} />
      <StartButton title="Player v Computer" id="PvCbutton" start={start} />
    </div>
  );
};

export default StartScreen;
