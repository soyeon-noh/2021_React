import React from "react";
import "../css/LoginForm.css";

const LoginForm = () => {
  return (
    <div className="login_form">
      <input type="text" placeholder="아이디를 입력해주세요" />
      <input type="password" placeholder="비밀번호를 입력해주세요" />
      <button>로그인</button>
    </div>
  );
};

export default LoginForm;
