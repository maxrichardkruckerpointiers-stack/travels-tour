import React, { useState } from 'react';
import { Sparkles, X, Loader2, Send } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';
import { AiItineraryRequest } from '../types';
import ReactMarkdown from 'react-markdown';

interface AiPlannerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiPlanner: React.FC<AiPlannerProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2>(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string>("");
  const [formData, setFormData] = useState<AiItineraryRequest>({
    days: 3,
    interests: [],
    budget: 'Moderate'
  });

  const availableInterests = ['History', 'Beaches', 'Nightlife', 'Food', 'Relaxation', 'Photography'];

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest) 
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleGenerate = async () => {
    setLoading(true);
    setResult(""); // Clear previous
    const response = await generateItinerary(formData);
    setResult(response);
    setLoading(false);
    setStep(2);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        
        {/* Overlay */}
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" onClick={onClose} aria-hidden="true"></div>

        {/* Modal Panel */}
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
          
          <div className="bg-gradient-to-r from-cartagena-blue to-teal-500 px-4 py-4 sm:px-6 flex justify-between items-center">
            <h3 className="text-lg leading-6 font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              AI Trip Planner
            </h3>
            <button onClick={onClose} className="text-white hover:text-gray-200">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-[70vh] overflow-y-auto">
            
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">How many days?</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="7" 
                    value={formData.days}
                    onChange={(e) => setFormData({...formData, days: parseInt(e.target.value)})}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cartagena-blue"
                  />
                  <div className="text-center font-bold text-cartagena-blue mt-1">{formData.days} Days</div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">What are you interested in?</label>
                  <div className="flex flex-wrap gap-2">
                    {availableInterests.map(interest => (
                      <button
                        key={interest}
                        onClick={() => toggleInterest(interest)}
                        className={`px-3 py-1 rounded-full text-sm font-medium transition-colors border ${
                          formData.interests.includes(interest)
                          ? 'bg-cartagena-blue text-white border-cartagena-blue'
                          : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-50'
                        }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Level</label>
                  <select 
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value as any})}
                    className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-cartagena-blue focus:border-cartagena-blue sm:text-sm rounded-md border"
                  >
                    <option>Budget</option>
                    <option>Moderate</option>
                    <option>Luxury</option>
                  </select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="prose prose-sm prose-teal max-w-none text-left">
                <ReactMarkdown>{result}</ReactMarkdown>
              </div>
            )}
            
            {loading && (
               <div className="absolute inset-0 bg-white/80 flex flex-col items-center justify-center z-10">
                 <Loader2 className="w-10 h-10 text-cartagena-blue animate-spin mb-3" />
                 <p className="text-cartagena-dark font-medium animate-pulse">Designing your dream trip...</p>
               </div>
            )}
          </div>

          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            {step === 1 ? (
              <button
                type="button"
                onClick={handleGenerate}
                disabled={loading}
                className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-cartagena-terra text-base font-medium text-white hover:bg-orange-600 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm items-center gap-2"
              >
                Generate Itinerary <Send className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Start Over
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPlanner;