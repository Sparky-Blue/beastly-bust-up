import React, { Fragment } from "react";
import "./ActionMessage.css";

const TraitMessage = ({ action, handleClick }) => {
  return (
    <div className="actionMessage">
      {action === "FH" && (
        <Fragment>
          <h1>Trash first or bounce first?</h1>
          <button onClick={() => handleClick("FH", "trash")}>Trash</button>
          <button onClick={() => handleClick("FH", "bounce")} value="bounce">
            Bounce
          </button>
        </Fragment>
      )}
      {action === "F" && <h1>Choose a fighter to trash</h1>}
      {action === "H" && <h1>Choose a fighter to bounce</h1>}
      {action === "Q" && (
        <Fragment>
          <h1>Would you like to play another card?</h1>{" "}
          <button onClick={() => handleClick("Q", "y")}>Yes</button>
          <button onClick={() => handleClick("Q", "n")}>No</button>
        </Fragment>
      )}
    </div>
  );
};

export default TraitMessage;
