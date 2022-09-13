import React from 'react';
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_j7zoh54', 'template_dnwq9w5', form.current, 'NrJqKtZ1sE285vrWD')

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className='container contact_container'>
        <div className='contact_options'>
          <article className='contact_option'>
            <MdEmail className='icon'/>
            <h4>Email</h4>
            <h5>apurvraj101699@gmail.com</h5>
            <a href='mailto:apurvraj101699@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <BsMessenger className='icon'/>
            <h4>Messenger</h4>
            <h5>apurvraj</h5>
            <a href='https://m.me/100050380713953/' target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <IoLogoWhatsapp className='icon'/>
            <h4>WhatsApp</h4>
            <a href='https://api.whatsapp.com/send?phone+918579969829' target='_blank'>Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact