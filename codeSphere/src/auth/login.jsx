import React from 'react'

const login = () => {
  return (
    <>

        <div>

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
    </>
  )
}

export default login