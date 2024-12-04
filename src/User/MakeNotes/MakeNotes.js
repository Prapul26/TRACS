import React from 'react'
import './MakeNotes.css'
import ReactQuill from 'react-quill'
import UserHeader from '../UserHeader/UserHeader'
import { useState } from 'react'
const MakeNotes = () => {
    const [value, setValue] = useState("");
    return (
        <div className='makeNotes-container'>
            <div><UserHeader /></div>
            <div className='backButton-1'>
                <button>Back</button>
            </div>
            <div className='makeNotes-holder'>
                <div className='makeNotesH1'>
                    <h3>Make a Note</h3>
                </div>
                <form className='makeNotes-form'>
                    <h3>Select Memeber <span style={{ color: "red" }}>*</span></h3>
                    <select>
                        <option value='value1'></option>
                        <option><input /></option>
                    </select>
                    <h3>Category <span style={{ color: "red" }}>*</span></h3>
                    <select>
                        <option value='' disabled selected>Select Category</option>
                        <option value='value1'>Intro</option>
                        <option value='value2'>Follow Up</option>
                    </select>
                    <h3>Select Template <span style={{ color: "red" }}>*</span></h3>
                    <select>
                        <option value='' disabled selected>Select Template</option>
                        <option value='value1'>Meeting</option>
                        <option value='value1'>Follow-up</option>
                    </select>
                    <h3>Notes <span style={{ color: "red" }}>*</span></h3>
                    
                </form>

            </div>
        </div>
    )
}
export default MakeNotes