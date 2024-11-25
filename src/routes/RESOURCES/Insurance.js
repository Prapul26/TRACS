import React from 'react'
import './Insurance.css'
import { useState } from 'react';
import m2 from '../../assets/memcard2.png'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
 const Insurance = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [number, setNumber] = useState('');
const Navigate=useNavigate();
  const handleName = (e) => {
    setName(e.target.value);
    console.log(name);
  };

  const handleMail = (e) => {
    setMail(e.target.value);
    console.log(mail);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
    console.log(number);
  };
  const handleNavigate=()=>{
    Navigate('/blog')
  }

  return (
    <div>
      <Header />
      <Navbar />
      <div className="blogHerp">
        <h1>Insurance Services</h1>
      </div>
      <div className="testingContainer">
        <IoArrowBackCircleSharp size={60} color="blue" onClick={handleNavigate} />
        <div className="testingImg">
          <img src={m2} alt="Memory Card" />
          <div className="testingDate">
            Jul 09 2024 | 0 Comment | <FaEye color="orange" size={12} style={{ marginTop: '12px' }} /> <span style={{ color: 'orange' }}>11 views</span>
          </div>
        </div>
        <div className="testingData">
          <h1>Insurance Services</h1>
          <p>
          Insurance services encompass a wide range of products designed to provide financial protection and peace of mind against various risks. Here are some key categories and details about insurance services:
          </p>
          <h1>Types of Insurance Services</h1>
          <h3>Health Insurance:</h3>
          <p>Individual and Family Plans: Coverage for medical expenses, including doctor visits, hospital stays, surgeries, and prescription medications.
Group Health Insurance: Provided by employers to their employees, often with shared premium costs.
Medicare and Medicaid: Government programs providing health coverage for eligible individuals.</p>
         <div className='colorop'>
          <div className="testingcolor">#testing</div>
          <div className="testingcolor">#testing</div>
          <div className="testingcolor">#testing</div></div>
        </div>
        <div className="testingComment">
          <div className="testingComment1">
            <div className="commentData">
              <h1>Add a Comment</h1>
              <div className="inputComment">
                <input placeholder="NAME" value={name} onChange={handleName} type="text" />
                <input placeholder="EMAIL" value={mail} onChange={handleMail} type="email" />
                <input placeholder="PHONE" value={number} onChange={handleNumber} type="text" />
              </div>
            </div>
            <div className="comment">
              <input type="text" placeholder="COMMENT" />
            </div>
            <button className="submitComment">SUBMIT COMMENT</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Insurance;