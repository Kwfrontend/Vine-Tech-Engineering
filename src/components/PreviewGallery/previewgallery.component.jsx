
import "./previewgallery.styles.css"


const PreviewGallery = (props) => {
  const {Imgs} = props;


  return (
    <div className="preview-gallery-container">
    {Imgs.map((item , idx)=> {
      return (
        <div className="img-container">
          <img 
            src={item.imgSrc} 
            alt={item.alt} 
            key={idx} 
            className="img"
            />
        </div>
      );
    })}
    </div>
  )
}

export default PreviewGallery;
