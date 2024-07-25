import Footer from "../../components/Footer/footer.component";

import PageHero from "../../components/Page Hero/page-hero.component";
import GallerySection from "../../sections/gallery-section/gallery-section.component";
import "./gallery-page.styles.css";

import React from 'react'

const GalleryPage = () => {
  return (
    <>
      <PageHero img={1}>Gallery</PageHero>
      <GallerySection/>
      <Footer />
    </>
  )
}

export default GalleryPage
