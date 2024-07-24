import "./gallery-preview-section.styles.css";

import {Imgs} from '../../data/gallery-preview-Images';
import Button from "../../components/Button/button.component";

import { MdArrowForwardIos } from "react-icons/md";
import PreviewGallery from "../../components/PreviewGallery/previewgallery.component";

const GalleryPreviewSection = () => {
  return (
    <div className="gallery-preview-section">
        <h1 className="gallery-preview-healine bold">Our high quality work </h1>
        <div className="preview-gallery-container">
          <PreviewGallery  Imgs={Imgs} />
        </div>
        <div className="preview-gallery-cta">
          <Button buttonStyle="btn--outline" buttonSize="btn--large" href={'gallery'}><span className="bold">View Gallery <MdArrowForwardIos className="right-arrow-icon" /></span></Button>
        </div>
    </div>
  )
}

export default GalleryPreviewSection;
