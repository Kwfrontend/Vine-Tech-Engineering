import "./page-hero.styles.css";

import React from 'react'

import {ReactComponent as Img1} from '../../assets/page hero images/about.svg';
import {ReactComponent as Img2} from '../../assets/page hero images/about.svg';
import {ReactComponent as Img3} from '../../assets/page hero images/about.svg';




const PageHero = (props) => {
    const {img,children} = props;

  return (
    <section id="hero">
      <div className="page-hero-container">
        <div className="page-hero-cover">
          <div className="page-hero">
            {
              img === 1 ? <Img1/> : img === 2 ? <Img2/> : img === 4 ? <Img3/> : ''
            }
          </div>
            <h1 className="page-hero-title">{children}</h1>
        </div>
      </div>
    </section>
  )
}

export default PageHero
