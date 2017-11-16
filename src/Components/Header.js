import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/AddNote'>Add Note</Link></li>
      </ul>
    </div>
  </header>
)

export default Header