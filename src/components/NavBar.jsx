// // import { useState } from 'react'
// import './NavBar.css' 
import { motion } from "motion/react"
import './NavBar.modules.css';
import logo from '../../assets/Logo/logo_500px.svg';
import EnterAnimation from './logo'
import homeIcon from '../../assets/Icons/house.svg'
import aboutIcon from '../../assets/Icons/journal.svg'
import contactIcon from '../../assets/Icons/file-person.svg'



export const NavBar = ({ selectedPage, onSetPage }) => {
  const pages = [
    { name: 'Home', key: 'home', icon: homeIcon },
    { name: 'About', key: 'about', icon: aboutIcon },
    { name: 'Contact', key: 'contact', icon: contactIcon },
  ];

  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="logo"><EnterAnimation /></div>
      </div>

      <div className="nav-right">
        <ul style={{ padding: 0, margin: 0 }}>
          {pages.map(page => (
            <motion.li
              key={page.key}
              className={page.key === selectedPage ? 'selected' : ''}
              onClick={() => { console.log('Nav click:', page.key); onSetPage(page.key); }}
              whileHover={{ scale: 1.06, y: -3 }}
              whileTap={{ scale: 1.35 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ listStyle: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, margin: '0 12px', cursor: 'pointer', background: 'transparent', padding: 0 }}
            >
              <img src={page.icon} alt={`${page.name} icon`} className="nav-icon" />
              <span>{page.name}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar
    


