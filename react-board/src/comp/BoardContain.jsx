import React from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import BoardButton from "./BoardButton";
import BoardList from "./BoardList";

const BoardContain = () => {
  const { switchModal, checkList } = useBoardContext();

  const writeBoard = () => {
    switchModal("write");
  };
  const updateBoard = async (b_seq) => {
    const res = await fetch(`http://localhost:8080/board/${b_seq}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkList),
    });
    switchModal();
  };
  const deleteBoard = async () => {
    const res = await fetch("http://localhost:8080/board", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(checkList),
    });
    const result = await res.text();

    if (result == "OK") {
      alert("삭제완료");
    } else {
      alert("오류 발생");
    }
  };

  return (
    <div>
      <table className="board_table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>제목</th>
            <th>이름</th>
            <th>작성일자</th>
            <th>내용</th>
          </tr>
        </thead>

        <BoardList />
      </table>

      <BoardButton
        btn_write={writeBoard}
        btn_update={updateBoard}
        btn_delete={deleteBoard}
      />
    </div>
  );
};

export default BoardContain;
