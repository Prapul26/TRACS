import React from 'react'
import './Inbox.css'
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
 const Inbox = () => {
  return (
    <div className='Inbox-container'>
        <div>
            <UserHeader/>
        </div>
        <div className='profileNav'>
       
        <div className='proh3'><h3>Inbox</h3></div>
        <div className='Hedh3'>
         <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/inbox'><h3>Inbox</h3></Link>
        </div>
      </div>
        <div className='Inbox-holder'>
<div className='subject'><h1>Subject</h1></div>
<div className='from'><h1>From</h1></div>
<div className='timeStamp'><h1>Time Stamp</h1></div>
        </div>
    </div>
  )
}
export default Inbox;