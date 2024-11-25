import React, { useState } from 'react';
import './Testing.css';
import m1 from '../../assets/memcard1.png';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
const Testing = () => {
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
        <h1>Testing</h1>
      </div>
      <div className="testingContainer">
        <IoArrowBackCircleSharp size={60} color="blue" onClick={handleNavigate} />
        <div className="testingImg">
          <img src={m1} alt="Memory Card" />
          <div className="testingDate">
            Jul 13 2024 | 0 Comment | <FaEye color="orange" size={12} style={{ marginTop: '12px' }} /> <span style={{ color: 'orange' }}>9 views</span>
          </div>
        </div>
        <div className="testingData">
          <h1>Testing</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
            dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="testingcolor">#testing</div>
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

export default Testing;
