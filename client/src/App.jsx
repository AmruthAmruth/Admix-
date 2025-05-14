import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile';
import AuthPage from './components/AuthPage';
import { PublicRoute,PrivateRoute } from './middleware/PrivateRoute.js';
const App = () => {
  return (
     <div>
      <Router>
        <Navbar />
        <hr />
        <Routes>
          <Route 
            path="/home" 
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <PrivateRoute>
                <UserProfile />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/" 
            element={
              <PublicRoute>
                <AuthPage />
              </PublicRoute>
            } 
          />
        </Routes>
        <hr />
        <Footer />
      </Router>
    </div>
  )
}

export default App