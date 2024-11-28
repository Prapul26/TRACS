import React from 'react'
import './OrderHistory.css'
import UserHeader from '../UserHeader/UserHeader';
import { GrStatusDisabledSmall } from "react-icons/gr";
import { Link } from 'react-router-dom';
 const OrderHistory = () => {
  return (
    <div>
        <UserHeader/>
        <div className='OrderHistoryContainer'>
            <div className='oh1'>

<div className='oh3'><Link to='/home'><h3>Home .</h3></Link><Link to='/myMembership'><h3> Dasboard . </h3></Link><h3>Orders</h3></div>
            </div>
            <div className='oh2'><h3>Order History</h3></div>
            <div className='orderBack'>
                <Link to='/myMembership'><button>Back</button></Link></div>
            <div className='ordtable'>
                <table>
                    <thead>
                        <tr> <td>Package</td>
                        <td>Purchase Date</td>
                        <td>Expired Date</td>
                        <td>Price</td>
                        <td>Payment Method</td>
                        <td>Transaction Id</td>
                        <td>Status</td></tr>
                       
                    </thead>
                    <tbody>
                        <tr>
                            <td>Trial</td>
                            <td>2024-10-18</td>
                            <td>2024-11-17</td>
                            <td>	$0</td>
                            <td></td>
                            <td></td>
                          <Link to='/statusPage'><td><GrStatusDisabledSmall size={27} color='green'/></td></Link>  
                        </tr>
                        <tr>
                            <td>Trial</td>
                            <td>2024-09-23</td>
                            <td>	
                            2024-10-23</td>
                            <td>	$0</td>
                            <td></td>
                            <td></td>
                            <Link to='/statusPage'> <td><GrStatusDisabledSmall size={27} color='green'/></td></Link>  
                        </tr>
                    </tbody>
                </table>

            </div>
        </div>
    </div>
  )
}
export default OrderHistory;