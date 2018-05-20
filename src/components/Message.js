import React from "react";
import "./Message.css";

const Message = ({ showMessage, handleClick }) => {
  return (
    <div className="showMessage">
      <h1>{showMessage}</h1>
      <button onClick={() => handleClick("restartGo")}>Continue</button>
    </div>
  );
};

export default Message;
