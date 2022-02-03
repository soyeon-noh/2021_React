import React, { useEffect } from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import StaticButton from "./StaticButton";

const Detail = ({ b_seq }) => {
  const { board, setBoard, isModal } = useBoardContext();

  const fetchBoard = async (b_seq) => {
    const res = await fetch(`http://localhost:8080/board/${b_seq}`);
    const jsonRes = await res.json();
    setBoard(jsonRes);
  };

  useEffect(fetchBoard, [isModal]);

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
    </div>
  );
};
export default Detail;
