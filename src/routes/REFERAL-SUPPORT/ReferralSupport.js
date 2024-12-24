import React from 'react'
import './ReferralSupport.css'
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
const ReferralSupport = () => {
    const tableData = [
        {
          title: 'Insurance Service',
          category: 'Category1',
          author: 'Swaran Jeeth',
          replies: 0,
          postedOn: 'July 09, 2024'
        }
      ];
    return (
        <div><Header />
            <Navbar />
            <div className='ph1'><div className='p1h1'><h1>Referral Support</h1></div></div>
<div className='refcontainer'>
    <div className='rs1'>
        <select>
            <option  value='' disabled selected> Select Category</option>
            <option value='categor1'> Category 1</option>
            <option  value='categor2'>  Category 2</option>
            <option  value='categor3'> Category 3</option>
            <option  value='categor4'> Category 4</option>
        </select>
        <input type='text' placeholder='What are you looking for ?'/>
        <button>Go</button> 
    </div>
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Author</th>
            <th>Replies</th>
            <th>Posted On</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{data.title}</td>
              <td>{data.category}</td>
              <td>{data.author}</td>
              <td>{data.replies}</td>
              <td>{data.postedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

</div>
            <Footer /></div>
    )
}
export default ReferralSupport;