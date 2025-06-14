import React, { useEffect } from 'react';
import { SearchCode, Shield, Handshake, Gauge} from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <SearchCode className="w-16 h-16 text-btsai-lightblue" />,
    title: ' Feasibility Validation',
  },
  {
    icon: <Shield className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Risk Reduction',
  },
  {
    icon: <Handshake className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Stakeholder Confidence',
  },
  {
    icon: <Gauge className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Accelerated Decision-Making',
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
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/proof.webp')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-4xl">
            <p className="text-sm text-blue-400 font-semibold uppercase mb-2">Proof of Concept</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Turning bold ideas into proven outcomes
            </h1>
            <p className="text-lg text-gray-200">
              Rapid development and testing of new system concepts to validate their effectiveness before full implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Proof of Concept</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Proof of Concept (PoC) as a Service is designed to help businesses validate innovative 
          ideas quickly and cost-effectively before full-scale development. We collaborate closely 
          with clients to build functional prototypes that demonstrate feasibility, technical viability, 
          and market alignment. By minimizing risk and showcasing tangible outcomes, our PoC service empowers 
          decision-makers with the clarity and confidence needed to move forward with impactful solutions.
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
