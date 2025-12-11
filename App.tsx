import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experiences from './components/Experiences';
import MapSection from './components/MapSection';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import PracticalInfo from './components/PracticalInfo';
import Footer from './components/Footer';
import AiPlanner from './components/AiPlanner';

const App: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero onOpenAi={() => setIsAiModalOpen(true)} />
      <Experiences />
      <MapSection />
      <Testimonials />
      <BookingForm />
      <PracticalInfo />
      <Footer />
      
      {/* AI Modal */}
      <AiPlanner 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
      />
    </main>
  );
};

export default App;