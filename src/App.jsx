import { useState } from 'react'
import Layout from './components/layout/Layout'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Approach from './components/home/Approach'
import './styles/index.css'

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<div className="p-8">Journey Page</div>} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/work-together" element={<div className="p-8">Work Together Page</div>} />
          <Route path="/contact" element={<div className="p-8">Contact Page</div>} />
          <Route path="/privacy" element={<div className="p-8">Privacy Policy Page</div>} />
          <Route path="/terms" element={<div className="p-8">Terms of Service Page</div>} />
          <Route path="*" element={<div className="p-8">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
