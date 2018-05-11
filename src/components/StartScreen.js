import React from "react";
import StartButton from "./StartButton";
import "./StartScreen.css";

const StartScreen = () => {
  return (
    <div className="model" id="startScreen">
      <StartButton title="Player v Player" id="PvPbutton" />
      <StartButton title="Player v Computer" id="PvCbutton" />
    </div>
  );
};

export default StartScreen;
