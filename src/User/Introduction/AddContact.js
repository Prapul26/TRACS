import React, { useState, useEffect } from 'react';
import './AddContact.css';
import { useNavigate, useLocation } from 'react-router-dom';
import UserHeader from '../UserHeader/UserHeader';
import { saveContactsToStorage, loadContactsFromStorage } from '../utils/storageUtils';

const AddContact = () => {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [mail, setMail] = useState('');
  const navigate = useNavigate();
  const location = useLocation(); // Use useLocation to access the state passed

  useEffect(() => {
    if (location.state?.contact) {
      const { firstName, lastName, email } = location.state.contact;
      setFirst(firstName);
      setLast(lastName);
      setMail(email);
    }
  }, [location.state]);

  const handleAddContact = (event) => {
    event.preventDefault();
    const newContact = {
      firstName: first,
      lastName: last,
      email: mail,
      createdOn: new Date().toISOString(),
    };

    const contacts = loadContactsFromStorage();
    if (location.state?.contact) {
      // Edit existing contact
      const updatedContacts = contacts.map((contact) =>
        contact.email === location.state.contact.email ? newContact : contact
      );
      saveContactsToStorage(updatedContacts);
    } else {
      // Add new contact
      contacts.push(newContact);
      saveContactsToStorage(contacts);
    }

    navigate('/contacts');
  };

  return (
    <div>
      <UserHeader />
      <div className='addContacts'>
        <form onSubmit={handleAddContact}>
          <label>First Name</label>
          <input
            type='text'
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
          <label>Last Name</label>
          <input
            type='text'
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            type='email'
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            required
          />
          <button type='submit' style={{ background: 'blue', color: 'white' }}>
            {location.state?.contact ? 'Update Contact' : 'Add Contact'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddContact;
