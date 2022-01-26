import React from "react";
import { CompButton } from "..";
import { useHistory } from "react-router";
import { useUserContext } from "../../context";
import "../../css/TodoHeader.css";

export const TodoHeader = () => {
  const { user, setUser } = useUserContext();

  const history = useHistory();
  const onLogout = async () => {
    await setUser([]);
    history.replace("/login");
  };

  return (
    <div className="todo_header">
      <div>TODO LIST</div>
      {/* <div>Hello! {user.userid}</div> */}
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};
