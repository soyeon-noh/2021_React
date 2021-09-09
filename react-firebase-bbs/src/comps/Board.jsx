import React from "react";

const Board = () => {
  return (
    <div className="board">
      <table className="board">
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
        <tr>
          <td>2021-09-00</td>
          <td>09:47:20</td>
          <td>노소연</td>
          <td>게시판 연습</td>
        </tr>
      </table>
    </div>
  );
};

export default Board;
