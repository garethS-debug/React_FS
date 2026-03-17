import React from 'react';
import './NavBar.css' ;

const NavBar = () => {  
    return (
            <div className="navbar"> Navbar
            {/* Sidebar */}
            <div className="wrapper">
              <span> Gareth Swarte</span>   
              <div className="social">
                <a href="https://www.linkedin.com/in/gareth-swarte-9b1a4b1b3/"><img src="../assets/icons/linkedin-app-icon.png" alt="LinkedIn" />LinkedIn</a>
                <a href="https://github.com/garethswarte"><img src="../assets/icons/github-app-icon.png" alt="GitHub" />Github</a>
                <a href="https://www.instagram.com/gareth_swarte/"><img src="../assets/icons/instagram-app-icon.png" alt="Instagram" />Instagram</a>
              </div>

            </div>
            
            </div>
            )
    }

            export default NavBar