import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <nav className='header' style={{display:'flex'}}>
       <div>
         <h2>Logo</h2>
       </div>
       <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        
       </div>
       <div>
         <button>Login</button>
       </div>
    </nav>
  )
}

export default Header
