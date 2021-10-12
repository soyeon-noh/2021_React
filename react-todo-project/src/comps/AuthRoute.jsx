import { useUserContext } from "../context";
import { useHistory } from "react-router-dom";
import { useEffect, useCallback } from "react";

const AuthRoute = ({ children }) => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const fetchCallback = useCallback(() => {
    if (!user?.userid) {
      // state값이 없으면
      history.replace("/login"); // /login 으로 이동
    }
  });

  useEffect(fetchCallback, [fetchCallback]);

  return <>{children}</>;
};

export default AuthRoute;
