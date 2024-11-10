import { useState } from 'react'
import Layout from './components/layout/Layout'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Approach from './components/home/Approach'
import Journey from './components/home/Journey'
import WorkTogether from './components/home/WorkTogether'
import Contact from './pages/Contact'
import './styles/index.css'

function App() {


  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/work-together" element={<WorkTogether />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<div className="p-8">Privacy Policy Page</div>} />
          <Route path="/terms" element={<div className="p-8">Terms of Service Page</div>} />
          <Route path="*" element={<div className="p-8">404 - Page Not Found</div>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
