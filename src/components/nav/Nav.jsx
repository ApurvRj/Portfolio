import React from 'react';
import './Nav.css'
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {GoBook} from 'react-icons/go';
import {RiCustomerService2Fill} from 'react-icons/ri'
import {IoMdContact} from 'react-icons/io'
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav]=useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiTwotoneHome/></a>
      <a href='#about' onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience'onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><GoBook/></a>
      <a href='#portfolio' onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><RiCustomerService2Fill/></a>
      <a href='#contact' onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><IoMdContact/></a>
    </nav>
  )
}

export default Nav