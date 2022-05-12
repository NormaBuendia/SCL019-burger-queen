import React from 'react'
import logo from "../img/Logotipo1.png";
import { Link } from 'react-router-dom';
import './header.css'

function Header() {
  return (
<>
<nav className='nav-toolbar'>
    <div className="head-mesero">
        <Link to="/" ><img className="logo-welcome" src={logo} alt="logotipo" /></Link>
        <h1 className='text-white'>BURGER QUEEN</h1>
    </div>

</nav>
</>    
  )
}

export default Header