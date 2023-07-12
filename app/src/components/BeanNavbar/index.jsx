import bean_with_text from '../../assets/bean/bean_right_text_large.svg';
import bean_clear from '../../assets/bean/bean_clear.svg'
import { IconButton, Typography, Button, Icon } from '@mui/material';
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
                <ListIcon style={{fontSize: '40px', color: 'black', height: '40px'}}/>
            </IconButton>
          </div>
          <div className={`nav-elements  ${showNav && 'active'}`}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/gallery">Gallery</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
          </ul>
        </div>
       </div>
      </nav>
  );
}

export default BeanNavbar;
