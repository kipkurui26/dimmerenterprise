import { useState, useEffect } from "react";

const GalleryComponent = ({imageList}) => {
  const [currentImage, setCurrentImage] = useState(imageList[0].src);
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [imageList.length]);

  useEffect(() => {
    setCurrentImage(imageList[currentIndex].src);
  }, [currentIndex]);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setCurrentImage(imageList[index].src);
  };

  return (
    <figure className="gallerycomponent">
      <div className="gallerycomponent__figure">
        <img
          src={currentImage}
          alt={imageList[currentIndex].alt}
          className="gallerycomponent__figure--image"
        />
      </div>
      <div className="gallerycomponent__slide">
        {imageList.map((image, index) => (
          <img
            key={image.id}
            src={image.src}
            alt={image.alt}
            className="gallerycomponent__slide--image"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </figure>
  );
};

export default GalleryComponent;
