import React from "react";
import { useTodoContext } from "../context/AppContextProvider";
import "../css/TodoList.css";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todoList } = useTodoContext();
  const list_view = todoList.map((item) => {
    return <TodoItem todo={item} key={item.t_id} />;
  });
  return <div>{list_view}</div>;
}

export default TodoList;
