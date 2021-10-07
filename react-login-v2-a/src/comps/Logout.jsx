import React, { useEffect, useCallback } from "react";
import { useHistory } from "react-router";
import { useUserContext } from "../context/UserContextProvider";
import { fetchLogout } from "../modules/fetchModule";

const Logout = () => {
  const history = useHistory();
  const { setUser } = useUserContext();

  // 그러나 user state 정보가 정말 로그인한 정상 사용자인지 알 수 없음
  const fetchCb = useCallback(async () => {
    await fetchLogout();
    await setUser([]);
    history.replace("/");
  }, [setUser]);

  // 이 페이지가 열리려고 시도되면 자동으로 실행되도록
  useEffect(fetchCb, [fetchCb]);
  return <div></div>;
};

export default Logout;
