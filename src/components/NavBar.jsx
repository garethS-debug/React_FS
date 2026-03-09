// // import { useState } from 'react'
// import './NavBar.css' 
import { motion } from "motion/react"
import './NavBar.modules.css';
import logo from '../../assets/Logo/logo_500px.svg';
import EnterAnimation from './logo'



export const NavBar = ({ selectedPage, onSetPage }) => {
  const pages = [
    { name: 'Home', key: 'home' },
    { name: 'About', key: 'about' },
    { name: 'Contact', key: 'contact' },
  ];

  return (
    <nav className="navbar">
      <EnterAnimation />
      <div>
        <h1 style={{ margin: 0, fontSize: 20 }}></h1>
      </div>

      <div>
        <ul style={{ padding: 0, margin: 0 }}>
          {pages.map(page => (
            <motion.li
              key={page.key}
              className={page.key === selectedPage ? 'selected' : ''}
              onClick={() => onSetPage(page.key)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ listStyle: 'none', display: 'inline', margin: '0 12px', cursor: 'pointer' }}
            >
              {page.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar
    


