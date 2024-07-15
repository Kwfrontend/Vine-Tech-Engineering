import React from 'react'

import './home-page.styles.css'
import HeroSection from '../../sections/hero-section/hero-section.component';
import InfoSection from '../../sections/info-section/info-section.component';
import Footer from '../../components/Footer/footer.component';
import Gallery from '../../components/Gallery/gallery.component';

const HomePage = () => {
  return (
    <>
      <HeroSection/>
      <InfoSection/>
      <Gallery/>
      <Footer/>
    </>
  );
}

export default HomePage;