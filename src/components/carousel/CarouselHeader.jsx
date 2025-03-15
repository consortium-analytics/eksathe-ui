import { useState, useEffect } from "react";

const CarouselHeader = () => {
  const images = [
    "https://www.shutterstock.com/image-photo/group-multinational-business-people-digital-600nw-2430266899.jpg",
    "https://www.shutterstock.com/image-photo/group-multinational-people-financial-technology-600nw-2361338793.jpg",
    "https://www.shutterstock.com/image-photo/group-multinational-business-people-digital-600nw-2430266899.jpg",
    "https://www.shutterstock.com/image-photo/group-multinational-people-financial-technology-600nw-2361338793.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]); // Depend on currentIndex to reset interval on manual navigation

  return (
    <div className="relative w-full mx-auto mt-7">
      <div className="overflow-hidden rounded-lg">
        <img src={images[currentIndex]} className="w-full transition-all duration-500" alt="Carousel Slide" />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-70 hover:opacity-100"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 py-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`btn btn-xs ${currentIndex === index ? "bg-blue-600 text-white" : "bg-gray-300"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarouselHeader;
