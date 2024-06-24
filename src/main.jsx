import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import BlogPage from './components/Blog.jsx'
import Example from './components/Aboutfor.jsx'
import Service from './components/Services.jsx'
import PortSection from './page/Base.jsx'
import Vacansies from './components/Career.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<Example />} />
        <Route path="/service" element={<Service />} />
        <Route path="/portfolio" element={<PortSection />} />
        <Route path="/career" element={<Vacansies/>} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    
    </BrowserRouter>
  </React.StrictMode>,
)
