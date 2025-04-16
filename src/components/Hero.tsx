import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      title: "IoT & Electronics"
    },
    {
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      title: "Robotics"
    },
    {
      url: "https://static.vecteezy.com/system/resources/previews/023/331/275/large_2x/robot-ai-with-hand-robot-pointing-ai-technology-digital-graphic-design-black-background-ai-machine-learning-hands-of-robot-science-and-artificial-intelligence-technology-innovation-and-futuristic-free-photo.jpg",
      title: "Electronics"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="pt-20 relative h-screen transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url('${images[currentImageIndex].url}?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">The Cygnus Club</h1>
        <h2 className="text-2xl md:text-4xl mb-8">National Institute of Technology Manipur</h2>

        <Link
          to="/upcoming-events"
          className="inline-block px-8 py-3 rounded-lg text-lg font-semibold border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 w-fit"
        >
          Upcoming Events
        </Link>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-white scale-125' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
