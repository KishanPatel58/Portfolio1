import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Work from '../src/components/Work'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import CharacterCursors from './components/ui/CharacterCursor'

const App = () => {
  return (
    <>
      {/* All Routes */}
      <CharacterCursors/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Work />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App