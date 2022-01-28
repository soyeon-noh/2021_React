import React from "react";
import { useBoardContext } from "../context/BoardContextProvider";
import BoardButton from "./BoardButton";
import BoardList from "./BoardList";

const BoardContain = () => {
  const { switchModal } = useBoardContext();

  const btn_write = () => {
    switchModal();
  };
  const btn_update = () => {
    switchModal();
  };
  const btn_delete = () => {
    switchModal();
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
