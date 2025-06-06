import React, { useEffect } from 'react';
import { SatelliteDish, Cog, MonitorCog, Network} from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <SatelliteDish className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Real-Time Data Acquisition',
  },
  {
    icon: <Cog className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Operational Efficiency',
  },
  {
    icon: <MonitorCog className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Centralized Monitoring & Control',
  },
  {
    icon: <Network className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Scalability & Standardization',
  },
];

const hana = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/hana.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-4xl">
            <p className="text-sm text-blue-400 font-semibold uppercase mb-2">Machine Integration with S4 HANA</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Synchronizing shop floor and ERP through advanced machine integration with S/4HANA
            </h1>
            <p className="text-lg text-gray-200">
             Seamless connectivity between production machinery and S4 HANA for real-time data flow and analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Machine Integration with S4 HANA</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Machine Integration with SAP S/4HANA is our specialized service designed to connect shop 
          floor equipment directly with your enterprise system to enable real-time data flow, analytics, 
          and automation. By bridging operational technology (OT) with information technology (IT), we empower 
          manufacturing organizations to achieve seamless production visibility, reduce manual intervention, and 
          drive data-informed decisions within the S/4HANA ecosystem.
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

export default hana;
