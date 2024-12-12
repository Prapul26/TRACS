import React from 'react'
import { Link } from 'react-router-dom';
import './NotesTemplate.css'
import UserHeader from '../UserHeader/UserHeader';
const NotesTemplate = () => {
  return (
    <div>
      <div><UserHeader />
      </div>
      <div>
        <div className='profileNav'>

          <div className='proh3'><h3>My Notes</h3></div>
          <div className='Hedh3'>
            <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/myNotes'><h3>My Notes</h3></Link>
          </div>
        </div>
      </div>
      <div className='notes-template'>
        <button>Add Template</button>
      </div>
      <div className='templateTable'>
        <table>
          <thead>
            <td>Template Name</td>
            <td>Notes</td>
            <td>Action</td>
          </thead>
        </table>
      </div>

    </div>
  )
}
export default NotesTemplate;