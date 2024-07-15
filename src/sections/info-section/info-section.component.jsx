import React from 'react'

import './info-section.styles.css';

import Button from '../../components/Button/button.component';

const InfoSection = () => {
  return (
    <div className="info-section-container">
      <h1 className="info-headline">Vine Tech Engineering</h1>
      <div className="info-container">
        <span className="bold">VINE TECH ENGINEERING CC: Pioneering Stainless Steel Solutions for the Food and Wine Industry</span><br/>
        <span className='info'>Delivering Exceptional Service and Custom Fittings Since 1997, Proudly Serving the Boland and Surrounding Areas with Comprehensive Engineering Services, Including Pipe Installations, Mash Coolers, Tank Mixers, and More. Our Commitment to Quality and Customer Satisfaction Ensures Every Project Meets Your Highest Expectations</span><br/>
        <span className='underlined'>Other services and products provided by us include the following:</span>
        <ul className='info-list-container'>
          <li>1. Pipe Installations – Stainless Steel & PVC</li>
          <li>2. Cat Walks</li>
          <li>3. Mash Coolers</li>
          <li>4. Side Glasses</li>
          <li>5. Spraying Units </li>
          <li>6. Tank Mixers </li>
          <li>7. NW Gaskets & Tank door rubbers </li>
          <li>8. NW Fittings, Valves & S/S Fitting Boards </li>
          <li>9. Sample Keys</li>
          <li>10. Wine Hose & Stainless Steel hose Reels </li>
          <li>11. C-Spanners</li>
          <li>12. Barrel Fillers & Hand held barrel washers</li>
          <li>13. Servicing of pumps</li>
          <li>14. General Stainless Steel engineering and maintenance</li>
        </ul>
      </div>
      <Button>Get in Touch</Button>
    </div>
  )
}

export default InfoSection;
