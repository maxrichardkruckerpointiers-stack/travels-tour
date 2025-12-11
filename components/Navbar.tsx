import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Experiences', href: '#experiences' },
    { name: 'Map', href: '#map' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Info', href: '#info' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <Sun className="h-8 w-8 text-cartagena-gold mr-2" />
            <span className="font-serif text-2xl font-bold text-cartagena-dark tracking-wide">
              Cartagena<span className="text-cartagena-terra">.</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-cartagena-terra px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              className="bg-cartagena-terra text-white px-5 py-2 rounded-full font-bold shadow-lg hover:bg-orange-600 transition-transform transform hover:scale-105"
            >
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cartagena-terra focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-gray-700 hover:text-cartagena-terra hover:bg-gray-50 px-3 py-3 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-cartagena-terra text-white px-5 py-3 rounded-md font-bold mt-4"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;