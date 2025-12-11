import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { MAP_POINTS } from '../constants';
import { MapPoint } from '../types';

const MapSection: React.FC = () => {
  const [activePoint, setActivePoint] = useState<number | null>(null);

  return (
    <section id="map" className="py-20 bg-cartagena-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Explore the City
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Click the points to discover iconic landmarks in Cartagena.
          </p>
        </div>

        <div className="relative bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border-4 border-white/10 aspect-[4/3] md:aspect-[16/9] lg:h-[600px]">
          {/* Static Map Background (Placeholder for Google Maps API) */}
          <img 
            src="https://picsum.photos/id/175/1200/800" 
            alt="Map of Cartagena" 
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          />
          
          <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

          {/* Interactive Points */}
          {MAP_POINTS.map((point) => (
            <div 
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2"
              style={{ top: point.top, left: point.left }}
            >
              <button
                onClick={() => setActivePoint(activePoint === point.id ? null : point.id)}
                className={`group relative flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none ${activePoint === point.id ? 'bg-cartagena-terra text-white scale-110' : 'bg-white text-cartagena-dark'}`}
              >
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                <span className="absolute w-full h-full rounded-full bg-inherit opacity-75 animate-ping -z-10"></span>
              </button>

              {/* Tooltip Card */}
              {activePoint === point.id && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-64 bg-white rounded-lg shadow-xl overflow-hidden z-20 animate-fade-in-up">
                  <img src={point.image} alt={point.title} className="w-full h-32 object-cover" />
                  <div className="p-4">
                    <h4 className="font-bold text-cartagena-dark text-lg">{point.title}</h4>
                    <p className="text-xs text-gray-600 mt-1">{point.description}</p>
                    <a href="#book" className="block mt-3 text-xs font-bold text-cartagena-terra hover:underline">
                      Book a tour here &rarr;
                    </a>
                  </div>
                  {/* Triangle pointer */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MapSection;