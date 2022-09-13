import React from 'react';
import './Portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.jpg'

const data=[
  {
    id:1,
    image: IMG1,
    title:'Alumni/Student Management System',
    github:'https://github.com/ApurvRj/Alumni-Student-Management-System',
  },
  {
    id:2,
    image: IMG2,
    title:'Architecture & Interior Design',
    github:'https://github.com/ApurvRj/Architecture-and-Interior-Design',
  },
  {
    id:3,
    image: IMG3,
    title:'Youtube Clone',
    github:'https://github.com/ApurvRj/YoutubeClone',
  },
  {
    id:4,
    image: IMG4,
    title:'Health Tracker Application',
    github:'https://github.com/ApurvRj/Health-Tracker-Application',
  },
  {
    id:5,
    image: IMG5,
    title:'PortFolio',
    github:'https://github.com/ApurvRj/Portfolio',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className='portfolio_content'>
              <div className='portfolio_image'>
                <img src={image} alt={title}></img>
              </div>
              <h3>{title}</h3>
              <div className='portfolio_cta'>
                  <a href={github} className='btn' target='_blank'>Github</a>
              </div>
              </article>
            )
        })
        }
      </div>
    </section>
  )
}

export default Portfolio