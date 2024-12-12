import React, { useState } from 'react'
import UserHeader from '../UserHeader/UserHeader'
import './BookingsByOthers.css'
import { Link } from 'react-router-dom'
const BookingsByOther = () => {
  const [element,setElement]=useState('upevents');
  const [upevents,showUpEvents]=useState(true);
  const [paevents,showPaEvents]=useState(false);

  const handeln1=()=>{
setElement('upevents')
showUpEvents(upevents);
  }
  const handeln2=()=>{
setElement('paevents')
showPaEvents(paevents);
  }
  return (
    <div className='ult'>
      <div><UserHeader /></div>
      <div className='profileNav'>
        <div className='proh3'><h3>Bookings By Others</h3></div>
        <div className='Hedh3'>
          <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dashboard</h3></Link><span>.</span><Link to='/bookingsByOthers'><h3>Bookings By Others</h3></Link>
        </div>
      </div>
      <div className='booking'>
        <div className='book1'>
          <input type='text' placeholder='Search' />
          <button>Go</button>
        </div>
        <div className='book2'><input type='date' placeholder='dd-mm-yyyy' /></div>
      </div>
<div className='bookOthers'>

<div className='bookOtherNav'>
  <div className={`upevents ${element==='upevents'?'border':""}`}onClick={handeln1}><h3>Upcoming Events</h3></div>
<div className={`paevents ${element==='paevents'?"border":""}`} onClick={handeln2}><h3>Past Events</h3></div>
</div>
{upevents && <div><h1 style={{color:'red'}}>No Results Found</h1></div>}
{paevents && <div><h1 style={{color:'red'}}>No Results Found</h1></div>}
</div>
    </div>
  )
}
export default BookingsByOther;