import ContactForm from "../../components/Contact Form/contact-form.component";
import "./contact-form-section.styles.css";

const ContactFormSection = () => {
  return (
    <div className='contact-form-section-container'>
      <h1 className="contact-form-section-headline">Contact Us</h1>
      <div className="form-container">
        <div className="form-side-text-container">fdas</div>
        <ContactForm className="form"/>  
      </div>
    </div>
  )
}

export default ContactFormSection
