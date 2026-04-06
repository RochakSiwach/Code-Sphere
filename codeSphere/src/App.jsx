import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Documentation from './components/Documentation'
import Login from './auth/Login'
import SignUp from './auth/SignUp'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>

      <Routes>
        {/* navbar main route */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path='/developer'  />
        <Route path='/interviwer' />
        <Route path='code-editor' />
        {/* auth route */}
        <Route path='/login' element={<Login></Login>}/>
        <Route path='signUp' element={<SignUp/>} />
      </Routes>
    </div>
  )
}

export default App