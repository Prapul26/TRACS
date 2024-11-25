import React from 'react'
import './Events.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const events = [
  // Add all events here as JavaScript objects
  {
    title: 'Cleveland',
    start: new Date(2024, 10, 3, 9, 30),
    end: new Date(2024, 10, 3, 10, 30),
  },
  {
    title: 'Phoenix, AZ',
    start: new Date(2024, 10, 4, 8, 30),
    end: new Date(2024, 10, 4, 9, 30),
  },
  {
    title: 'Optimized Network',
    start: new Date(2024, 10, 19, 13, 0),
    end: new Date(2024, 10, 19, 14, 0),
  },
  {
    title: 'Member Spotlight',
    start: new Date(2024, 10, 19, 22, 0),
    end: new Date(2024, 10, 19, 23, 0),
  },
  // Add more events here as needed
];
const Events = () => {
  return (
    <div>
        <Header/>
        <Navbar/>
        <div className='calenderContainer'>
        <div>
    <h1>H7 Networking Training</h1>
    <Calendar
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      style={{ height: '100vh' }}
      defaultView="month"
      views={['month', 'week', 'day']}
      step={60}
      showMultiDayTimes
    />
  </div>
        </div>
        <Footer/>
    </div>
  )
}
export  default Events;