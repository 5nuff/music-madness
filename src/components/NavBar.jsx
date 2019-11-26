import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
      <ul className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/young">Neil Young</Link>
        </li>
        <li>
          <Link to="/kraftwerk">Kraftwerk</Link>
        </li>
        <li>
          <Link to="/heat">This Heat</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
