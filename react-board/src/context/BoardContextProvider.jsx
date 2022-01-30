import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useBoardContext = () => {
  return useContext(AppContext);
};

// app.js 에 설정
const BoardContextProvider = ({ children }) => {
  /** MODAL */
  const [isModal, setIsModal] = useState(false);

  const switchModal = () => {
    isModal ? setIsModal(false) : setIsModal(true);
  };

  /** BOARD */
  const [board, setBoard] = useState({
    b_title: "",
    b_name: "",
    b_date: "",
    b_content: "",
  });
  const [boardList, setBoardList] = useState([]);

  /** WRITE */
  const onChange = (e) => {
    const { value, name } = e.target;
    setBoard({ ...board, [name]: value });
    console.log(board);
  };

  const fetch_option = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(board),
  };

  const saveBoard = async () => {
    const res = await fetch(`http://localhost:8080/`, fetch_option);
    // res.json(); 으로했을때 Uncaught (in promise) SyntaxError: Unexpected token O in JSON at position 0 문제발생
    const result = await res.text();
    if (result == "OK") {
      alert("작성이 완료되었습니다.");
      setIsModal(false);
    } else {
      alert("다시 작성해주세요.");
    }
  };

  const [checkList, setCheckList] = useState([]);

  const onChangeHandler = (e) => {
    const seq = e.target.id;
    const checked = e.target.checked;
    // console.log(seq, checked);
    if (checked) {
      setCheckList([...checkList, seq]);
      console.log(checkList);
    } else {
      setCheckList(checkList.filter((check) => check !== seq));
      console.log(checkList);
    }
  };

  const props = {
    boardList,
    setBoardList,
    isModal,
    setIsModal,
    switchModal,
    onChange,
    saveBoard,
    checkList,
    onChangeHandler,
  };

  // 위에서 선언한 AppContext 를 사용해서 Provider
  return <AppContext.Provider value={props}>{children}</AppContext.Provider>;
};

export default BoardContextProvider;
