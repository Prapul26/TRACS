import React from 'react';
import './LoginNav.css';
import logo from '../../assets/LOGO.jpg'
import { Link } from 'react-router-dom';
const LoginNav = () => {
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <ul className='nav-links'>
       <Link to='/home'><li><a href='#home'>HOME</a></li></Link> 
        
        <Link to='/events'><li><a href='#events'>EVENTS</a></li>
        </Link>
       <Link to='/about'><li><a href='#about'>ABOUT US</a></li></Link> 
       <Link to='/pricing'><li><a href='#pricing'>PRICING</a></li></Link> 
       
      </ul>
    </div>
  );
};

export default LoginNav;
