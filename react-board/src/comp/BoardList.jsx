import { useCallback, useEffect, useState } from "react";
import { useBoardContext } from "../context/BoardContextProvider";

const BoardList = () => {
  const { boardList, setBoardList, isModal } = useBoardContext();

  const fetchList = async () => {
    const result = await fetch("http://localhost:8080/");
    const res = await result.json();
    return res;
  };

  const settingList = async () => {
    const result = await fetchList();
    console.log("result", result);
    setBoardList(result);
  };

  useEffect(settingList, [isModal]);

  const list = boardList.map((data) => {
    return (
      <tr>
        <td>
          <input type="checkbox" />
        </td>
        <td>{data.b_title}</td>
        <td>{data.b_name}</td>
        <td>{data.b_date}</td>
        <td>{data.b_content}</td>
      </tr>
    );
  });

  return <tbody>{list}</tbody>;
};

export default BoardList;
