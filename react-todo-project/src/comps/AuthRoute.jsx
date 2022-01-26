import { useUserContext } from "../context";
import { useHistory } from "react-router-dom";
import { useEffect, useCallback } from "react";
import { fetchUser } from "../modules/fetchModules";

const AuthRoute = ({ children }) => {
  const { user, setUser } = useUserContext();
  const history = useHistory();

  const fetchCallback = useCallback(async () => {
    const resultUser = await fetchUser();

    if (!resultUser?.userid) {
      history.replace("/login");
    }
    await setUser(resultUser);
    console.log("user가 setting 된 것을 확인", user);

    // if (!user?.userid) {
    //   // state값이 없으면
    //   history.replace("/login"); // /login 으로 이동
    // }
  }, []);

  useEffect(fetchCallback, [fetchCallback]);

  return <>{children}</>;
};

export default AuthRoute;
