import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <nav className="bg-gray-900 text-white shadow-lg py-2 z-50 fixed top-0 left-0 w-full h-auto">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-yellow-500 hover:text-yellow-400">
          kiangeni FC
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/#about" className="hover:text-yellow-500 transition duration-300">About</Link>
          <Link to="/#gallery" className="hover:text-yellow-500 transition duration-300">Gallery</Link>
          <Link to="/#support-us" className="hover:text-yellow-500 transition duration-300">Support Us</Link>
          <Link to="/#join" className="hover:text-yellow-500 transition duration-300">Join</Link>
          <Link to="/#contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'flex' : 'hidden'}`}>
        <div className="bg-gray-800 text-white space-y-4 py-4 flex flex-col w-full pl-4">
        <Link to="/#about" className="hover:text-yellow-500 transition duration-300">About</Link>
          <Link to="/#gallery" className="hover:text-yellow-500 transition duration-300">Gallery</Link>
          <Link to="/#support-us" className="hover:text-yellow-500 transition duration-300">Support Us</Link>
          <Link to="/#join" className="hover:text-yellow-500 transition duration-300">Join</Link>
          <Link to="/#contact" className="hover:text-yellow-500 transition duration-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
