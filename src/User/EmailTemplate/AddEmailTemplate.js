import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AddEmailTemplate.css';
import UserHeader from '../UserHeader/UserHeader';

const AddEmailTemplate = () => {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ title, subject, emailBody });
  };

  return (
    <div className='addEmail-container'>
      <UserHeader />
      <div className='profileNav'>
        <div className='proh3'><h3>Add Template</h3></div>
        <div className='Hedh3'>
          <Link to='/home'><h3>Home</h3></Link> <span>.</span>
          <Link to='/myMembership'><h3>Dashboard</h3></Link> <span>.</span>
          <Link to='/addTemplate'><h3>Add Template</h3></Link>
        </div>
      </div>
      <div className='addEmail-holder'>
        <form onSubmit={handleSubmit}>
          <label>
            Title <span style={{ color: "red" }}>*</span></label><br/>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            /><br/>
          
          <label>
            Subject <span style={{ color: 'red' }}>*</span>   </label><br/>
            <input
              type='text'
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            /><br/>
       
          <label><br/>
            Email Body <span style={{ color: 'red' }}>*</span></label><br/>
            <textarea
              value={emailBody}
              onChange={(e) => setEmailBody(e.target.value)}
              required
            /><br/>
          
          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmailTemplate;
