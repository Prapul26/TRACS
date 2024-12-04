import React, { useState } from 'react'
import './ex1.css'
 const Ex1 = () => {
    const [element,setElement]=useState(null);
    const hd1=()=>{
        setElement('ac1')
    };
    const hd2=()=>{
        setElement('ac2')
    }
  return (
    <div>
    <div className={`ac1 ${element==='ac1'?'border':""}`} onClick={hd1}>
        ac1
    </div>
    <div className={   `ac2 ${element==='ac2'?'border':''}`} onClick={hd2}> ac2 
        <input type='file' ></input></div></div>
  )
}
export default Ex1;