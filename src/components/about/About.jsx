import React from 'react';
import './About.css'
import ME from '../../assets/me-about.jpg'
import {BsAwardFill} from 'react-icons/bs'
import {FaUsers} from 'react-icons/fa'
import {VscProject} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-img'>
            <img src={ME} alt='me-img'/>
          </div>
        </div>

        <div className='about-content'>
          <div className='about-cards'>
            <article className='about-card'>
              <BsAwardFill className='about-icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>

            <article className='about-card'>
              <FaUsers className='about-icon'/>
              <h5>Clients</h5>
              <small>0</small>
            </article>

            <article className='about-card'>
              <VscProject className='about-icon'/>
              <h5>Projects</h5>
              <small>4+ Completed</small>
            </article>
          </div>

          <p>Apurv Raj is software engineer. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions. Looking to start the career as an entry-level software engineer with a reputed firm driven by technology.</p>

          <a href='#contact' className='btn btn-primary'>Let's Talk</a>

        </div>
        <div className='about__content'></div>
      </div>
    </section>
  )
}

export default About