import React from 'react';
import { Sun, ShieldCheck, Thermometer, Briefcase } from 'lucide-react';

const PracticalInfo: React.FC = () => {
  const infos = [
    {
      icon: <Thermometer className="w-8 h-8 text-cartagena-terra" />,
      title: "Climate",
      desc: "Tropical year-round. Average 28°C (82°F). High humidity.",
    },
    {
      icon: <Sun className="w-8 h-8 text-cartagena-gold" />,
      title: "Best Time",
      desc: "Dec-April is dry season. Best for beaches and walking.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-cartagena-blue" />,
      title: "Safety",
      desc: "Tourist areas are very safe. Always use official taxis/Uber.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-purple-500" />,
      title: "Packing",
      desc: "Light linens, comfortable walking shoes, sunscreen, hat.",
    },
  ];

  return (
    <section id="info" className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {infos.map((info, idx) => (
            <div key={idx} className="flex flex-col items-center text-center">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4">
                {info.icon}
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{info.title}</h4>
              <p className="text-sm text-gray-500">{info.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticalInfo;