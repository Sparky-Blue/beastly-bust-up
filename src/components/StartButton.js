import React from "react";
import "./StartButton.css";

const StartButton = ({ title, id, start }) => {
  return (
    <button className="startButton" id={id} onClick={start}>
      {title}
    </button>
  );
};

export default StartButton;
