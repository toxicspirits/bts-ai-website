import React, { useEffect } from 'react';
import { Cloudy, Lock, ServerCog, ChartColumnIncreasing} from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <Cloudy className="w-16 h-16 text-btsai-lightblue" />,
    title: 'System Modernization',
  },
  {
    icon: <Lock className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Data Integrity & Security',
  },
  {
    icon: <ServerCog className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Business Continuity',
  },
  {
    icon: <ChartColumnIncreasing className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Scalability & Integration',
  },
];

const proof = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/legacy.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-4xl">
            <p className="text-sm text-blue-400 font-semibold uppercase mb-2">legacy system migration</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Empowering future-ready operations through intelligent legacy system migration.
            </h1>
            <p className="text-lg text-gray-200">
              Seamless migration or replacement of outdated systems while preserving critical business data and processes.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Legacy System Migration</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Legacy System Migration is our strategic service designed to help businesses 
          modernize outdated systems without disrupting core operations. We analyze existing 
          infrastructure, identify optimization opportunities, and execute seamless transitions 
          to modern platforms. Our approach ensures data integrity, improved performance, and 
          long-term scalability, empowering organizations to stay competitive in a rapidly evolving digital landscape.
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

export default proof;
