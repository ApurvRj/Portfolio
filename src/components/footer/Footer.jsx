import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Apurv Raj</a>

      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer_social'>
        <a href='https://m.facebook.com/home.php?paipv=0&eav=AfazWZ0lHjZP_z7KxhHFhAdVKD06ohX5aDVJ13G4qYKP7dJZGYdQmHiJE8EQ934_Rgc&tbua=1' target='_blank'><FaFacebookF/></a>
        <a href='https://instagram.com/apurv___raj' target='_blank'><AiFillInstagram/></a>
      </div>

      <div className='copyright'>
        <small>&copy; Apurv Raj, All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer