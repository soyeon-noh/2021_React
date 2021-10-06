import React from "react";
import LoginForm from "./LoginForm";
import MainNav from "./MainNav";
import JoinForm from "./JoinForm";
import { Route } from "react-router";
import Notice from "./Notice";
import BBs from "./BBs";
import { useUserContext } from "../context/UserContextProvider";

const MainComp = () => {
  const { user, setUser } = useUserContext();

  const navList = [
    { id: 0, title: "Home", link: "/" },
    { id: 1, title: "공지사항", link: "/notice" },
    { id: 2, title: "자유게시판", link: "bbs" },
    user?.userid
      ? { id: 3, title: "로그아웃", link: "logout", align: "true" }
      : { id: 3, title: "로그인", link: "login", align: "true" },
    user?.userid
      ? { id: 4, title: "마이페이지", link: "mypage" }
      : { id: 4, title: "회원가입", link: "join" },
  ];
  return (
    <MainNav navList={navList}>
      <Route path="/" exact>
        <div>홈화면</div>
      </Route>
      <Route path="/notice" exact>
        <Notice />
      </Route>
      <Route path="/bbs" exact>
        <BBs />
      </Route>
      {/* <Route path="/login" component={LoginForm} /> */}
      <Route path="/login" exact>
        <LoginForm />
      </Route>
      <Route path="/join" exact>
        <JoinForm />
      </Route>
    </MainNav>
  );
};

export default MainComp;
