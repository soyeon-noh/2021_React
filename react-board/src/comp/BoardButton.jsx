import React from "react";
import StaticButton from "./StaticButton";

const BoardButton = ({ btn_write, btn_update, btn_delete }) => {
  return (
    <div>
      <StaticButton onClick={btn_write}>작성</StaticButton>
      <StaticButton onClick={btn_update}>수정</StaticButton>
      <StaticButton onClick={btn_delete}>삭제</StaticButton>
    </div>
  );
};

export default BoardButton;
