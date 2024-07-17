import React from 'react'

import './footer.styles.css';

import { ReactComponent as VTELogo } from '../../assets/logo.svg';
import Button from '../Button/button.component' ;

import GoogleApiWrapper from '../Google Map/google-map.component'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-top-container">
        <div className="logo-container">
          <VTELogo classname='logo'/>
        </div>
        <ul className="footer-list-container">
          <span>Menu</span>
          <li><a href='/'>Home</a></li>
          <li><a href='/about-us'>About Us</a></li>
          <li><a href='/gallery'>Gallery</a></li>
          <li><a href='/contact-us'>Contact Us</a></li>
        </ul>
        <ul className="footer-list-container">
          <span>Contact Us</span>
          <li>call us: +27 21 887 3320</li>
          <li>kyanwyss@gmil.com</li>
          <li>5 Linton Street, Unit 4, Plankenpark, Stellenbosch, 7600</li>
        </ul>
        <div className="footer-map-container">
          <GoogleApiWrapper/>
        </div>
      </div>
      <div className="footer-bottom-container">
        <div className='footer-bottom-text'><span> © VINE TECH  ENGINEERING </span>| All Rights Reserved | Made by Elevate Online</div>
        <Button href='#hero' className='btn' buttonSize='btn--large' >Back To Top</Button>
      </div>
    </div>
  )
}

export default Footer;