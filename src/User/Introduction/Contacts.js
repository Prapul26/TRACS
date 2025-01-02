import React, { useState, useEffect } from 'react';
import './Contacts.css';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate
import UserHeader from '../UserHeader/UserHeader';
import * as XLSX from 'xlsx';
import { saveContactsToStorage, loadContactsFromStorage } from '../utils/storageUtils';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();  // Use useNavigate hook for navigation

  useEffect(() => {
    // Load contacts from localStorage on component mount
    const storedContacts = loadContactsFromStorage();
    setContacts(storedContacts);
  }, []);

  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 0 }); // Adjust header as needed
  
        // Filter out any empty rows
        const parsedData = jsonData.filter(row => row[0] && row[1] && row[2]).map((row) => ({
          firstName: row[0],
          lastName: row[1],
          email: row[2],
          createdOn: new Date().toISOString(),
        }));
  
        if (parsedData.length === 0) {
          console.log('No valid data found after filtering.');
        }
  
        const updatedContacts = [...contacts, ...parsedData];
        setContacts(updatedContacts);
        saveContactsToStorage(updatedContacts); // Save to localStorage
      };
      reader.readAsArrayBuffer(file);
    }
  
  
  };

  const handleDelete = (index) => {
    // Filter out the contact at the given index
    const updatedContacts = contacts.filter((contact, i) => i !== index);
    setContacts(updatedContacts); // Update state
    saveContactsToStorage(updatedContacts); // Save the updated contacts to localStorage
  };

  const handleEdit = (contact) => {
    // Navigate to addContacts page with contact data in state
    navigate('/addContacts', { state: { contact } });
  };

  return (
    <div>
      <div>
        <UserHeader />
      </div>
      <div className='profileNav'>
        <div className='proh3'>
          <h3>Contacts Management Template</h3>
        </div>
        <div className='Hedh3'>
          <Link to='/home'>
            <h3>Home</h3>
          </Link>
          <span>.</span>
          <Link to='/myMembership'>
            <h3>Dashboard</h3>
          </Link>
          <span>.</span>
          <Link to='/contacts'>
            <h3>Contacts</h3>
          </Link>
        </div>
      </div>
      <div className='ContactsManagement'>
        <div className='addContacts'>
          <input type='file' onChange={handleImport} />
          <div className='contactsButton'>
            <button style={{ background: 'blue', color: 'white' }} type='submit'>
              Import
            </button>
            <button style={{ background: 'green', color: 'white' }}>
              Download Sample Folder
            </button>
            <div className='addCon'>
              <Link to='/addContacts'>
                <button style={{ background: 'blue', color: 'white' }}>
                  Add Contacts
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div style={{ padding: '20px' }} className='contactsTable'>
          <table>
            <thead>
              <tr>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Email</td>
                <td>Created On</td>
                <td>Action</td>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact, index) => (
                <tr key={index}>
                  <td>{contact.firstName}</td>
                  <td>{contact.lastName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.createdOn}</td>
                  <td>
                    <button
                      className='edit-button'
                      onClick={() => handleEdit(contact)} // Pass the contact to the edit page
                    >
                      Edit
                    </button>
                    <button
                      className='delete-button'
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
