import React, { useState } from 'react'
import "./gallery.styles.css";

import { IoMdClose } from "react-icons/io";

import Img1 from '../../assets/gallery/20230831_102517.jpg';
import Img2 from '../../assets/gallery/20231113_154222.jpg';
import Img3 from '../../assets/gallery/20240123_092548.jpg';
import Img4 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.48 (2).jpeg';
import Img5 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.48 (4).jpeg';
import Img6 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.49 (1).jpeg';
import Img7 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.49 (10).jpeg';
import Img8 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.49 (3).jpeg';
import Img9 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.49 (8).jpeg';
import Img10 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.49.jpeg';
import Img11 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.50 (10).jpeg';
import Img12 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.50 (11).jpeg';
import Img13 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.50 (2).jpeg';
import Img14 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.50 (4).jpeg';
import Img15 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.50.jpeg';
import Img16 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.51 (10).jpeg';
import Img17 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.51 (4).jpeg';
import Img18 from '../../assets/gallery/18.jpg';
import Img19 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.51 (8).jpeg';
import Img20 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.51.jpeg';
import Img21 from '../../assets/gallery/WhatsApp Image 2024-06-06 at 17.43.52 (2).jpeg';
import Img22 from '../../assets/gallery/WhatsApp Image 2024-07-09 at 11.09.53.jpeg';
import Img23 from '../../assets/gallery/23.jpg';



const Gallery = () => {

    let data = [
        {
            id:1,
            imgSrc: Img1,
        },
        {
            id:2,
            imgSrc: Img2,
        },
        {
            id:3,
            imgSrc: Img3,
        },
        {
            id:4,
            imgSrc: Img4,
        },
        {
            id:5,
            imgSrc: Img5,
        },
        {
            id:6,
            imgSrc: Img6,
        },
        {
            id:7,
            imgSrc: Img7,
        },
        {
            id:8,
            imgSrc: Img8,
        },
        {
            id:9,
            imgSrc: Img9,
        },
        {
            id:10,
            imgSrc: Img10,
        },
        {
            id:11,
            imgSrc: Img11,
        },
        {
            id:12,
            imgSrc: Img12,
        },
        {
            id:13,
            imgSrc: Img13,
        },
        {
            id:14,
            imgSrc: Img14,
        },
        {
            id:15,
            imgSrc: Img15,
        },
        {
            id:16,
            imgSrc: Img16,
        },
        {
            id:17,
            imgSrc: Img17,
        },
        {
            id:18,
            imgSrc: Img18,
        },
        {
            id:19,
            imgSrc: Img19,
        },
        {
            id:20,
            imgSrc: Img20,
        },
        {
            id:21,
            imgSrc: Img21,
        },
        {
            id:22,
            imgSrc: Img22,
        },
        {
            id:23,
            imgSrc: Img23,
        },
        
    ]

    const [model ,setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');

    const getImg = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }

  return (
    <>  
        <div className={model ? 'model open' : 'model'}>
            <img src={tempImgSrc}/>
            <IoMdClose onClick={() => setModel(false)}/>
        </div>  

        <div className="gallery">
            {
                data.map((item, index) => {
                    return (
                        <div className='pics' key={index} onClick={() => getImg(item.imgSrc)}>
                            <img src={item.imgSrc} className='max-width'></img>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Gallery;
