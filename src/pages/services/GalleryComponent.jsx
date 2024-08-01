import React, { useState, useEffect } from "react";
import TestImage1 from "../../assets/water-is-life.jpg";
import TestImage2 from "../../assets/bannerImage.jpeg";
import TestImage3 from "../../assets/landing.jpg";

const GalleryComponent = () => {
  const [currentImage, setCurrentImage] = useState(TestImage1);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageList = [
    {
      id: 1,
      src: TestImage1,
      alt: "Water is life"
    },
    {
      id: 2,
      src: TestImage2,
      alt: "Banner"
    },
    {
      id: 3,
      src: TestImage3,
      alt: "Banner"
    },
    {
      id: 4,
      src: TestImage2,
      alt: "Banner"
    },
    {
      id: 5,
      src: TestImage1,
      alt: "Banner"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 8000);

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
