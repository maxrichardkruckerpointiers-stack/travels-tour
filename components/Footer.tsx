import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-cartagena-dark text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-3xl font-bold mb-4">Cartagena<span className="text-cartagena-terra">.</span></h2>
            <p className="text-gray-400 max-w-sm">
              Your gateway to the Caribbean. We specialize in creating unforgettable memories in Colombia's most beautiful city.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-cartagena-gold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#experiences" className="text-gray-400 hover:text-white transition-colors">Tours</a></li>
              <li><a href="#map" className="text-gray-400 hover:text-white transition-colors">Map</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#book" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 text-cartagena-gold">Connect</h3>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-cartagena-terra transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center text-gray-400">
              <Mail className="w-4 h-4 mr-2" />
              <span>hello@visitcartagena.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Cartagena Magica Tourism. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;