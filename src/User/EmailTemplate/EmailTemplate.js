import React from 'react'
import './EmailTemplate.css'
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';
 const EmailTemplate = () => {
  return (
    <div className='emailTemplate-container'>
        <div>
            <UserHeader/>
        </div>
        <div className='emailTemp-button'><Link to='/addTemplate'><button>Add Template</button></Link></div>
    <div className='emailTemplate-holder'>
    <table>
    <thead style={{backgroundColor:"black"}}>
        <td>Name</td>
        <td>Subject</td>
        <td>Body</td>
        <td>Created On</td>
        <td>Action</td>
    </thead>
    <tbody>

    </tbody>
</table>
    </div>
    </div>
  )
}
export default EmailTemplate;