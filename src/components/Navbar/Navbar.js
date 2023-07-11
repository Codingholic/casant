import React from 'react'
import "./Navbar.css"
import logo from "./logo/logoFW.webp"
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { AiOutlineBell } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import profile from "./logo/face.jpg"

const Navbar = () => {

  return (
    <div className='navigationBar'>
      <div className='NavBox1'>
        <img style={{height: "60px", width: "60px"}} src={logo} alt='' />
        <p>Cas Ant Private Ltd</p>
      </div>
      <div className='NavBox2'>
        <p>Wedding Events</p>
        <p>Corporate Events</p>
        <p>Rental Equipments</p>
        <p>About us</p>
        <p>Contact us</p>
        <p>Blog</p>
        <p>Updates</p>
      </div>
      <div className='NavBox3'>
        <div className='nav_icon'><BiSupport /></div>
        <div className='nav_icon'><BsFillJournalBookmarkFill /></div>
        <div className='nav_icon'><AiOutlineBell /></div>
        <div className='NavCircle'>
          <img src={profile} alt='/' />
        </div>
      </div>
    </div>
  )
}

export default Navbar