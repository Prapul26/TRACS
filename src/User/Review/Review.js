import React from 'react'
import './Review.css';
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader'
const Review = () => {
    return (
        <div className='Review-container'>
            <div> <UserHeader /></div>
            <div className='profileNav'>

                <div className='proh3'><h3>Reviews</h3></div>
                <div className='Hedh3'>
                    <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/reviews'><h3>Reviews</h3></Link>
                </div>
            </div>
            <div className='Review-Holder'>
                <div className='visitors-review'>Visitors Review</div>
                <div className='my-review'>My Review</div>
            </div>
        </div>
    )
}
export default Review;