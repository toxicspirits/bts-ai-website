import React, { useEffect } from 'react';
import { Lightbulb, Zap, ClipboardCheck, Map } from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: <Lightbulb className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Technology Integration Benchmarking',
  },
  {
    icon: <Zap className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Operational Readiness Scoring',
  },
  {
    icon: <ClipboardCheck className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Process Optimization Assessment',
  },
  {
    icon: <Map className="w-16 h-16 text-btsai-lightblue" />,
    title: 'Continuous Improvement Roadmap',
  },
];

const ManufacturingAnalysisPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/Manufacturing.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center px-6">
          <div className="text-white max-w-4xl">
            <p className="text-sm text-blue-400 font-semibold uppercase mb-2">Manufacturing Maturity Analysis</p>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight mb-4">
              Powering smarter production through strategic insight.
            </h1>
            <p className="text-lg text-gray-200">
              Comprehensive assessment of your current manufacturing processes to identify optimization opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="px-6 py-12 bg-white max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Manufacturing Maturity Analysis</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Manufacturing Maturity Analysis is a comprehensive evaluation of an organization’s manufacturing capabilities,
          processes, and technologies. It helps identify current strengths, gaps, and opportunities for improvement across key
          operational areas such as process efficiency, automation, workforce readiness, and data utilization. By benchmarking
          against industry standards, this analysis provides actionable insights that support strategic planning and drive
          continuous improvement. It is a critical step for manufacturers aiming to enhance productivity, ensure scalability,
          and transition towards smart, Industry 4.0-ready operations.
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

export default ManufacturingAnalysisPage;
