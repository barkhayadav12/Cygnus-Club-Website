import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // If you use Lucide icons

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">CYGNUS</Link>

        {/* Hamburger icon for mobile */}
        <button onClick={toggleMenu} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-gray-300">Home</Link>
          <Link to="/about" className="hover:text-gray-300">About Us</Link>
          <Link to="/events" className="hover:text-gray-300">Events</Link>
          <Link to="/projects" className="hover:text-gray-300">Projects</Link>
          <Link to="/blogs" className="hover:text-gray-300">Blogs</Link>
          <Link to="/board" className="hover:text-gray-300">Board</Link>
          <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pt-2 pb-4 space-y-2">
          <Link to="/" className="block hover:text-gray-300" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="block hover:text-gray-300" onClick={toggleMenu}>About Us</Link>
          <Link to="/events" className="block hover:text-gray-300" onClick={toggleMenu}>Events</Link>
          <Link to="/projects" className="block hover:text-gray-300" onClick={toggleMenu}>Projects</Link>
          <Link to="/blogs" className="block hover:text-gray-300" onClick={toggleMenu}>Blogs</Link>
          <Link to="/board" className="block hover:text-gray-300" onClick={toggleMenu}>Board</Link>
          <Link to="/contact" className="block hover:text-gray-300" onClick={toggleMenu}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
