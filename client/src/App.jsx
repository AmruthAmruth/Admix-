import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import AuthPage from './components/AuthPage';
const App = () => {
  return (
    <div>
      <Router> 
        <Navbar/>
        <hr />
         <Routes>
         <Route path="/" element={<Home />} />
  
         <Route path="/profile" element={<UserProfile />} />
          
           <Route path="/auth" element={<AuthPage />} />
         
         </Routes>
         <hr />
          <Footer/>
      </Router>
    </div>
  )
}

export default App