import React from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import BoardButton from "./BoardButton";
import BoardList from "./BoardList";

const BoardContain = () => {
  const { switchModal, checkList } = useBoardContext();

  const btn_write = () => {
    switchModal();
  };
  const btn_update = () => {
    switchModal();
  };
  const btn_delete = async () => {
    const res = await fetch("http://localhost:8080/board", {
      method: "PUT",
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

      <BoardButton
        btn_write={btn_write}
        btn_update={btn_update}
        btn_delete={btn_delete}
      />
    </div>
  );
};

export default BoardContain;
