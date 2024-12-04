import React from 'react'
import './profile.css'
import { useState } from 'react';
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';
const Profile = () => {
  const [formData, setFormData] = useState({
    name: 'Prapul kumar Jangam',
    phone: '894479493',
    email: 'prapul.pp@mail.com',
    aboutMe: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div className='profile-cc'>
      <UserHeader />
      <div className='profileNav'>
       
        <div className='proh3'><h3>My Profile</h3></div>
        <div className='Hedh3'>
         <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/profile'><h3>My Profile</h3></Link>
        </div>
      </div>
      <form onSubmit={handleSubmit} className='profile-form'>
        <div className='profile-details'>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(e.target.value)}
          />
          <label>Phone</label>
          <input
            type="text"
            name="name"
            value={formData.phone}
            onChange={(e) => setFormData(e.target.value)}
          />
          <label>EMAIl</label>
          <input
            type="text"
            name="name"
            value={formData.email}
            onChange={(e) => setFormData(e.target.value)}
          />
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData(e.target.value)}
          />
          <label>About Me</label>
          <textarea
            name="aboutMe"
            value={formData.aboutMe}
            onChange={(e) => setFormData(e.target.value)}
          ></textarea>
          <label>Address</label>
          <input
            type="text"
            name="name"
            value={formData.address}
            onChange={(e) => setFormData(e.target.value)}
          />
          <button type="submit" className='update-button'>UPDATE</button>
        </div>
        <div className='profile-img'>
        <img  src="https://tracsdev.apttests.com/public/uploads/website-images/login-2023-12-18-07-43-54-1467.jpg"/>
        
          <div className='pic4Holder'><button >Upload Image</button>
          </div>
       
        </div>
      
    </form>  <div className='profilePassword'> 
<label>Current Passsword</label>
<input type='password'/>
<label>Change Passsword</label>
<input type='password'/>
<label>Conform Passsword</label>
<input type='password'/>
<button>UPDATE</button>
        </div>
    </div >
  )
}
export default Profile;