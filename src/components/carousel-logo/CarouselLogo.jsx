import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../../assets/carousel-logos/1.svg";
import img2 from "../../assets/carousel-logos/2.svg";
import img3 from "../../assets/carousel-logos/3.svg";
import img4 from "../../assets/carousel-logos/4.svg";
import img5 from "../../assets/carousel-logos/5.svg";
import img6 from "../../assets/carousel-logos/6.svg";
import img7 from "../../assets/carousel-logos/7.svg";
import img8 from "../../assets/carousel-logos/8.svg";
import img9 from "../../assets/carousel-logos/9.svg";
import img10 from "../../assets/carousel-logos/10.svg";
import img11 from "../../assets/carousel-logos/11.svg";
import img12 from "../../assets/carousel-logos/12.svg";
import img13 from "../../assets/carousel-logos/13.svg";
import img14 from "../../assets/carousel-logos/14.svg";
import img15 from "../../assets/carousel-logos/15.svg";
import img16 from "../../assets/carousel-logos/16.svg";
import img17 from "../../assets/carousel-logos/17.svg";
import img18 from "../../assets/carousel-logos/18.svg";
import img19 from "../../assets/carousel-logos/19.svg";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
];

const CarouselLogo = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="pt-10 carousel-container w-full h-[250px] overflow-visible">
      <p className="text-center text-base md:text-lg px-5 text-white">
      Extensive Job Listings from Trusted Employers
      </p>
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="carousel-item flex-shrink-0">
            <img
              src={src}
              alt={`carousel-item-${index}`}
              className="w-[200px] h-[115px] sm:w-[250px] sm:h-[135px] md:w-[300px] md:h-[150px] object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselLogo;
