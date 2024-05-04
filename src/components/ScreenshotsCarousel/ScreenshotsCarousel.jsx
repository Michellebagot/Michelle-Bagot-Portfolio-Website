import { useState } from "react";
import "./screenshotsCarousel.css";

const ScreenshotsCarousel = ({ screenshots }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === screenshots.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? screenshots.length - 1 : prevIndex - 1
    );
  };

  const openImage = (imageUrl) => {
    setSelectedImage(imageUrl);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
  };

  return (
    <div className="screenshot-carousel">
      <section
        className="carousel-button carousel-button--prev left-button"
        onClick={prevSlide}
      >
        &#8249;
      </section>
      <img
        src={screenshots[currentIndex]}
        alt="Project Screenshot"
        className="carousel-image"
        onClick={() => openImage(screenshots[currentIndex])}
      />
      <section
        className="carousel-button carousel-button--next right-button"
        onClick={nextSlide}
      >
        &#8250;
      </section>

      {isImageOpen && (
        <div className="open-image" onClick={closeImage}>
          <img
            src={selectedImage}
            alt="Selected Screenshot"
            className="open-screenshot-image"
          />
        </div>
      )}
    </div>
  );
};

export default ScreenshotsCarousel;
