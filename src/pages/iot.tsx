import React, { useEffect } from 'react';
import { RadioTower, ClockAlert, BrainCircuit, Bot} from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <RadioTower className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Real-Time Monitoring',
  },
  {
    icon: <ClockAlert className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Predictive Maintenance',
  },
  {
    icon: <BrainCircuit className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Operational Simulation',
  },
  {
    icon: <Bot className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Enhanced Decision-Making',
  },
];

const iot = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/iot.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-4xl">
            <p className="text-sm text-blue-400 font-semibold uppercase mb-2">IOT & Digital Twin</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Driving intelligent operations through real-time connectivity and virtual precision
            </h1>
            <p className="text-lg text-gray-200">
             Seamless connectivity between production machinery and S4 HANA for real-time data flow and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">IOT & Digital Twin</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our IoT and Digital Twin services empower businesses to create intelligent, data-driven 
          environments by replicating physical systems in virtual models. By harnessing sensor data 
          through IoT networks and synchronizing it with dynamic digital twins, organizations gain real-time 
          visibility, predictive insights, and enhanced control over operations. This integration bridges the 
          physical and digital worlds—driving efficiency, innovation, and smarter decision-making across the enterprise.
        </p>
      </section>

      {/* Features Section */}
      <section className="px-6 pb-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-gray-200 rounded-xl shadow-md p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
              {feature.icon}
              <h3 className="mt-4 text-sm font-medium text-gray-800">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default iot;
