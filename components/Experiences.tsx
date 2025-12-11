import React, { useState } from 'react';
import { EXPERIENCES } from '../constants';
import { Category } from '../types';
import { Clock, Star } from 'lucide-react';

const Experiences: React.FC = () => {
  const [filter, setFilter] = useState<Category>('All');

  const categories: Category[] = ['All', 'Cultural', 'Beach', 'Nightlife', 'Gastronomy'];

  const filteredExperiences = filter === 'All' 
    ? EXPERIENCES 
    : EXPERIENCES.filter(exp => exp.category === filter);

  return (
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cartagena-dark mb-4">
            Curated Experiences
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From historic walks to island hopping, choose your perfect adventure.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
                  ? 'bg-cartagena-blue text-white shadow-md transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col h-full">
              
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-cartagena-dark uppercase tracking-wide">
                  {exp.category}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-cartagena-terra transition-colors">
                    {exp.title}
                  </h3>
                  <div className="flex items-center bg-yellow-50 px-2 py-1 rounded text-yellow-700 text-sm font-bold">
                    <Star className="w-3 h-3 fill-current mr-1" />
                    {exp.rating}
                  </div>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                  {exp.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    {exp.duration}
                  </div>
                  <div className="text-lg font-bold text-cartagena-dark">
                    {exp.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experiences;