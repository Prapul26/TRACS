import React, { useState } from 'react';
import './Header.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import pic1 from '../../assets/pic1.jpg';
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { IoReorderThree } from "react-icons/io5";
import usa from '../../assets/Screenshot (4).png';
import { RxCross2 } from "react-icons/rx";
import logo from '../../assets/LOGO.jpg';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen2, setOpen2] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [open, getOpen] = useState(false);
  const [info, setInfo] = useState(false);
  const [about, setAbout] = useState(false);
  const [resources, setResources] = useState(false);

  const showAbout = () => {
    setAbout(!about);
  }

  const showResources = () => {
    setResources(!resources);
  }

  const three = () => {
    setInfo(!info);
  }

  const toggleC = () => {
    getOpen(!open);
  }

  const toggleA = () => {
    setOpen(!isOpen);
    setOpen2(false);
  }

  const toggleB = () => {
    setOpen2(!isOpen2);
    setOpen(false);
  }

  return (
    <div className='header-container'>
      <div className='H-container'>
        <div className='social-icons'>
          <a className='om1' href="https://www.facebook.com/h7network" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FaFacebook color='white' /></a>
          <a className='om2'href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaXTwitter color='white' className='om1' /></a>
          <a className='om1'href="https://www.linkedin.com/company/h7network/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaLinkedinIn color='white'  className='om1'/></a>
        </div>
      </div>

      <div />
      <div className='p-container'>
        <div className='globe' onClick={toggleA}><BsGlobe color='white' size={25} /> <span>  </span>< MdArrowDropDown color='white' /></div>
        {isOpen && (
          <div className='dropdown'>
            <ul style={{ listStyle: "none" }}>
              <li> <img src={usa} style={{ height: "10px", width: "20px" }} /><span >    </span>USA</li>
            </ul>
          </div>
        )}
        <div className='profilePic' onClick={toggleB}>
          <img src={pic1} style={{ height: "40px", borderRadius: "40px" }} /><span>  </span>< MdArrowDropDown color='white' /></div>
        {isOpen2 && (
          <div className='dropdown2'>
            <ul style={{ listStyle: "none" }}>
              <Link to='/myMembership'><li>My Profile</li></Link>
            <Link to='/myBookings'> <li>Manage Calendar</li></Link> 
             <Link to='/myNotes'><li>My Notes</li></Link> 
             <Link to='/sentMail'> <li>Messages</li></Link>
             <Link to='/'><li style={{ border: "none" }}>logout</li></Link> 
            </ul>
          </div>
        )}
      </div>
      <div className='mobile-Header'>
        <div className='mob-logo'><img src={logo} /></div>
        <div className='mob-globe' onClick={toggleC}><BsGlobe color='white' size={25} /><span>< MdArrowDropDown color='white' /></span></div>
        {open && (
          <div className='dropdown3'>
            <ul style={{ listStyle: "none" }}>
              <li> <img src={usa} style={{ height: "10px", width: "20px", marginLeft: '-40px' }} /><span >    </span>USA</li>
            </ul>
          </div>
        )}

        <div className='mob-three' onClick={three}><IoReorderThree size={40} color='white' /></div>
        {info && (
          <div className='infoPage'>
            <div className='cross-holder'>
              <div > <Link to='/myMembership'><p style={{position:"absolute",marginTop:"0px",color:'blue'}}>My profile</p></Link></div>
              <div className='cx' onClick={() => setInfo(false)}><RxCross2 size={25} /></div>
            </div>
            <div className='home-holder'>
              <div className='home'><p ><Link to='/home'style={{color:"blue"}}>HOME</Link></p></div>
            </div>
            <div className='members-holder'>
              <div className='members'><p><Link to='/members'style={{color:"blue"}}>MEMBERS</Link></p></div>
            </div>
            <div className='events-holder'>
              <div className='events1' ><p style={{marginTop:"0px"}}><Link to='/events'style={{color:"blue"}} >EVENTS</Link></p></div>
            </div>
            <div className='Referral-holder'>
              <div className='referral'><p><span style={{ marginTop: "15px" }}><Link to='/referral'style={{color:"blue"}}>REFERRAL SUPPORT</Link></span></p></div>
            </div>
            <div className='About-us-holder'>
              <div className='about'><p style={{color:"blue"}}>ABOUT US</p></div>
              <div className='aa' onClick={showAbout}>
                {about ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              {about && (
                <div className='ad'>
                  <p><Link to='/about'>AboutUs</Link></p>
                  <p><Link to='/contact'>Contact</Link></p>
                  <p><Link to='/partner'>Partners</Link></p>
                </div>
              )}
            </div>
            <div className='pricing-holder2'>
              <div className='pricing2'><p><Link to='/pricing'style={{color:"blue"}}>PRICING</Link></p></div>
            </div>
            <div className='resouces-holder'>
              <div className='resources'><p style={{color:"blue"}}>RESOURCES</p></div>
              <div className='ra' onClick={showResources}>
                {resources ? <IoIosArrowDown /> : <IoIosArrowForward />}
              </div>
              {resources && (
                <div className='rd'>
                 <Link to="/blog"><p>blog</p></Link> 
                 <Link to="/training"> <p>Training</p></Link>
                 <Link to="/help"><p>Help</p></Link> 
                </div>
              )}
            </div>
            <div className='buttons-holder'>
              <div className='login-button'><Link to='/'><button>Login</button></Link></div>
           <Link to='/register'>   <div className='reg-button'><button>Register</button></div></Link>
            </div>
            <div className='social2-media-holder'>
              <div className='sd'>
                <a href="https://www.facebook.com/h7network" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}><FaFacebook size={25} color='blue' /></a>
                <a href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaXTwitter size={25} color='blue' /></a>
                <a href="https://www.linkedin.com/company/h7network/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaLinkedinIn size={25} color='blue' /></a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
