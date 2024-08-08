import "./gallery-preview-section.styles.css";

import {Imgs} from '../../data/gallery-preview-Images';
import Button from "../../components/Button/button.component";

import {NavLink } from 'react-router-dom';

import { MdArrowForwardIos } from "react-icons/md";
import PreviewGallery from "../../components/PreviewGallery/previewgallery.component";

const GalleryPreviewSection = () => {
  const scrollTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div className="gallery-preview-section">
        <h2 className="gallery-preview-healine bold">Our high quality work </h2>
        <div className="preview-gallery-container">
          <PreviewGallery  Imgs={Imgs} />
        </div>
        <div className="preview-gallery-cta">
          <NavLink to='/gallery' >
            <Button buttonStyle="btn--outline" buttonSize="btn--large"  onClick={scrollTop}><span className="bold">View Gallery <MdArrowForwardIos className="right-arrow-icon" /></span></Button>
          </NavLink>
        </div>
    </div>
  )
}

export default GalleryPreviewSection;
