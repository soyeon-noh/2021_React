import React, { useEffect } from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import StaticButton from "./StaticButton";

const Detail = ({ b_seq }) => {
  const { board, setBoard, isModal, switchModal } = useBoardContext();

  return (
    <div className="detail">
      <div>
        <label>제목</label>
        <div>{board.b_title}</div>
      </div>
      <div>
        <label>이름</label>
        <div>{board.b_name}</div>
      </div>
      <div>
        <label>작성일자</label>
        <div>{board.b_date}</div>
      </div>
      <div>
        <label>내용</label>
        <div>{board.b_content}</div>
      </div>
      <StaticButton>수정</StaticButton>
      <StaticButton>삭제</StaticButton>
      <StaticButton onClick={switchModal}>닫기</StaticButton>
    </div>
  );
};
export default Detail;
