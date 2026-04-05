import React from 'react'
import './login.css'
import Logo from '../assets/CodeSphere.png'
import login_Logo from '../assets/Login.png'

const Login = () => {
  return (
    <div className='login'>

        <div className='imgBlock'>
            {/* <h1>Code Sphere</h1> */}
            <img src={login_Logo} alt="" />
            {/* <img src={Logo} alt="CodeSphere logo" /> */}
        </div>

        <div className='loginBlock'>

        <h1>Login to Code Sphere</h1>

            <form action="/login" method="post">
            
            <label htmlFor="email">Username or email address</label> 
            <input 
                type="email" 
                placeholder='Enter your email here...'
                />
                <br />

            <label htmlFor="password">Password</label> 
            <input 
                type="text" 

                /> 

            <button type="submit">Sign In</button>  

            <hr />

            New to Code Sphere ?<a href="/signUp">Sign Up</a>

            </form>
            


        </div>
    </div>
  )
}

export default Login