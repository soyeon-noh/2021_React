import React from "react";
import { NavLink } from "react-router-dom";

const MainNav = () => {
  // 컴포넌트 코드에 inline style 생성하기
  const activeNavStyle = {
    backgroundColor: "green",
  };
  return (
    <ul className="main_menu">
      <li>
        <NavLink to="/" activeStyle={activeNavStyle} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeStyle={activeNavStyle}>
          나의 소개
        </NavLink>
      </li>
      <li>
        <NavLink to="/bbs" activeStyle={activeNavStyle}>
          자유게시판
        </NavLink>
      </li>
      <li>
        <input placeholder="검색어를 입력하세요" />
      </li>
    </ul>
  );
};

export default MainNav;
