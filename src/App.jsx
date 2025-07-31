import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/blog"       element={<Blog />} />
        </Routes>
      </main>
    </>
  )
}