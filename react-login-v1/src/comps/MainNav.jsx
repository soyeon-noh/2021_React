import React from "react";
import "../css/MainNav.css";
import { NavLink } from "react-router-dom";

const MainNav = ({ nav }) => {
  const navList = nav.map((nav) => {
    return (
      <NavLink to={nav.link} key={nav.link}>
        {nav.text}
      </NavLink>
    );
  });

  return <ul className="main_nav">{navList}</ul>;
};

export default MainNav;
