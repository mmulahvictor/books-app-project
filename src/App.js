import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Book from './components/Book'
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Book /> } />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  )
}

export default App