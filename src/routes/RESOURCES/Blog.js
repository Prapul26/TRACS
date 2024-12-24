import React, { useState } from 'react';
import './Blog.css';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import m1 from '../../assets/memcard1.png'
import m2 from '../../assets/memcard2.png'
import { Link } from 'react-router-dom';
export const Blog = () => {
  const [showMembers, setShowMembers] = useState(true);

  return (
    <div>
      <Header />
      <Navbar />
      <div className='ph1'><div className='p1h1'><h1>Blog</h1></div></div>
      <div className='blogContainer'>
        <div className='blog'>
          <div className='memberBlog' onClick={() => setShowMembers(true)}>
            <h1>MEMBERS BLOG</h1>
          </div>
          <div className='h7Blog' onClick={() => setShowMembers(false)}>
            <h1>H7 MEMBERS BLOG</h1>
          </div>
        </div>
        {showMembers ? (
          <div className='members'>
            <h2>Members Blog</h2>
            <Link to='/testing'> <div className='membersCard1'>
              <div className='m111'>
                <img src={m1} />
              </div>
              <div className='m122'>
                <h2>Testing</h2>
                <h4>Shankar Vanga |  <span style={{ color: "red" }}>jul 13 2014</span></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                <p>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
                <p>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo...</p>
              </div>
            </div></Link>
            <Link to='/insurance'><div className='membersCard2'>
              <div className='m211'>
                <img src={m2} />
              </div>
                <div className='m222'>
                  <h2>Insurance Services</h2>
                  <h4>Swaran Jeeth | <span style={{ color: 'red' }}>Jul 09 2024</span></h4>
                  <p>Insurance services encompass a wide range of products designed to provide financial protection and peace of mind against various risks. Here are some key categories and details about insurance services...</p>
                </div>
            </div></Link> 
          </div>
        ) : (
          <div className='h7'>
            <h2>H7 Network Blog</h2>
            <iframe src="https://tracsrj.apttests.com/proxy" />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
