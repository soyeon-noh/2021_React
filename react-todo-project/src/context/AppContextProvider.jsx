import React, { createContext, useContext, useRef, useState } from "react";
// 컨텍스트 생성
const AppContext = createContext();
export const useTodoContext = () => {
  return useContext(AppContext);
};

function AppContextProvider({ children }) {
  // TODO 정보 1개를 보관할 state
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_comp: false,
  });

  const [todoList, setTodoList] = useState([]);

  // Refferrence 변수 선언하기
  const nextId = useRef(0); // 정수형변수
  const inputId = useRef(); // tag를 selete 하는 용도로 사용가능

  const onChange = (e) => {
    const t_text = e.target.value;
    setTodo({ ...todo, t_text, t_id: nextId.current });
  };

  // 리스트에 추가하기
  const todoInsert = (e) => {
    if (todo.t_text === "") {
      alert("할 일을 입력하세요");
      inputId.current.focus();
      return;
    }
    setTodoList([...todoList, todo]);
    nextId.current++;

    todoClear();
  };

  // 입력창 clear
  const todoClear = () => {
    setTodo({ t_id: nextId.current, t_text: "", t_comp: false });
  };

  // 입력된 todo를 todoList에 추가하기
  const onClick = (e) => todoInsert(e);

  // 입력박스에서 Enter Key가 눌러지면
  const onkeyPress = (e) => {
    // e.keyCode === 13 // Enter키
    if (e.key === "Enter") {
      todoInsert(e);
      // ESC키 (작동안됨;)
    } else if (e.key === "Escape") {
      // } else if (e.keyCode === 27) {
      todoClear();
    }
  };

  const onClickDelete = (e) => {
    if (window.confirm("삭제할까요?")) {
      const t_id = Number(e.target.dataset.todoId);

      const _todoList = todoList.filter((todo) => todo.t_id !== t_id);
      console.table(_todoList);
      setTodoList(_todoList);
      alert("삭제되었습니다!");
    }
  };

  const onCompClick = (e) => {
    const t_id = Number(e.target.dataset.todoId);

    const index = todoList.findIndex((todo) => todo.t_id === t_id);

    const selecteTodo = todoList[index];

    const _todoList = [...todoList];
    _todoList[index] = {
      // index에 해당하는 값만 변화시키는 것
      ...selecteTodo,
      t_comp: !selecteTodo.t_comp,
    };
    setTodoList(_todoList);
  };

  const propsStore = {
    todo,
    todoList,
    onChange,
    onClick,
    onkeyPress,
    inputId,
    onClickDelete,
    onCompClick,
  };

  return (
    <AppContext.Provider value={propsStore}>{children}</AppContext.Provider>
  );
}

export default AppContextProvider;
