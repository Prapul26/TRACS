import React, { useState } from 'react'
import './businessProfile.css'
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
const BusinessProfile = () => {
    const [activeElement, setActiveElement] = useState(null);

    const handleClick1 = () => {
        setActiveElement('active1');
    };

    const handleClick2 = () => {
        setActiveElement('active2');
    };

    return (
        <div className='businessProfile-container'>
            <UserHeader />
            <div className='profileNav'>

                <div className='proh3'><h3>My Profile</h3></div>
                <div className='Hedh3'>
                    <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/profile'><h3>My Profile</h3></Link>
                </div>
            </div>
            <button>Create Bussiness Profile</button>
            <div className='businessStatus-container'>
                <div className='businessStatus'>
                    <div className={`active1 ${activeElement === 'active1' ? 'borderTop' : ''}`} onClick={handleClick1}> <h3>Active</h3><div className='circle1'><p>0</p></div></div>
                    <div className={`active2 ${activeElement === 'active2' ? 'borderTop' : ''}`} onClick={handleClick2}><h3>InActive</h3><div className='circle2'><p>0</p></div></div>
                </div>
                <div className='statusDetails'>
<h1>NO RESULT FOUND</h1>
                </div>
            </div>
        </div>
    )
}
export default BusinessProfile;
