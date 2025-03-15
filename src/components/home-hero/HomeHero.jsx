import React from "react";
import img from "../../assets/hero-header.png";

const HomeHero = () => {
  return (
    <section className="py-20 px-6 sm:px-8 lg:px-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse md:flex-row gap-16 items-center justify-between">
          {/* Text Content */}
          <div className="flex-1 space-y-6 pt-4 order-2 md:order-1">
            <h2 className="text-xl sm:text-2xl lg:text-4xl text-start font-semi text-white">
              Comprehensive Job Portal Solutions
            </h2>
            <p className="text-base md:text-lg text-white text-start leading-relaxed">
              We provide a robust platform for students, graduates, and
              professionals to find job opportunities and for employers to post
              job advertisements. Our services include advanced job search
              functions, seamless application processes, and 24/7 support. We
              cater to both private and government job listings, ensuring a wide
              range of opportunities for job seekers. Our platform is designed
              to be user-friendly, secure, and reliable, making the job search
              and recruitment process efficient and effective.
            </p>
          </div>

          {/* Image */}
          <div className="w-3/4 md:w-2/3 lg:w-1/2 flex items-center justify-center order-1 md:order-2">
            <img
              src={img}
              alt="Data Engineering"
              className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;