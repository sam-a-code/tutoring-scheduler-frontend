import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (<div className="navbar">
    <NavLink to="/" exact>HOME </NavLink>
    <NavLink to="/tutors" exact>TUTORS </NavLink>
    <NavLink to="/appointments" exact>APPOINTMENTS </NavLink>
    <NavLink to="/students" exact>STUDENTS </NavLink>
    <NavLink to="/newappointment" exact>NEW APPOINTMENT </NavLink>
  </div>);
}

export default NavBar;
