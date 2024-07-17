import React, { useState} from 'react'

import "./gallery.styles.css"


const Gallery = (props) => {
  const [imgState, setImageState] = useState(null)
  const {Imgs, GalleryType} = props;


  const openImg = (number) => {
    setImageState(number);
  }

  const closeImg = () => {
    setImageState(null);
  }

  return (
    <div className={GalleryType === "preview" ? "preview-gallery-container" : imgState === null ? 'gallery-container' : 'gallery-container img-display-container'}>
    {Imgs.map((item , idx)=> {
      return (
        <div className="img-container">
          <span className='title'>{item.title}</span>
          <img 
            src={item.imgSrc} 
            alt={item.alt} 
            onClick={() => {
              openImg(item.number);
              }} 
            key={idx} 
            className={imgState !== item.number ? "img" : "enlarge"}
            />
        </div>
      );
    })}
    {/* checkGalleryType === "preview" ? "display-none" :  */}
    <button onClick={closeImg} className={imgState === null ? "close-img-btn" : "close-img-btn enable"}> close</button>
    </div>
  )
}

export default Gallery;
