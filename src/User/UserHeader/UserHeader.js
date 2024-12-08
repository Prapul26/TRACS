import React, { useState } from 'react';
import { BiSolidDownArrow } from "react-icons/bi";
import './UserHeader.css'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import { BiSolidUpArrow } from "react-icons/bi";
 const UserHeader = () => {
    const[nav ,showNav]=useState(false);
    const[notes,showNotes]=useState(false);
    const handleNotes=()=>{
      showNotes(!notes);
    }
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
    <div className='nav1'><Link to='/myMembership'><h3>My Membership</h3></Link></div>
    <div className='nav2'><Link to='/profile' ><h3>My Profile</h3></Link></div>
    <div  className='nav3'><Link to='/businessProfile'><h3>My Bussiness Profile</h3></Link></div>
    <div  className='nav4'onClick={handleNotes}><h3>Notes</h3>{notes ?<BiSolidUpArrow color='white'style={{marginTop:"22px"}} />:<BiSolidDownArrow Arrow color='white' style={{ marginTop: "22px" }} />} </div>
   {
    notes && <div className='naotesContainer'>
<Link to='/myNotes'><h3>My Notes</h3></Link>
<Link to='/notesTemplate'><h3>Notes Templates</h3></Link>
      </div>
   }
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
        <div className='userName'> <img src="https://tracsdev.apttests.com/public/uploads/website-images/login-2023-12-18-07-43-54-1467.jpg" /><h3>PRAPUL KUMAR JANAGAM</h3></div>
      
        </div>  </div>
  )
}
export default UserHeader;