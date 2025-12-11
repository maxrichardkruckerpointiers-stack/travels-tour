import React, { useState } from 'react';
import { BookingFormState } from '../types';
import { Send, CheckCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormState>({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    interest: 'Cultural',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate CRM submission
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="book" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-cartagena-blue rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          
          {/* Image Side */}
          <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
            <img 
              src="https://picsum.photos/id/1036/800/1000" 
              alt="Cartagena Balcony" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-cartagena-blue/90 to-transparent md:bg-gradient-to-r md:from-transparent md:to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8 text-white md:hidden">
              <h3 className="text-2xl font-bold font-serif mb-2">Ready for Adventure?</h3>
              <p className="text-sm opacity-90">Book your unforgettable experience today.</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 bg-white">
            {!submitted ? (
              <>
                <h3 className="text-3xl font-serif font-bold text-cartagena-dark mb-2">Plan Your Trip</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and our travel specialists will contact you within 24 hours.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow"
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone (WhatsApp)</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow"
                      />
                    </div>
                    <div>
                      <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                      <input
                        type="number"
                        name="guests"
                        min="1"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Primary Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-cartagena-blue focus:border-transparent outline-none transition-shadow bg-white"
                    >
                      <option value="Cultural">Cultural & History</option>
                      <option value="Beach">Beaches & Islands</option>
                      <option value="Nightlife">Nightlife & Party</option>
                      <option value="Gastronomy">Food & Dining</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cartagena-terra text-white font-bold py-4 rounded-lg shadow-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 mt-4"
                  >
                    Start My Journey <Send className="w-5 h-5" />
                  </button>
                </form>
              </>
            ) : (
              <div className="h-full flex flex-col justify-center items-center text-center animate-fade-in-up">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Request Received!</h3>
                <p className="text-gray-600 mb-8">
                  Gracias! We have received your inquiry. One of our Cartagena experts will reach out to you at {formData.email} shortly.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-cartagena-blue font-bold hover:underline"
                >
                  Send another request
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;