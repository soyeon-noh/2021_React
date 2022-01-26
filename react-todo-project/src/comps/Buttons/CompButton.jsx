import React from "react";

function CompButton({ children, onClick }) {
  const btnStyle = {
    backgroundColor: "#61dafb",
    color: "#282c34",
    border: "1px solid #61dafb",
    borderRadius: "5px",
    padding: "18px",
  };
  return (
    <button style={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
}

export default CompButton;
