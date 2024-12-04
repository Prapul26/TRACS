import React from 'react'
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';
import './MyNotes.css'
const MyNotes = () => {
    return (
        <div className='myNotesContainer'>

            <div><UserHeader /></div>
            <div className='profileNav'>

                <div className='proh3'><h3>My Notes</h3></div>
                <div className='Hedh3'>
                    <Link to='/home'><h3>Home</h3></Link> <span>.</span><Link to='/myMembership'><h3>Dasboard</h3></Link><span>.</span><Link to='/myNotes'><h3>My Notes</h3></Link>
                </div>
            </div>
            <div className='myNotes-holder'>
                <div className='button1'>
                  <Link to='/makeNotes'><button>Make a Note</button></Link>  
                </div>
                <div className='noteshover1'>
                    <div className='searchGO'>
                        <input type='text' placeholder='Search' /><button>Go</button>
                    </div>
                    <div className='selectNotes'>
                        <label>Sort by</label>
                        <select>
                            <option value='' disabled selected>Select</option>
                            <option value='value1'>Created Data</option>
                            <option value='value2'>Member Data </option>
                            <option value='value3'>Reminder Data</option>
                        </select>
                    </div>
                    <div className='selectNotes2'>
                        <select>
                            <option value='' disabled selected>Select</option>
                            <option value='value1'>Self Notes</option>
                            <option value='value2'>Memeber Notes</option>
                        </select>
                    </div>
                </div>
                <div className='tablenotes'>
                    <button>Filter</button>
                    <table>
                        <thead>
                            <td>Notes</td>
                            <td>Name</td>
                            <td>Category</td>
                            <td>Created On</td>
                            <td>Reminder Date</td>
                            <td>Action</td>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>

                </div>
            </div>


        </div>
    )
}
export default MyNotes;