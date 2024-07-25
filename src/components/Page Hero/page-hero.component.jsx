import "./page-hero.styles.css";

import React from 'react'

import Img1 from '../../assets/page hero images/WhatsApp Image 2024-06-06 at 17.43.50 (4).jpeg';
import Img2 from '../../assets/page hero images/WhatsApp Image 2024-06-06 at 17.43.51 (4).jpeg';
import Img3 from '../../assets/page hero images/WhatsApp Image 2024-07-09 at 11.09.53.jpeg';




const PageHero = (props) => {
    const {img,children} = props;

  return (
    <section id="hero">
      <div className="page-hero-container">
        <div className="page-hero-cover">
          <div className="page-hero">
            {
              img === 1 ? <img src={Img1} className="page-hero-img"/> : img === 2 ? <img src={Img2} className="page-hero-img"/> : img === 3 ? <img src={Img3} className="page-hero-img"/> : ''
            }
          </div>
            <h1 className="page-hero-title">{children}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHero
