import React, { useState } from "react";
import "../css/LoginForm.css";

const LoginForm = () => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    // json 서버에서 모든 데이터를 가져와서
    const res = await fetch("http://localhost:8080/users");
    if (res.ok) {
      // 유저정보를 뽑아와서
      const users = await res.json();

      // 유저정보와 userid가 일치하는지 확인하고
      const user = users.find((item) => item.userid === account.userid);

      // 로그인 실패
      if (!user) {
        alert("아이디가 없음");
      }
      if (user.password !== account.password) {
        alert("비번 오류");
        return;
      }
      // 로그인 성공
      alert("로그인 성공");
    }
  };

  return (
    <div className="login_form">
      <input
        name="userid"
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      />
      <input
        name="password"
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
