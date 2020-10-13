import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
function Header() {
  const activeStyle = { color: "blue" };
  return (
    <div style={{ paddingLeft: "150px", paddingRight: "20px" }}>
      <nav style={{ backgroundColor: "#FFCCCC", height: "85px" }}>
        <img src={logo} style={{ width: "100px", height: "80px" }} />
        <NavLink
          activeStyle={activeStyle}
          style={{ marginLeft: "800px" }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          style={{ marginLeft: "80px" }}
          to="/novels"
        >
          Novels
        </NavLink>
        <NavLink
          activeStyle={activeStyle}
          style={{ marginLeft: "80px" }}
          to="/about"
        >
          About
        </NavLink>
      </nav>
    </div>
  );
}
export default Header;
