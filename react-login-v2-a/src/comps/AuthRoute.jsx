/**
 * 로그인을 수행해야 열어볼 수 있는 페이지들을
 * 통합관리할 컴포넌트
 *
 * 로그인을 수행해야 접근할 수 있는 Route들을 모아서 관리
 */

import { useCallback, useEffect } from "react";
import { useHistory } from "react-router";
import { fetchUser } from "../modules/fetchModule";
import { useUserContext } from "../context/UserContextProvider";

const AuthRoute = ({ children }) => {
  const { setUser } = useUserContext();
  const history = useHistory();

  // 그러나 user state 정보가 정말 로그인한 정상 사용자인지 알 수 없음
  const fetchCb = useCallback(async () => {
    const resultUser = await fetchUser();
    if (resultUser?.userid) {
      await setUser(resultUser);
    } else {
      history.replace("/login");
    }
  }, [setUser]);

  // 이 페이지가 열리려고 시도되면 자동으로 실행되도록
  useEffect(fetchCb, [fetchCb]);

  return <>{children}</>;
};

// 컴포넌트이니 모듈이 필요하다
export default AuthRoute;
