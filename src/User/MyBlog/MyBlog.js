import React from 'react'
import './MyBlog.css'
import { Link } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
const MyBlog = () => {
    return (
        <div className='MyBlog-Container'>
            <div><UserHeader /></div>
            <div>
                <div className='profileNav'>

                    <div className='proh3'><h3>My Blog</h3></div>
                    <div className='Hedh3'>
                        <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/myBlog'><h3>Blog</h3></Link>
                    </div>
                </div>
            </div>
            <div className='MyBlod-Button'>
              <Link to='/blogForm'><button>Create Blog</button></Link>  
            </div>
            <div className='MyBlog-holder'>
<table>
    <thead style={{backgroundColor:"black"}}>
        <td>Title</td>
        <td>View</td>
        <td>Image</td>
        <td>Action</td>
    </thead>
    <tbody>

    </tbody>
</table>
            </div>
        </div>
    )
}
export default MyBlog;