import { FaLinkedin, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import CarouselLogo from "../../components/carousel-logo/CarouselLogo";
import HomeHero from "../../components/home-hero/HomeHero";

export default function HomePage() {
  return (
    <div>
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Overlay to Darken the Video */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 pt-10 text-white w-full h-full flex flex-col justify-center items-center px-6 text-start">
        {/* Hero Section */}
        <div className="max-w-3xl text-start pt-28">
          <h2 className="text-5xl font-normal">Explore New</h2>
          <h2 className="text-5xl font-normal">
            Job{" "}
            <span className="font-semibold text-[#c5f6f0]">Opportunities</span>
          </h2>
          <p className="mt-4 text-lg">
            Kickstart your career with us. Discover jobs that inspire you and
            match your passion. Explore opportunities that excite you. Start
            your journey to success today. Your dream job is just a click away!
          </p>
        </div>

        {/* Stats Section */}
        <div className="flex justify-center gap-20 mt-10 text-lg">
          <div>
            <p className="text-2xl font-bold">Vacancies</p>
            <p>100+</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Companies</p>
            <p>10+</p>
          </div>
          <div>
            <p className="text-2xl font-bold">Users</p>
            <p>1000+</p>
          </div>
        </div>

        {/* Carousel Section */}
        <div className="relative z-20 w-full max-w-4xl mt-10">
          <CarouselLogo />
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="fixed text-white right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-30">
        <a
          href="#"
          className="text-xl rounded-full p-2 bg-blue-400 text-white transition-all duration-300 hover:bg-white hover:text-blue-400"
        >
          <FaLinkedin />
        </a>
        <a
          href="#"
          className="text-xl rounded-full p-2 bg-blue-500 text-white transition-all duration-300 hover:bg-white hover:text-blue-500"
        >
          <FaFacebook />
        </a>
        <a
          href="#"
          className="text-xl rounded-full p-2 bg-red-600 text-white transition-all duration-300 hover:bg-white hover:text-red-600"
        >
          <FaYoutube />
        </a>
        {/* Instagram Fix */}
        <a
          href="#"
          className="relative text-xl rounded-full p-2 text-white transition-all duration-300 group"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] transition-all duration-300 group-hover:bg-white"></div>
          <FaInstagram className="relative z-10 transition-all duration-300 group-hover:text-[#833ab4]" />
        </a>
      </div>
    </div>
    <div>
      <HomeHero/>
    </div>
    </div>
  );
}
