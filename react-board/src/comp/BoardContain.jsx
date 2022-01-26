import React from "react";
import BoardList from "./BoardList";

const BoardContain = () => {
  return (
    <div>
      <table>
        <thead>
          <th></th>
          <th>제목</th>
          <th>이름</th>
          <th>작성일자</th>
          <th>내용</th>
        </thead>
        <BoardList />
      </table>
    </div>
  );
};

export default BoardContain;
