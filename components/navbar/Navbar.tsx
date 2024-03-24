"use client"

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#f5f5f5] text-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo on the left */}
          <div className="flex items-center">
            <a href="#" className="flex items-center py-4 px-2">
              <img src="/itl-logo.svg" alt="Logo" className="h-8 w-8 mr-2"/>
              <span className="font-semibold text-lg">Conference</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-center flex-1">
            <a href="#" className="py-4 px-2 mx-2">ITL '25</a>
            <a href="#" className="py-4 px-2 mx-2">Registration</a>
            <a href="#" className="py-4 px-2 mx-2">Spoonsorship</a>
            <a href="#" className="py-4 px-2 mx-2">Partners</a>
            <a href="#" className="py-4 px-2 mx-2">FAQs</a>
            <a href="#" className="py-4 px-2 mx-2">Awards</a>
          </div>

          {/* CTA on the right */}
          <div className="hidden md:flex">
            <a href="#" className="py-2 px-4 bg-yellow-500 hover:bg-yellow-600 rounded transition duration-300">Sponsor</a>
          </div>

          {/* Hamburger menu button (Mobile view) */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleHamburger} className="outline-none mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-4 pt-2 pb-4`}>
        <a href="#" className="block py-2 px-4 text-sm">ITL '25</a>
        <a href="#" className="block py-2 px-4 text-sm">About</a>
        <a href="#" className="block py-2 px-4 text-sm">Speakers</a>
        <a href="#" className="block py-2 px-4 text-sm">Schedule</a>
        <a href="#" className="block py-2 px-4 text-sm">Blog</a>
        <a href="#" className="block py-2 px-4 text-sm">Contact</a>
        {/* Adjustments for the "Sponsor" CTA */}
        <a href="#" className="block mx-auto my-4 py-2 px-4 w-auto bg-yellow-500 hover:bg-yellow-600 rounded transition duration-300 text-center">Sponsor</a>
      </div>

    </nav>
  );
};

export default Navbar;
