import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoScrollInterval = setInterval(goToNextSlide, 3000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full">
      <div className="relative h-70 md:h-96 overflow-hidden rounded-xl">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white dark:bg-gray-800 focus:outline-none ${
              index === currentIndex ? 'opacity-100' : 'opacity-50'
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-2 cursor-pointer text-white text-2xl"
        onClick={goToPrevSlide}
      >
        &#9664;
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-2 cursor-pointer text-white text-2xl"
        onClick={goToNextSlide}
      >
        &#9654;
      </button>
    </div>
  );
};

export default Carousel;
