import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  const activeNavStyle = {
    backgroundColor: "#2678ff",
  };
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink to="/write" activeStyle={activeNavStyle}>
          글쓰기
        </NavLink>
      </li>
      <li>
        <NavLink to="/login" activeStyle={activeNavStyle}>
          로그인
        </NavLink>
      </li>
      <li>
        <NavLink to="/join" activeStyle={activeNavStyle}>
          회원가입
        </NavLink>
      </li>
    </ul>
  );
};

export default MainNav;
