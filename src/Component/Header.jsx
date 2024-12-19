import React from 'react'
import '../App.css'
function Header() {
  return (
    <nav className='header'>
       <div>
         <h2>Logo</h2>
       </div>
       <div>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Careers</a>
       </div>
       <div>
         <button>Login</button>
       </div>
    </nav>
  )
}

export default Header
