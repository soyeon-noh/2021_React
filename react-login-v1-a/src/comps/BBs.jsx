import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";

const BBs = () => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  //서버에서 session정보를 조회해서 데이터가 있으면
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:8080/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "http://localhost:3000",
        },
        credentials: "include",
      });
      const result = await res.json();
      console.log("BBs.jsx result : ", result);
      await setUser(result);
    };
    fetchData();
  }, []);

  // 유저정보가 없으면 로그인 화면으로 이동하라
  if (!user.userid) {
    history.replace("/login");
  }
  // 유저정보가 있으면 자유게시판 정보를 보여준다
  return (
    <div>
      <h1>자유게시판</h1>
    </div>
  );
};

export default BBs;
