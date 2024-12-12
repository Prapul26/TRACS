import React from 'react'
import './adad.css'
import { Link } from 'react-router-dom'
import UserHeader from '../UserHeader/UserHeader'
const ReferralSupportNav = () => {
  return (
    <div className='refsupnav'>
      <div>
        <UserHeader />
      </div>
      <div className='profileNav'>
        <div className='proh3'><h3>Referral Support</h3></div>
        <div className='Hedh3'>
          <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/referralSupportNav'><h3>Referral Support</h3></Link>
        </div>
      </div>
      <div className='refsupnav-holder'>
        <Link to='/userReferralSupport'><div className='tdbutton' ><button>Add Post</button></div></Link>
        <table>
          <thead className='tdead'>
            <td>Title</td>
            <td>Category</td>
            <td>Created On</td>
            <td>Action</td>
          </thead>
        </table>
      </div>
    </div>
  )
}
export default ReferralSupportNav;