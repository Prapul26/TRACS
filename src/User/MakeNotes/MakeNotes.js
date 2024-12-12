import React, { useState } from 'react';
import './MakeNotes.css';
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';
const MakeNotes = () => {
    const [value, setValue] = useState("");
    const [member, setMember] = useState("");
    const [category, setCategory] = useState("");
    const [template, setTemplate] = useState("");
    const [text, setText] = useState("");
    const [file, setFile] = useState(null);

    const handleNotesForm = (e) => {
        e.preventDefault();
        console.log({
            member,
            category,
            template,
            text,
            file
        });
    };

    return (
        <div className='makeNotes-container'>
            <UserHeader />
            <div className='backButton-1'>
             <Link to='/myNotes'> <button>Back</button></Link>
            </div>
            <div className='makeNotes-holder'>
                <div className='makeNotesH1'>
                    <h3>Make a Note</h3>
                </div>
                <form className='makeNotes-form' onSubmit={handleNotesForm}>
                    <h3>Select Member <span style={{ color: "red" }}>*</span></h3>
                    <select value={member} onChange={(e) => setMember(e.target.value)} required>
                        <option value='' disabled>Select Member</option>
                        <option value='member1'>Member 1</option>
                        <option value='member2'>Member 2</option>
                    </select>
                    <h3>Category <span style={{ color: "red" }}>*</span></h3>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                        <option value='' disabled>Select Category</option>
                        <option value='intro'>Intro</option>
                        <option value='followUp'>Follow Up</option>
                    </select>
                    <h3>Select Template <span style={{ color: "red" }}>*</span></h3>
                    <select value={template} onChange={(e) => setTemplate(e.target.value)} required>
                        <option value='' disabled>Select Template</option>
                        <option value='meeting'>Meeting</option>
                        <option value='followUp'>Follow-up</option>
                    </select>
                    <h3>Notes <span style={{ color: "red" }}>*</span></h3>
                    <textarea value={text} onChange={(e) => setText(e.target.value)} required />
                    <h3>Upload File</h3>
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default MakeNotes;
