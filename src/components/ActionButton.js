import React from "react";

const ActionButton = ({ title, func }) => {
  return (
    <button className="actionButton" onClick={() => func()}>
      {title}
    </button>
  );
};

export default ActionButton;
