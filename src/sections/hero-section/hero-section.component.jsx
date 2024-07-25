import React from 'react'

import "./hero-section.styles.css";
import ImageCarousel from '../../components/Image Carousel/image-carousel.component';

import {slides} from "../../data/carouselData";

const HeroSection = () => {
  return (
    <>
      <section id='hero'>
        <div className='hero-section-container'>
          <ImageCarousel slides={slides}/>
        </div>
      </section>
    </>
  )
}

export default HeroSection
