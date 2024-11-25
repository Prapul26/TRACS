import React, { useState } from 'react';
import './LoginHeader.css';
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
import { Link } from 'react-router-dom';
import logo from '../../assets/LOGO.jpg';

const LoginHeader = () => {
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
                    <a className='om2' href="https://x.com/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaXTwitter color='white' className='om1' /></a>
                    <a className='om1' href="https://www.linkedin.com/company/h7network/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}> <FaLinkedinIn color='white' className='om1' /></a>
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
                <div className='profilePic' >
                 <Link to='/'> <button>Login</button></Link>  
                  <Link to='/register'><button>Register</button></Link>  
                   </div>
                {isOpen2 && (
                    <div className='dropdown2'>
                        <ul style={{ listStyle: "none" }}>
                            <li>My Profile</li>
                            <li>Manage Calendar</li>
                            <li>My Notes</li>
                            <li>Messages</li>
                            <li style={{ border: "none" }}>logout</li>
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
                            <div>My profile</div>
                            <div className='cx' onClick={() => setInfo(false)}><RxCross2 size={25} /></div>
                        </div>
                        <div className='home-holder'>
                            <div className='home'><p>HOME</p></div>
                        </div>
                       
                        <div className='events-holder'>
                            <div className='events'><p>EVENTS</p></div>
                        </div>
                       
                        <div className='About-us-holder'>
                            <div className='about'><p>ABOUT US</p></div>
                            <div className='aa' onClick={showAbout}>
                                {about ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {about && (
                                <div className='ad'>
                                    <p> AboutUs</p>
                                    <p>Contact</p>
                                    <p>Partners</p>
                                </div>
                            )}
                        </div>
                        <div className='pricing-holder' >
                            <div className='pricing'><p>PRICING</p></div>
                        </div>
                        <div className='resouces-holder'>
                            <div className='resources'><p>RESOURCES</p></div>
                            <div className='ra' onClick={showResources}>
                                {resources ? <IoIosArrowDown /> : <IoIosArrowForward />}
                            </div>
                            {resources && (
                                <div className='rd'>
                                    <p>blog</p>
                                    <p>Training</p>
                                    <p>Help</p>
                                </div>
                            )}
                        </div>
                        <div className='buttons-holder'>
                            <div className='login-button'><button>Login</button></div>
                            <div className='reg-button'><button>Register</button></div>
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

export default LoginHeader;
