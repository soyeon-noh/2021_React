import React from "react";
import { useHistory } from "react-router-dom";

const BBsMain = () => {
  const router = useHistory();

  return (
    <div className="board">
      <table className="board">
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
        <tr
          data-id="001"
          onClick={(e) => {
            const id = e.target.closest("TR").dataset.id;
            alert(id);
            router.push(`/detail/${id}`);
          }}
        >
          <td>2021-09-00</td>
          <td>09:47:20</td>
          <td>노소연</td>
          <td>게시판 연습</td>
        </tr>
      </table>
    </div>
  );
};

export default BBsMain;
