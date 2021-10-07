import React, { useEffect, useCallback } from "react";
import { useUserContext } from "../context/UserContextProvider";

const BBs = () => {
  const { user } = useUserContext();

  // 유저정보가 있으면 자유게시판 정보를 보여준다
  return (
    <div>
      <h1>자유게시판</h1>
      <h3>USERID : {user.userid}</h3>
    </div>
  );
};

export default BBs;
