import './contact-form.styles.css'

import Button from '../Button/button.component'

import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactForm= () => {
  const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_wgss2n4', 'template_2jwllfw', form.current, {
            publicKey: 'eAL6Ld56kGXRhalpx',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
  return (
    <div className="contact-form-section-container">
    <div className="contact-form-container">
        <div className="contact-form-text-container">
            <h2 className="contact-form-subheader">SCHEEDULE FREE APPOINTMENT</h2>
            <h1 className="contact-form-header">Let's Get In Touch</h1>
        </div>
        <form action="" className="contact-form" ref={form} onSubmit={sendEmail}>
            <label className="contact-form-label">Full Name</label><br/>
                <input className="contact-form-input" type="text"  name='user_fullname' required/> <br/>
        <div className="contact-form-label-sml-container">
            <label className="contact-form-label">Phone</label>
            <label className="contact-form-label">Email</label><br/>
        </div>
                <input className="contact-form-input input-sml " type="tel"  name='user_phone' />
                <input className="contact-form-input input-sml " type="email"  name='user_email' required /><br/>
            <label className="contact-form-label">Address</label><br/>
                <input className="contact-form-input" type="text"  name='user_address' /><br/>
            <label className="contact-form-label">Message</label><br/>
                <textarea className="contact-form-input-msg" name='user_message' ></textarea><br/>
                <Button buttonStyle="" type="submit">Submit</Button>
        </form>
    </div>
</div>
  );
}

export default ContactForm;

