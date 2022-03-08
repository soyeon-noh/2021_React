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
    // const res = await fetch("http://localhost:8080/board/delete", {

    for (let check in checkList) {
      let seq = checkList[check];
      const res = await fetch(`http://localhost:8080/board/${seq}`, {
        // method: "POST",
        method: "DELETE",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        // body: JSON.stringify(checkList),
      });
      const result = await res.text();
      if (!result) {
        alert("잘못된 요청임");
        return;
      }
    }
    alert("삭제완료");

    // console.log("결과아아아아", result);

    // if (result == "OK") {
    //   alert("삭제완료");
    // } else {
    //   alert("오류 발생");
    // }
  };

  return (
    <div className="BoardContain">
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
