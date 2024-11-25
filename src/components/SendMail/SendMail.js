import React from 'react'
import './SendMail.css'
import { IoIosStarOutline } from "react-icons/io";
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { TiArrowBackOutline } from "react-icons/ti";
const SendMail = () => {
  return (
    <div className='sendMailContainer'>
      <Header />
      <Navbar />
      <div className='sendMail'>
        <h2 style={{ color: "white" }}>Send Mail to SwaranJeeth</h2>
      </div>
      <div className='sendMail-holder'>

        <button style={{ backgroundColor: " #4D4DFF", borderRadius: "30px", border: "transparent" }}><span><TiArrowBackOutline color='white' size={35} /></span> </button>
        <div className='to'>
          <b>To</b><br></br>
          <input type='mail' placeholder='swaran@yopmail.com' />
        </div>
        <div className='CC'>
          <b>CC</b><br>
          </br>
          <textarea type='text' placeholder='CC:' />
          <p>(you can enter multiple emails seperated with semicolon)</p>
        </div>
        <div className='selectT'>
<div className='select-hold'>
  <b>Select Template</b>
  <p>Manage Templates</p>
</div>
<div className='selectdrop'>
<select  className='select-dropdown'>
                    <option value="" disabled>select template</option>
                    <option value="1">Select Template</option>
                    <option value="2">Admin Template</option>
                 
                  </select><br></br>
  
</div>
<div className='subject'>
<b>Subject</b>
<br></br>
<input type='text'/>
</div>

        </div>

      </div>
      <Footer />
    </div>
  )
}
export default SendMail;