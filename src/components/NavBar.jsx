// // import { useState } from 'react'
// import './NavBar.css' 
import { motion } from "motion/react"
import './NavBar.modules.css';
import logo from '../../assets/Logo/logo_500px.svg';
import EnterAnimation from './logo'

export const NavBar = ({ navLinks }) => {
  return (
    <nav className="navbar">
      {/* <div className="logo">
        <img src={logo} alt="Logo" />
      </div> */}

      <EnterAnimation />
      <div>
        <h1 style={{ margin: 0, fontSize: 20 }}></h1>
      </div>

      <div>
        <ul>
          {navLinks}
        </ul>
      </div>
    </nav>
  );
}

    
    
