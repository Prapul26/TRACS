import React, { useState } from 'react'
import './Members.css'
import abd2 from '../../assets/abd2.png'
import { IoHeart } from "react-icons/io5";
import pd2 from '../../assets/pd2.png'
import Footer from '../../components/Footer/Footer'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaProductHunt } from "react-icons/fa";
import Header from '../../components/Header/Header'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidCertification } from "react-icons/bi";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdCategory } from "react-icons/md";
import Navbar from '../../components/Navbar/Navbar';
import MemData from '../../components/Data/MemData';
const Members = () => {
  const [connect, setConnect] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const [category, setCategory] = useState('');
  const [state, setState] = useState('');
  const [location, setLocation] = useState('');
  const [member, setMember] = useState('');
  const [connection, setConnection] = useState('');
  const [order, setOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const thisPageItem = MemData.slice(firstItemIndex, lastItemIndex);
  const pages = [];
  for (let i = 1; i <= MemData.length; i++) {
    pages.push(i);

  }
  const handelMember = (event) => {
    const value = event.target.value;
    setMember(value);
    console.log(value)
  };
  const handelConnection = (event) => {
    const value = event.target.value;
    setConnection(value)
    console.log(value)
  };
  const handelOrder = (event) => {
    const value = event.target.value;
    setOrder(value);
    console.log(value)
  }
  const handelConnect = () => {
    setConnect(!connect)
  }
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("selected option: " + selectedOption)
  }

  const handelCategory = (event) => {
    const value = event.target.value;
    setCategory(value);
    console.log("selected category :" + value)
  }
  const handelState = (event) => {
    const value = event.target.value;
    setState(value);
    console.log("Selected state: " + value);
  };
  const handelLocation = (event) => {
    const value = event.target.value;
    setLocation(value);
    console.log("Selected location: " + value);
  };
  ;

  return (
    <div>
      <Header />
      <Navbar />
      <div className='m_u'>
        <h1>MEMBERS</h1>
        <div className='meminput'>
          <div className='meminput2'>
            <input placeholder='What are you lokking for' />
            <select onChange={handelCategory}>
              <option value='' disabled selected>Select Category</option>
              <option value='category1'>Category 1</option>
              <option value='category2'>Category 2</option>
              <option value='category3'>Category 3</option>
            </select>
          </div>
          <div className='meminput3'>
            <select onChange={handelState}>
              <option value='' disabled selected>State</option>
              <option value='state1'>State 1</option>
              <option value='state2'>State 2</option>
              <option value='state3'>State 3</option>
            </select>
            <select onChange={handelLocation}>
              <option value='' disabled selected>All Locations</option>
              <option value='location1'>Location 1</option>
              <option value='location2'>Location 2</option>
              <option value='location3'>Location 3</option>
            </select>
          </div>

        </div>
        <div className='membutton'>
          <button > Search</button>
        </div>
      </div>
      <div className='memdata'>
        <div className='memdata1'>
          <select onChange={handelMember}>
            <option value='' disabled selected> Select Member Type</option>
            <option value='member1'>Member 1</option>
            <option value='member2'>Member 2</option>
            <option value='member3'>Member 3</option>

          </select>
          <select onChange={handelConnection}>
            <option value='' disabled selected>Select Connection type</option>
            <option value='connection1'>Connection 1</option>
            <option value='connection2'>Connection 2</option>
            <option value='connection3'>Connection 3</option>
          </select>
          <select onChange={handelOrder}>
            <option value='' disabled selected> Default Order</option>
            <option value='order1'>Order1</option>
            <option value='order2'>Order2</option>
            <option value='order3'>Order3</option>
          </select>
        </div>
        {thisPageItem.map((data, index) => (<div className='memcard' key={index}>
          <div className='mempic'>
            <div className='memimg'>
              <img src={data.image} /></div>
            <div >
              <img className='mempro' src={data.profilePic} />
            </div>
            <div className='memname'> <h3>Swaran Jeeth</h3></div>
          </div>
          <div className='memd'>
            <button>{data.member}</button>
            <h2>{data.company}</h2>
            <ul>
              <li> <MdOutlineSupportAgent />{data.agent}</li>
              <li><FaLocationDot />{data.location}</li>
              <li><BiSolidCertification />{data.certification}</li>
              <li><FaProductHunt />{data.products}</li>
              <li><MdCategory /> {data.tag}</li>
            </ul>
          </div>
          <div className='memb'>  <button style={{ backgroundColor: "skyblue" }}> <IoHeart />ADD Favorite</button>
            <button style={{ backgroundColor: "orange" }} onClick={handelConnect} >Connect {connect ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}</button> {connect && (
              <div className='dropdown'>
                <label>
                  <input
                    type='radio'
                    value='champion'
                    checked={selectedOption === 'champion'}
                    onChange={handleOptionChange}
                  />
                  Champion
                </label>
                <label>
                  <input
                    type='radio'
                    value='referral'
                    checked={selectedOption === 'referral'}
                    onChange={handleOptionChange}
                  />
                  Referral
                </label>
              </div>
            )}</div>

        </div>))}
     
      </div>   <nav className='pagenav'> <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}>Prev</button>
          {
            pages.map((page, index) => {
              return (

                <button key={index} className='pagebtn' onClick={() => setCurrentPage(page)}>{page}</button>
              )
            })
          }
          <button onClick={()=>setCurrentPage(prev=>Math.min(prev+1))}>next</button>
        </nav>
      <Footer />

    </div>
  )
}
export default Members;