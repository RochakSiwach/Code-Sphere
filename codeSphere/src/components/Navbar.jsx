import React from "react";
import './navbar.css';

const navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navHeading">
          <a href="/">Code Sphere</a>
        </div>

        <div className="navMainLink">
          <a href="/features">Features</a>
          <a href="/documentation">Docs</a>
          <a href="/developer">Developers</a>
          <a href="/interviewer">Interviewers</a>
          <a href="/pricing">Pricing</a>
        </div>

        <div className="auth">
          <a href="/login">Sign In</a>
          <a href="/signup" className="primary">Get Started</a>
        </div>
      </nav>
    </>
  );
};

export default navbar;
