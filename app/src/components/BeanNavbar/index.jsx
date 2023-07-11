import bean_with_text from '../../bean_right_text.svg';
import bean_clear from '../../bean_clear.svg'
import Toolbar from '@mui/material/Toolbar';
import { IconButton, Typography, Button, Icon } from '@mui/material';
import MenuIcon from '@mui/material/MenuItem';
import ListIcon from '@mui/icons-material/List';
import { NavLink } from 'react-router-dom';
import './style.css';
import { useState } from 'react';

function BeanNavbar() {
  const [showNav, setShowNav] = useState(false)

  const handleShowNavbar = () => {
    setShowNav(!showNav)
  }



  return (
      <nav className="navbar">
        <div className="container">
          <div className="logo-container">
            <img src={bean_with_text} className="logo"/>
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <IconButton style={{color: 'black'}}>    
                <ListIcon style={{fontSize: '50px', color: 'black', height: '50px'}}/>
            </IconButton>
          </div>
          <div className={`nav-elements  ${showNav && 'active'}`}>
            <ul>
              <li>
                <NavLink href="/">Home</NavLink>
              </li>
              <li>
                <NavLink href="/Gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink href="/About">About</NavLink>
              </li>
              <li>
                <NavLink href="/contact">Contact</NavLink>
              </li>
          </ul>
        </div>
       </div>
      </nav>
  );
}

export default BeanNavbar;