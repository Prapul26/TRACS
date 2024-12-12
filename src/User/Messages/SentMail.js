import React from 'react'
import './SentMails.css'
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
const SentMails = () => {
  return (
    <div className='SentMails-container'>
        <div><UserHeader/></div>
        <div className='profileNav'>
       
        <div className='proh3'><h3>Sent Mail</h3></div>
        <div className='Hedh3'>
         <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/sentmail1'><h3>Sent Mail</h3></Link>
        </div>
      </div>
      <div className='Inbox-holder'>
<div className='subject'><h1>Subject</h1></div>
<div className='from'><h1>To</h1></div>
<div className='timeStamp'><h1>Time Stamp</h1></div>
        </div>

    </div>
  )
}
export default SentMails;