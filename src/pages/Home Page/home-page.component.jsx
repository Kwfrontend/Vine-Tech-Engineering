import React from 'react'

import './home-page.styles.css'
import HeroSection from '../../sections/hero-section/hero-section.component';
import InfoSection from '../../sections/info-section/info-section.component';
import Footer from '../../components/Footer/footer.component';
import GalleryPreviewSection from '../../sections/gallery-preview-section/gallery-preview-section.component';
import FaqSection from '../../sections/faq-section/faq-section.component';
import ContactFormSection from '../../sections/contact-form-section/contact-form-section.component';


const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <InfoSection/>
      <GalleryPreviewSection/>
      <FaqSection />
      <ContactFormSection/>
      {/* <Footer/> */}
    </>
  );
}

export default HomePage;