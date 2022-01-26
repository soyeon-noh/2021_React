import React from "react";
import { NavLink } from "react-router-dom";
import "../css/mainNav.css";

function MainNav() {
  return (
    <div className="main_nav">
      <ul className="main_nav">
        <li>
          <NavLink to="/" exact activeClassName="active_nav">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/address" activeClassName="active_nav">
            Address Book
          </NavLink>
        </li>
        <li>
          <NavLink to="/guestBook" activeClassName="active_nav">
            Guest Book
          </NavLink>
        </li>

        <li></li>
      </ul>
    </div>
  );
}

export default MainNav;
