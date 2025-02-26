"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

// Instead of module augmentation, use a type assertion approach
interface SlideProps {
  imageUrl: string;
  alt: string;
}

const Slide: React.FC<SlideProps> = ({ imageUrl, alt }) => (
  <div className="h-58 w-full relative">
    <Image
      src={imageUrl}
      alt={alt}
      width={500}
      height={300}
      className="w-full h-full object-cover rounded-xl"
      priority
    />
  </div>
);

const Slideshow: React.FC = () => {
  // Use a simpler settings approach without explicit typing
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    fade: true,
    arrows: false,
    swipe: true,
    swipeToSlide: true,
    touchThreshold: 10,
  };

  const slides: SlideProps[] = [
    { imageUrl: "/slideimg/ZOOKcanner.png", alt: "ZOOK Scanner" },
    { imageUrl: "/slideimg/TrailblazerZk.png", alt: "Trailblazer ZK" },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto mt-2 rounded-xl">
      {/* Use type assertion to fix the type error */}
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Slide key={index} {...slide} />
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;