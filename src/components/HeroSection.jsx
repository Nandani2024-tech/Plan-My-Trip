import React from 'react';
import heroVideo from '../assets/hero.mp4'; 

const HeroSection = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex items-center justify-center">
        {/* Quote Text */}
        <div className="text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-serif font-bold drop-shadow-lg">
            "Travel is the only thing you buy that makes you richer."
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
