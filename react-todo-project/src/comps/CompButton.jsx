import React from "react";

function CompButton({ children, onClick }) {
  const btnStyle = {
    backgroundColor: "blue",
    color: "white",
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CompButton;
