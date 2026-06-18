import React from 'react'

function Nav() {
  return (
    <div>
        <nav className = "navbar">
        <h2 className = "logo">Mysite</h2>
        <ul className = "nav-links">
            <li> <navlink to="/">Home</navlink> </li>
            <li> <navlink to="/about">About</navlink> </li>
            <li> <navlink to="/contact">Contact</navlink> </li>
        </ul>
        </nav>
    </div>
  )
}

export default Nav