import React from "react";

const ActionButton = ({ title, func, name }) => {
  return (
    <button className="actionButton" onClick={() => func(name)}>
      {title}
    </button>
  );
};

export default ActionButton;
