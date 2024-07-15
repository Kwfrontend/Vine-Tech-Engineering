import React, {useContext, useState} from 'react'

import {Imgs} from '../../data/galleryImages';

import "./gallery.styles.css"


const Gallery = () => {
  const [imgState, setImageState] = useState(null)

  const openImg = (number) => {
    setImageState(number);
  }

  const closeImg = () => {
    setImageState(null);
  }

  console.log(imgState)

  return (
    <div className={imgState === null ? 'gallery-container' : 'gallery-container img-display-container'}>
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
            className={imgState !== item.number ? "img" : "img enlarge"}
            />
        </div>
      );
    })}
    <button onClick={closeImg} className={imgState === null ? "close-img-btn" : "close-img-btn enable"}> close</button>
    </div>
  )
}

export default Gallery;
