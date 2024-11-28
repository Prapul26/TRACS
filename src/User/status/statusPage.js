import React from 'react';
import './statusPage'
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
const StatusPage = () => {
  return (
    <div>
      <UserHeader />
      <div className='status-page-container'>
        <div className='oh1'>

          <div className='oh3'><Link to='/home'><h3>Home .</h3></Link><Link to='/myMembership'><h3> Dasboard . </h3></Link><h3>Orders</h3></div>
        </div>
        <div className='oh2'>
          <h3>Order History</h3>
        </div>
      </div>
      <div className='container-status'>
        <button style={{ marginLeft: "40px", marginTop: "40px", padding: "10px", backgroundColor: "blue", color: "white", marginBottom: "30px" }}>Back</button>
        <div className='des1'>
          <div className='cs1'>
            <div className='cs1-1'>
              <h1>TRACS</h1>
              <h3 style={{color:"black"}}>Prapul Kumar Janagam</h3>
              <h3>894979436</h3>
            </div>
            <div className='cs1-2'>
              <h3>Purchase Date: 18 October, 2024</h3>
              <h3>Expired Date: 17 November, 2024</h3>
              <h3>Payment Status : <button style={{ backgroundColor: "red", color: "white" }}> Free</button></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StatusPage;