import { useCallback, useEffect, useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";

const BoardList = () => {
  const {
    board,
    setBoard,
    boardList,
    setBoardList,
    isModal,
    checkList,
    onChangeHandler,
    switchModal,
  } = useBoardContext();

  const fetchList = async () => {
    const res = await fetch("http://localhost:8080/board");
    const result = await res.json();
    return result;
  };
  const fetchDetail = async (seq) => {
    const res = await fetch(`http://localhost:8080/board/${seq}`);
    const result = await res.json();

    return result;
  };

  const settingList = async () => {
    const result = await fetchList();
    // console.log("result", result);
    // console.log("BoardList board : ", board);
    setBoardList(result);
  };

  useEffect(settingList, [isModal]);

  const onClickHandler = async (e) => {
    // console.log("e.target", e.target);
    const target = e.target;

    if (target.className !== "checkbox") {
      const tr = target.closest("tr");
      const seq = tr.id;
      // console.log(seq);
      const detail = await fetchDetail(seq);
      setBoard(detail);
      switchModal("detail");
    }
  };

  const list = boardList.map((data) => {
    return (
      <tr id={data.b_seq}>
        <td className="checkbox">
          <input
            type="checkbox"
            className="checkbox"
            id={data.b_seq}
            onChange={onChangeHandler}
            checked={checkList.includes(`${data.b_seq}`) ? true : false}
          />
        </td>
        <td>{data.b_title}</td>
        <td>{data.b_name}</td>
        <td>{data.b_date}</td>
        <td>{data.b_content}</td>
      </tr>
    );
  });

  return <tbody onClick={onClickHandler}>{list}</tbody>;
};

export default BoardList;
