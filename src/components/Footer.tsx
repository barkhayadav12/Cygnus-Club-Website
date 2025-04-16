import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaMediumM } from 'react-icons/fa'; // Import FaMediumM

export function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-4">
          {/* Left Side: Club Name */}
          <div className="text-2xl font-bold mb-4 md:mb-0">
            CYGNUS
          </div>

          {/* Right Side: Social Icons */}
          <div className="flex space-x-6 text-xl">
            <a href="https://medium.com/@cygnusclubnitmanipur" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaMediumM /> {/* Medium Icon */}
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/cygnus-club-nit-manipur-83691835b/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
            <a href="https://www.instagram.com/cygnusclubnitmanipur?igsh=OXFoZnd6djZ0azBr" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2025 The CYGNUS Club - NITMN. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
