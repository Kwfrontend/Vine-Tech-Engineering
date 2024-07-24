import ContactForm from "../../components/Contact Form/contact-form.component";
import "./contact-form-section.styles.css";

import { ReactComponent as ContactImg} from '../../assets/contact-form-img.svg';

const ContactFormSection = () => {
  return (
    <section id="contact">
      <>
      <div className='contact-form-section-container'>
        <h1 className="contact-form-section-headline">Contact Us</h1>
        <div className="form-container">
          <div className="form-side-text-container">
            <ContactImg className="form-side-img"/>
            <span className="form-side-text">
            Should you have any queries regarding our products or services, please feel free to contact us at your leisure by telephone (021) 887 3320 or Mark Lotter 083 289 1170.
            <br/><br/>Rest assured that all our work is guaranteed to meet your highest expectations.
            <br/><br/>We look forward of being service and assistance to you! Assuring you of our best service at all times.
            <br/><br/>Regards
            <br/><br/>Mark Lotter: DIRECTOR
            </span>
          </div>
          <ContactForm className="form"/>  
        </div>
      </div>
      </>
    </section>
  )
}

export default ContactFormSection
