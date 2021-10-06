import React, { useRef, useState } from "react";
import { useUserContext } from "../context/UserContextProvider";
import "../css/JoinForm.css";

const JoinForm = () => {
  const { user, setUser } = useUserContext();

  const idID = useRef();
  const pwID = useRef();
  const pwcheckID = useRef();
  const emailID = useRef();

  const onChangeAccount = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    // setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmitAccount = async () => {
    // 문자열 값이 없는 경우 : falue, ""
    // 1. if (user.userid === "") {
    // 2. if(!user.userid){

    // ? : 값이 없는 경우의 오류를 잡아줌
    if (!user?.userid) {
      alert("아이디는 필수항목입니다");
      idID.current.focus();
      return;
    } else if (!user?.password) {
      alert("비밀번호는 필수항목입니다");
      pwID.current.focus();
      return;
    } else if (!user?.passwordcheck) {
      alert("비밀번호를 한번더 입력하세요");
      pwcheckID.current.focus();
      return;
    } else if (user.password !== user.passwordcheck) {
      alert("비밀번호가 일치하지 않습니다");
      pwcheckID.current.focus();
      return;
    } else if (!user?.email) {
      alert("이메일은 필수항목입니다");
      emailID.current.focus();
      return;
    }

    // 서버에 보낼 데이터를 json type으로 미리준비
    const joinData = {
      userid: user.userid,
      password: user.password,
      email: user.email,
    };

    const response = await fetch("http://localhost:8080/users/join", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(joinData),
    });

    if (response.ok) {
      const json = await response.json();

      console.table(JSON.stringify(json));
    }
  };

  return (
    <div className="join_form">
      <input
        name="userid"
        ref={idID}
        value={user.userid} // state를 value에 넣으면 ReadOnly가 되는데
        type="text"
        placeholder="아이디를 입력해주세요"
        onChange={onChangeAccount} // onChange로 state변경 코드를 넣어주면 정상작동
      />
      <input
        name="password"
        ref={pwID}
        value={user.password}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="passwordcheck"
        ref={pwcheckID}
        value={user.passwordcheck}
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        onChange={onChangeAccount}
      />
      <input
        name="email"
        ref={emailID}
        value={user.email}
        type="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChangeAccount}
      />
      <button onClick={onSubmitAccount}>회원가입</button>
    </div>
  );
};

export default JoinForm;
