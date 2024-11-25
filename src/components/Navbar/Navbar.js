import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.jpg'
const Navbar = () => {
  const [dropdown,showDropdown]=useState(false);
  const [dropdown2,showDropdown2]=useState(false);
  const toggleDropdown=()=>{
    showDropdown(!dropdown)
  }
  const toggleDropdown2=()=>{
    showDropdown2(!dropdown2);
  }
  return (
    <div className='nav-container'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>
      <ul className='nav-links'>
        <li><Link to='/home'>HOME</Link></li>
        <li><Link to='/members'>MEMBERS</Link></li>
        <li><Link to='/events'>EVENTS</Link></li>
        <li><Link to='/referral'>REFERRAL SUPPORT</Link></li>
        <li className="list1"onClick={toggleDropdown} style={{fontWeight:'500'}} >ABOUT US</li>
       
        <li><Link to='/pricing'>PRICING</Link></li>
        <li onMouseEnter={toggleDropdown2}className='list2'style={{fontWeight:'500'}}> RESOURCES</li>
      </ul>
      {
          dropdown && (
            <div className='aboutdrop'>
              <ul>
               <Link to='/about'> <li>About Us</li></Link>
               <Link to='/contact'> <li>Contact</li></Link>
               <Link to='/partner'><li  style={{borderBottom:'none'}}>Partner</li></Link> 
              </ul>
            </div>
          )
        } {
      dropdown2 &&(
        <div className='ldrop'>
          <ul>
           <Link to='/blog'> <li><div className='blgg'></div>Blog</li></Link>
           <Link to='/training'><li>Training</li></Link> 
           <Link to='/help'><li>Help</li></Link> 
          </ul>
          </div>
      )
    }
    </div>
   
  );
};

export default Navbar;
