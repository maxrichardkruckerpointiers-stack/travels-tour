import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-cartagena-terra font-bold uppercase tracking-widest text-sm">Guest Stories</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cartagena-dark mt-2">
            Traveler Love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col relative">
              <Quote className="absolute top-6 right-6 text-gray-100 w-12 h-12" />
              
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'fill-current' : 'text-gray-300'}`} />
                ))}
              </div>

              <p className="text-gray-600 italic mb-6 flex-grow relative z-10">"{t.comment}"</p>

              <div className="flex items-center mt-auto">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-cartagena-gold"
                />
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;