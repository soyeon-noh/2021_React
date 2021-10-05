import React, { useRef, useState } from "react";
import "../css/JoinForm.css";

const JoinForm = () => {
  const [join, setJoin] = useState({
    userid: "",
    password: "",
    passwordcheck: "",
    email: "",
  });

  const idID = useRef();
  const pwID = useRef();
  const pwcheckID = useRef();
  const emailID = useRef();

  const onChange = (e) => {
    setJoin({ ...join, [e.target.name]: e.target.value });
  };

  const onJoin = () => {
    if (join.userid === "") {
      alert("아이디를 입력하세요");
      idID.current.focus();
      return;
    } else if (join.password === "") {
      alert("비밀번호를 입력하세요");
      pwID.current.focus();
      return;
    } else if (join.passwordcheck === "") {
      alert("비밀번호를 한번더 입력하세요");
      pwcheckID.current.focus();
      return;
    } else if (join.password !== join.passwordcheck) {
      alert("비밀번호가 일치하지 않습니다");
      pwcheckID.current.focus();
      return;
    } else if (join.email === "") {
      alert("이메일을 입력하세요");
      emailID.current.focus();
      return;
    }

    alert("회원가입 성공");
  };
  return (
    <div className="join_form">
      <input
        name="userid"
        ref={idID}
        type="text"
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
      <input
        name="passwordcheck"
        ref={pwcheckID}
        type="password"
        placeholder="비밀번호를 한 번 더 입력해주세요"
        onChange={onChange}
      />
      <input
        name="email"
        ref={emailID}
        type="email"
        placeholder="이메일을 입력해주세요"
        onChange={onChange}
      />
      <button onClick={onJoin}>회원가입</button>
    </div>
  );
};

export default JoinForm;
