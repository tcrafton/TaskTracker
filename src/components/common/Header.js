import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const activeStyle = { color: "#F15B2A" };

  return (
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/tasks" activeStyle={activeStyle} exact>
        Tasks
      </NavLink>
      {" | "}
      <NavLink to="/info" activeStyle={activeStyle}>
        Info
      </NavLink>
    </nav>
  );
};

export default Header;
