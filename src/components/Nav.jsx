import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
      </ul>
    </nav>
  )
}
