import React, { useState } from 'react';
import './MyBookings.css';
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';

const MyBookings = () => {
    const [selectedTab, setSelectedTab] = useState('upcoming');
    const [upcoming, showUpcoming] = useState(true);
    const [past, showPast] = useState(false)

    const handleUpcomingClick = () => {
        setSelectedTab('upcoming');
        showUpcoming(!upcoming);
        showPast(false)
    };

    const handlePastClick = () => {
        setSelectedTab('past');
        showPast(!past);
        showUpcoming(false)
    };

    return (
        <div className='MyBookings'>
            <div><UserHeader /></div>
            <div>
                <div className='profileNav'>
                    <div className='proh3'><h3>My Bookings</h3></div>
                    <div className='Hedh3'>
                        <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dashboard</h3></Link><span>.</span><Link to='/profile'><h3>My Bookings</h3></Link>
                    </div>
                </div>
                <div className='booking'>
                    <div className='book1'>
                        <input type='text' placeholder='Search' />
                        <button>Go</button>
                    </div>
                    <div className='book2'><input type='date' placeholder='dd-mm-yyyy' /></div>
                </div>
            </div>
            <div className='MyBookings-holder'>
                <div className='events'>
                    <div className={`upcoming ${selectedTab === 'upcoming' ? 'border' : ''}`} onClick={handleUpcomingClick}><h3>Upcoming Events</h3></div>
                    <div className={`past ${selectedTab === 'past' ? 'border' : ''}`} onClick={handlePastClick}><h3>Past Events</h3></div>
                </div>
                {upcoming && <div className='upcoming-events'>
                    <div className='upcominfPic'><img src="https://tracsdev.apttests.com/public/uploads/custom-images/user-2024-07-09-02-52-30-9248.png" /></div>
                    <div className='upcominDetails'><h1>Swaran Jeeth</h1>
                        <h3>Email:swaran@yopmail.com</h3>
                        <h3>Tue Mar 07,2034 11:30 AM- 11:45 AM</h3>
                        <h3>Response : pendong</h3>
                        <h3>Created Oct 04,2024</h3>
                        <div className='evenButtons'>
                            <button style={{ background: "blue", color: "white", padding: "12px" }}>Reschedule</button>
                            <button style={{ background: "red", color: "white", padding: "12px" }}>Cancel</button>
                            <button style={{ background: "orange", color: "white", padding: "12px" }}>Details</button>
                        </div>
                    </div>
                </div>}
                {
                    past && <div><h1 style={{ color: "red" }}>No Results Found</h1>
                    </div>
                }
                <div>

                </div>
            </div>
        </div>
    );
};

export default MyBookings;
