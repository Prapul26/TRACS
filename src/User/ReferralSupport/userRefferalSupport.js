import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './userRefferalSupport.css'
import UserHeader from '../UserHeader/UserHeader'
const UserRefferalSupport = () => {
  const[title,setTitle]=useState('');
  const[image,setImage]=useState(null);
  const[category,setCategory]=useState("");
  const[description,setDescription]=useState('');
  const handelTitle=(e)=>{
    setTitle(e.target.value);
  }
const handelCategory=(e)=>{
  setCategory(e.target.value);
}
const handelDescription=(e)=>{
  setDescription(e.target.value);
}
const handelImage=(e)=>{
  setImage(e.target.file[0])
}
const handelSubmit=(e)=>{
  e.preventDefault();
  console.log(title,category,image,description)
}

  return (
    <div className='crf-container'>
      <div>
        <UserHeader />
      </div>
      <div className='profileNav'>
        <div className='proh3'><h3>Create Referral Support</h3></div>
        <div className='Hedh3'>
          <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/userReferralSupport'><h3>Create Referral Support</h3></Link>
        </div>
      </div>
      <div className='crf-button'><Link to='/referralSupportNav'><button>Back</button></Link></div>
      <form onSubmit={handelSubmit}className='crf-holder'>
        <div className='crf-h1'><h1>Basic Informations</h1></div>
        <label>Title<span style={{ color: 'red' }}>*</span></label>
        <input type='text' value='title' onChange={handelTitle}/>
        <label>Category<span style={{ color: 'red' }}>*</span></label>
        <select value='category' onChange={handelCategory}>
          <option value='' disabled selected>select Category</option>
          <option value='value1'>Category1</option>
          <option value='value2'>Category2</option>
          <option value='value3'>Category3</option>
          <option value='value4'>Category4</option>
          <option value='value5'>Category5</option>
        </select>
        <label>Image</label>
        <input type='file' onChange={handelImage}/>
        <label>Description</label>
        <textarea  value="description" onChange={handelDescription}  />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
export default UserRefferalSupport;