import React from 'react'
import './Schedule.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
 const Schedule = () => {
  return (
    <div className='scheduleContainer'>
        <Header/>
        <Navbar/>
        <div className='schedule1on1'>
          <h2 style={{color: "white"}}>Schedule 1 on 1</h2>
        </div>
        <Footer/>
    </div>
  )
}
export default Schedule;