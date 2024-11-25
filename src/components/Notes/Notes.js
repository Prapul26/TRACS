import React from 'react'
import './Notes.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Notes = () => {
  return (
    <div className='notesContainer'>
    <Header/>
    <Navbar/>
    <div className='notes'>
      <h2 style={{color: "white"}}>My Notes for SwaranJeeth</h2>
    </div>
    <Footer/>
</div>
  )
}
export default Notes;