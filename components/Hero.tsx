import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenAi: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenAi }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/1047/1920/1080" 
          alt="Cartagena Old Town Street"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-cartagena-dark/90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-16">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-semibold tracking-wider mb-6 animate-fade-in-up">
          COLOMBIA'S CARIBBEAN JEWEL
        </span>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Discover the Magic <br />
          <span className="text-cartagena-gold">Behind the Walls</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Immerse yourself in history, vibrant culture, and pristine beaches. 
          Experience Cartagena like never before.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#experiences"
            className="w-full sm:w-auto px-8 py-4 bg-cartagena-terra text-white rounded-full font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-2 group"
          >
            Explore Tours
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <button 
            onClick={onOpenAi}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/50 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 text-yellow-300" />
            Plan with AI
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;