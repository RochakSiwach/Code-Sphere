import React from 'react'
import './login.css'
import login_Logo from '../assets/Login.png'

const Login = () => {
  return (
    <div className='login'>
      <div className='imgBlock'>
        <img src={login_Logo} alt="Login visual" />
      </div>

      <div className='loginBlock'>
        <h1>Login to Code Sphere</h1>

        <form action="/login" method="post">
          <label htmlFor="email">Username or email address</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email here..."
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
          />

          <button type="submit">Sign In</button>

          <hr />

          <p className="signupText">
            New to Code Sphere? <a href="/signUp">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login