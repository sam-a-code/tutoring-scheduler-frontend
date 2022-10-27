import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (<div className="navbar">
    <button className="nav-button">
      <NavLink className="navbar-link" to="/" exact>HOME </NavLink>
    </button>
    <button className="nav-button">
      <NavLink className="navbar-link" to="/tutors" exact>TUTORS </NavLink>
    </button>
    <button className="nav-button">
      <NavLink className="navbar-link" to="/appointments" exact>APPOINTMENTS </NavLink>
    </button>
    <button className="nav-button">
      <NavLink className="navbar-link" to="/students" exact>STUDENTS </NavLink>
    </button>
    <button className="nav-button">
      <NavLink className="navbar-link" to="/newappointment" exact>NEW APPOINTMENT </NavLink>
    </button>
  </div>);
}

export default NavBar;
