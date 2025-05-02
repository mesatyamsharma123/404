import React, { useState, useEffect } from 'react';
import heroImage from '../../public/image-hero.jpg'; // ✅ From src/assets

const Error = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative w-full h-screen flex justify-center items-center overflow-hidden">
      {/* Fixed Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat pointer-events-none z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundPosition: 'center', // Fixed background position
        }}
      />

      {/* Dark Overlay with Bigger Spotlight */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-black/88
         pointer-events-none z-10"
        style={{

          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, transparent 0%, black 100%)`,
         
     
          transition: 'mask-position 0.1s ease-out',
        }}
      ></div>

      {/* Text */}
      <div className="relative z-20 text-white text-5xl font-bold text-center">
        <h1>404 - Page Not Found</h1>
      </div>
    </div>
  );
};

export default Error;
