import "./gallery-preview-section.styles.css";

import Gallery from "../../components/Gallery/gallery.component";

import {Imgs} from '../../data/gallery-preview-Images';
import Button from "../../components/Button/button.component";

import { MdArrowForwardIos } from "react-icons/md";

const GalleryPreviewSection = () => {
  return (
    <div className="gallery-preview-section">
        <h1 className="gallery-preview-healine bold">Our high quality work </h1>
        <div className="preview-gallery-container">
          <Gallery  Imgs={Imgs} GalleryType="preview"/>
        </div>
        <div className="preview-gallery-cta">
          <Button buttonStyle="btn--outline" buttonSize="btn--large"><span className="bold">View Gallery <MdArrowForwardIos className="right-arrow-icon" /></span></Button>
        </div>
    </div>
  )
}

export default GalleryPreviewSection;
