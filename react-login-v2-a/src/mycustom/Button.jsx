import React from "react";

/**
 * props 에 전달받은 변수에 기본값을 지정하여
 * props 값이 전달되지 않더라도 지정값이 반영될 수 있도록 하기
 */
const Button = ({
  children,
  backgroundColor = "blue",
  color = "#fff",
  onClick,
}) => {
  const MyButtonStyle = {
    fontSize: " 18px",
    fontWeight: " 700",
    width: " 60%",
    height: " 50px",
    lineHeight: " 50px",

    margin: " 10px auto",
    cursor: " pointer",
    textAlign: " center",

    color: color,
    border: " none",
    borderRadius: " 5px",
    backgroundColor: backgroundColor,
  };
  return (
    <button style={MyButtonStyle} onClick={onClick} className="myButton">
      {children}
    </button>
  );
};

export default Button;
