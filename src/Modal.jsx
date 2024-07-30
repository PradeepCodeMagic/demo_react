import React, { useState } from 'react'
import './Modal.css'
import { CiUser } from "react-icons/ci";
import { FaRegHeart } from 'react-icons/fa';
import { IoBagOutline } from 'react-icons/io5';

export default function Modal() {

    const [showModal,setShowModal]=useState(false)

    let ModalChange=()=>{
        setShowModal(!showModal)
    }


  return (
    <div>
        <CiUser />
        <FaRegHeart />
        <IoBagOutline />
      <button className='btn' onClick={ModalChange} >  {showModal==true ? "Hide Modal" : "Show Modal"}  </button>

      <div className= { showModal==true ? " modal active" : "modal"}> Modal </div>

    </div>
  )
}
