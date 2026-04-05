import React from 'react'

const SignUp = () => {
  return (
        <>
        
        <h2>SignUp for Code Sphere</h2>

        <form action="" method="post">

        <label htmlFor="firstName">First Name</label>
        <input 
            type="text" 
            id='firstName' 
            name='firstName'
            placeholder='John'   
        />

        <label htmlFor="lastName">Last Name</label>
        <input 
            type="text" 
            id='lastName' 
            name='lastName'
            placeholder='Siwach'   
        />

        <label htmlFor="email">Email</label>
        <input 
            type="email" 
            id='email' 
            name='email'
            placeholder='Email'   
        />

        <label htmlFor="password">Password</label>
        <input 
            type="password" 
            id='password' 
            name='password'
            placeholder='Enter your password'   
        />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
            type="password" 
            id='confirmPassword' 
            name='confirmPassword'
            placeholder='Confirm your password'   
        />

       <input type="submit" name="submit" id="submit" value='Submit'/>

</form>

        </>
  )
}

export default SignUp