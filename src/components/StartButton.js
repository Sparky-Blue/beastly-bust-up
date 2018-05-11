import React from "react";
import "./StartButton.css";

const StartButton = ({ title, id }) => {
  return (
    <button className="startButton" id={id}>
      {title}
    </button>
  );
};

export default StartButton;
