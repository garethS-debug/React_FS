// // import { useState } from 'react'
// import './NavBar.css' 

import './NavBar.modules.css';
import { getImagegUrl } from '../utils.js';



export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={getImagegUrl('Logo/logo_500px.svg')} alt="Logo" />
      </div>
      <a href="/">Portfolio</a>
      <div>
        <ul>
          <li> <a href="#about">About</a></li>
          <li> <a href="#experience">Experience</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

    
    
