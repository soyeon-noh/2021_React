import React from "react";

function MyButton({ children, onClick }) {
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

export default MyButton;
