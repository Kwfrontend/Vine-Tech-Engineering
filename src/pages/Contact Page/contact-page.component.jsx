import ContactForm from "../../components/Contact Form/contact-form.component";
import Footer from "../../components/Footer/footer.component";
import PageHero from "../../components/Page Hero/page-hero.component";
import ContactFormSection from "../../sections/contact-form-section/contact-form-section.component";
import "./contact-page.styles.css";


import React from 'react'

const ContactPage = () => {
  return (
    <>
    
        <PageHero img={1} alt='contact us'>Contact Us</PageHero>
        {/* <h1 className="contact-page-headline">Send us a email</h1>
        <div className="contact-page-container">
          <div className="contact-page-text-container">
              <h1 className="contact-page-text-headline">Book a meeting</h1>
              <span className="contact-page-text-subheadline">Meet with a highly qualified engineer to identify & discuss your needs.</span>
              <ul className="contact-page-text-list-container">
                <li className="contact-page-text-list-headline ">
                  1. Schedule a time & place <br/>
                </li>
                  <span className="contact-page-text-list-subheadline">
                    Meet with someone from our team to discuss your requirements at a time that's convenient for you.
                  </span>
                <li className="contact-page-text-list-headline ">
                  1. Schedule a time & place <br/>
                </li>
                  <span className="contact-page-text-list-subheadline">
                    Meet with someone from our team to discuss your requirements at a time that's convenient for you.
                  </span>
                <li className="contact-page-text-list-headline ">
                  1. Schedule a time & place <br/>
                </li>
                  <span className="contact-page-text-list-subheadline">
                    Meet with someone from our team to discuss your requirements at a time that's convenient for you.
                  </span>
              </ul>
          </div>
          <div className="contact-page-form-container">
            <ContactForm/>
          </div>
        </div> */}
        <ContactFormSection/>
        <Footer/>
    </>
  )
}

export default ContactPage;
