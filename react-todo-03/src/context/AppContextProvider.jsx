import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

export const useTodoContext = () => {
  return useContext(TodoContext);
};

function AppContextProvider({ children }) {
  const [todo, setTodo] = useState({
    t_id: 0,
    t_text: "",
    t_isComplete: false,
  });

  const [todoList, setTodoList] = useState([]);

  const onChange = (e) => {};

  const onClick = (e) => {};

  const propsData = {
    todo,
    setTodo,
    todoList,
    setTodoList,
    onChange,
    onClick,
  };

  return (
    <TodoContext.Provider value={propsData}>{children}</TodoContext.Provider>
  );
}

export default AppContextProvider;
