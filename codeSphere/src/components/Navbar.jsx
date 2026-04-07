import React from "react";
import { NavLink } from 'react-router-dom'
import Logo from '../assets/CodeSphere.png'
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navHeading">
          <NavLink to='/'><img src={Logo} alt="CodeSphere logo" /></NavLink>      
        </div>

        <div className="navMainLink">
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/documentation'>Docs</NavLink>
          <NavLink to='/developer'>Developers</NavLink>
          <NavLink to='/interviewer'>Interviewers</NavLink>
          <NavLink to='/code-editor'>Code Editor</NavLink>
        </div>

        <div className="auth">
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/signup' className="primary">Get Started</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
