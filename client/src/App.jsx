import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router> 
        <Navbar/>
         <Routes>
         <Route path="/" element={<Home />} />
         </Routes>
          <Footer/>
      </Router>
    </div>
  )
}

export default App