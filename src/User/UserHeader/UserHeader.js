import React, { useState } from 'react'
import './UserHeader.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
 const UserHeader = () => {
    const[nav ,showNav]=useState(false);
    const handelnav=()=>{
showNav(!nav);
    }
  return (
    <div>
    <div className='userHeaderContainer'>
    {
            nav && <div className='userHeaderNav'> 
<div className='navHome'><Link to='/home'><h1>HOME</h1></Link></div>
<div className='navMenu'>
    <div className='nav1'><h3>My Membership</h3></div>
    <div className='nav2'><h3>My Profole</h3></div>
    <div  className='nav3'><h3>My Bussiness Profile</h3></div>
    <div  className='nav4'><h3>Notes</h3></div>
   
    <div  className='nav5'><h3>Referral Support</h3></div>
    <div className='nav6'><h3>My Blog</h3></div> 
    <div className='nav7'><h3>Emial Template</h3></div>
    <div className='nav8'><h3>Messages</h3></div>
    <div className='nav9'><h3>Manage Calender</h3></div>
    <div className='nav10'><h3>Reviews</h3></div>
    <div className='nav11'><h3>Logout</h3></div>
</div>
            </div>
        }
        <div className='arrow' onClick={handelnav}>{nav ?<IoIosArrowDropleftCircle  size={25}/>:<IoIosArrowDroprightCircle size={25}/>}</div>
        <div className='userName'> <img />PRAPUL KUMAR JANAGAM</div>
      
        </div>  </div>
  )
}
export default UserHeader;