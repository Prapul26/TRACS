import React from 'react'
import './Payment.css'
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { CiCreditCard1 } from "react-icons/ci";
import Footer from '../Footer/Footer';
const Payment = () => {
    return (
        <div className='paymentContainer'>
            <Header />
            <Navbar />
            <div className='payh'> <div className='ph41'></div><h1 style={{ color: 'white' }}> Payment Page</h1></div>
            <div className='payment-holder'>
                <div className='sh'><h1>Stripe</h1></div>
                <div className='payn'>
                    <div className='firstn'>
                        <label>Name</label>
                        <input type='text' />
                    </div>
                    <div className='lastn'>
                        <label>Last Name</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='address'>
                    <div className='emailn'>
                        <label>Email</label>
                        <input type='email' />
                    </div>
                    <div className='street'>
                        <label> Street Address</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='city'>
                    <div className='cityn'>
                        <label>city</label>
                        <input type='text' />
                    </div>
                    <div className='state'>
                        <label> Street Address</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='code'>
                <div className='pin'>
                        <label>Postal Code</label>
                        <input type='text' />
                    </div>
                    <div className='Mobile'>
                        <label> Mobile Number</label>
                        <input type='text' />
                    </div>
                </div>
                <div className='cardp'>
                    <label>Card Number</label>
                    <div className='card'>
                    <CiCreditCard1 size={30}/>
                        <div className='cardn'><input type='text' placeholder='card number'/></div>
                        <div className='cardy'><input type='text' placeholder='YY'/></div>
                        <div  className='cardm'><input type='text'placeholder='MM'/></div>
                        <div  className='cardd'><input type='text' placeholder='DD'/></div>
                    </div>
                </div>
                <div className='stripe'>
                    <button>Pay With Stripe</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Payment;