import { useEffect, useState } from "react";

const BoardList = () => {
  const [boardList, setBoardList] = useState([
    // {
    //   b_title: "임시데이터",
    //   b_name: "임시데이터",
    //   b_date: "임시데이터",
    //   b_content: "임시데이터",
    // },
  ]);

  const fetchList = async () => {
    const result = await fetch("http://localhost:8080/");
    const res = await result.json();
    return res;
  };

  const settingList = async () => {
    const result = await fetchList();
    console.log("result", result);
    setBoardList(result);
    // result.map((data) => {
    //   console.log("data", data);
    //   setBoardList([...boardList, data]);
    // });
    // console.log("boardList", boardList);
  };

  useEffect(settingList, []);

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
