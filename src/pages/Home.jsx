import React from 'react';
import heroVideo from '../assets/hero.mp4'; // Make sure path is correct

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="flex flex-col items-center justify-center h-full bg-black/40 px-4 text-center text-white">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 drop-shadow-lg">
          Plan Less, Travel More
        </h1>
        <p className="text-lg md:text-2xl font-light drop-shadow-md">
          Smart itineraries tailored for your next adventure.
        </p>
      </div>
    </div>
  );
};

export default Home;
