import React from 'react'
import './myMembership.css';
import UserHeader from '../UserHeader/UserHeader';
import { Link } from 'react-router-dom';
 const MyMembership = () => {
  return (
    <div className='mbody'>
        <UserHeader />
        <div className='membeershipContainer'>
        <Link to='/orderHistory'> <button  >Order History</button></Link>   
<div className='membertable'>
    <div className='tableh1'><h1>Currently Active Package</h1></div>
    <div className='tableM'>
        <table>
            <tbody>
                <tr>
                    <td>Package name</td>
                    <td>Trail</td>

                </tr>
                <tr>
                    <td>Price</td>
                    <td>$ 0</td>
                </tr>
                <tr> 
                    <td>Purchase Date</td>
                    <td>18 October ,2024</td>
                    
                </tr>
                <tr>
                    <td>Expired Date</td>
                    <td>17 November,2024</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
        </div>
    </div>
  )
}
export default MyMembership;