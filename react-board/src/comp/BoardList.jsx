import { useCallback, useEffect, useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";

const BoardList = () => {
  const {
    board,
    boardList,
    setBoardList,
    isModal,
    checkList,
    onChangeHandler,
  } = useBoardContext();

  const fetchList = async () => {
    const res = await fetch("http://localhost:8080/");
    const result = await res.json();
    return result;
  };

  const settingList = async () => {
    const result = await fetchList();
    console.log("result", result);
    console.log("BoardList board : ", board);
    setBoardList(result);
  };

  useEffect(settingList, [isModal]);

  const onClickHandler = (e) => {
    console.log("e.target.cl", e.target);
    const b_seq = e.target.id;
    console.log(b_seq);
  };

  const list = boardList.map((data) => {
    return (
      <tr id={data.b_seq}>
        <td>
          <input
            type="checkbox"
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
