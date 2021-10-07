import React, { useState } from "react";
import "../css/LoginForm.css";
import { useTodoContext } from "../context/AppContextProvider";

const LoginForm = () => {
  const { setUser } = useTodoContext();

  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  return (
    <div className="login_form">
      <input name="userid" placeholder="아이디" type="text" />
      <input name="password" placeholder="비밀번호" type="password" />
      <button>로그인</button>
    </div>
  );
};

export default LoginForm;
