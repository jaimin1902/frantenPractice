import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";



const Navbar = () => {
  return (
   <>
   <header className='jaimin text-white '>
    <div className='container bg-blue-500 w-full h-1'>
        <div className="logo-brand">
            Prajapati Jaimin
        </div>

        <nav className=''>
            <ul>
            <li><NavLink to="/">password</NavLink></li>
                <li><NavLink to="/form">form</NavLink></li>
                <li><NavLink to="/useeffect1">higt-width</NavLink></li>
                <li><NavLink to="/unjha">unjha</NavLink></li>
               
            </ul>
        </nav>
    </div>
   </header>
   </>
  )
}

export default Navbar;