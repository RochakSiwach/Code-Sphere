import React from 'react'
import Navbar from './components/navbar'
import Login from './auth/login'
import LandingPage from './components/LandingPage'
import SignUp from './auth/SignUp'
import Documentation from './components/Documentation'

const App = () => {
  return (
    <div>

      <Navbar></Navbar>
      <Login></Login>
      {/* <LandingPage></LandingPage> */}
      {/* <SignUp></SignUp> */}
      {/* <Documentation></Documentation> */}
      

    </div>

  )
}

export default App