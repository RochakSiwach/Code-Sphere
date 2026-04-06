import React from "react";
import Logo from '../assets/CodeSphere.png'
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navHeading">
          <a href="/"><img src={Logo} alt="CodeSphere logo" /></a>        
        </div>

        <div className="navMainLink">
          <a href="/features">Features</a>
          <a href="/documentation">Docs</a>
          <a href="/developer">Developers</a>
          <a href="/interviewer">Interviewers</a>
          <a href="/code-editor">Code Editor</a>
        </div>

        <div className="auth">
          <a href="/login">Sign In</a>
          <a href="/signup" className="primary">Get Started</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
