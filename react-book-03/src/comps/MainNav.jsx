import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <div>
      <ul className="main_nav">
        <NavLink to="/" exact>
          <li>Home</li>
        </NavLink>
        <NavLink to="/insert">
          <li>Insert</li>
        </NavLink>
        <NavLink to="list">
          <li>List View</li>
        </NavLink>
      </ul>
    </div>
  );
}

export default MainNav;
