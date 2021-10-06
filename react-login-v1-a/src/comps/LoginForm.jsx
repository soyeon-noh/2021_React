import React, { useRef, useState } from "react";
import "../css/LoginForm.css";

const LoginForm = () => {
  const [account, setAccount] = useState({
    userid: "",
    password: "",
  });

  const idID = useRef();
  const pwID = useRef();

  const onChange = (e) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const onLogin = async () => {
    if (account.userid === "") {
      alert("아이디를 입력하세요");
      idID.current.focus();
      return;
    } else if (account.password === "") {
      alert("비밀번호를 입력하세요");
      pwID.current.focus();
      return;
    }

    // json 서버에서 모든 데이터를 가져와서
    const res = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //   credentials: "same-origin",
      body: JSON.stringify({
        userid: account.userid,
        password: account.password,
      }),
    });

    // 서버로부터 정상적인 응답이 오면
    // 실제 서버가 멈춰있는 상태일 경우 res 자체가 undefinded 또는 null 값이다
    // if(res) {} 연산을 하면 res가 정상인지 확인할 수 있다.
    // res가 정상이 아닐때는 res.ok 에서 오류가 발생한다.
    // ES6+ 버전에서 safe null 검사를 수행하는 코드가 있다.
    // res가 정상(null, nudefineded가 아니면 .ok 속성을 검사하라)
    // 따라서 아래 if(res.ok){}가 null로 인한 오류를 방지하는 코드이다.
    if (res?.ok) {
      // 유저정보를 뽑아와서
      const user = await res.json();
      // 유저정보와 userid가 일치하는지 확인하고
      //   const user = users.find((item) => item.userid === account.userid);

      //   console.log("user", user);

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
        ref={idID}
        placeholder="아이디를 입력해주세요"
        onChange={onChange}
      />
      <input
        name="password"
        ref={pwID}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChange}
      />
      <button onClick={onLogin}>로그인</button>
    </div>
  );
};

export default LoginForm;
