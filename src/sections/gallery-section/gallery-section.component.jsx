import React from 'react'
import './gallery-section.styles.css';

import Gallery from "../../components/Gallery/gallery.component";

const GallerySection = () => {
  return (
    <div className='gallery-section-container'>
      <h1 className="gallery-section-headline">Our Gallery</h1>
      <p className="gallery-section-subheadline">
        Explore our gallery to witness the precision and craftsmanship in our stainless steel fittings, installations, and engineering projects. From custom-made components to large-scale installations, our work exemplifies our dedication to quality and excellence, serving the food and wine industry with unmatched expertise and reliability.
      </p>
      <Gallery/>
    </div>
  )
}

export default GallerySection
