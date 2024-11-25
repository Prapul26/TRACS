import React from 'react';
import './LoginNav.css';
import logo from '../../assets/LOGO.jpg'
const LoginNav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <ul className='nav-links'>
        <li><a href='#home'>HOME</a></li>
        
        <li><a href='#events'>EVENTS</a></li>
        
        <li><a href='#about'>ABOUT US</a></li>
        <li><a href='#pricing'>PRICING</a></li>
       
      </ul>
    </div>
  );
};

export default LoginNav;
