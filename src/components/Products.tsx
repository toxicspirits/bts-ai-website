import { Card, CardContent } from "@/components/ui/card";
import { ShieldCheck } from 'lucide-react';

const Products = () => {
  const sapProducts = [
    "SAP DM",
    "SAP ME",
    "SAP IBP",
    "Custom MES development using .Net, Java",
    "Machine connectivity",
    "S4 HANA integration",
    "SAP BTP custom development"
  ];

  return (
    <section id="products" className="section bg-gradient-to-br from-btsai-blue/5 to-btsai-purple/5 py-16">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-btsai-blue mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions for smart factory implementation and digital transformation
          </p>
        </div>

        {/* Virtual Worker Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h3 className="text-2xl font-bold text-btsai-purple mb-4">Virtual Worker</h3>
            <p className="text-gray-700 mb-6">
              Our groundbreaking virtual worker concept connects all AGVs, delivery robots, and drones 
              to create an integrated manufacturing environment. By connecting workcenters, PSA to warehouse 
              via new generation of moving objects, we make the future smart factory a reality.
            </p>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h4 className="text-xl font-semibold text-btsai-blue mb-3">Key Features:</h4>
              <ul className="space-y-2">
                {[
                  "Seamless integration of autonomous guided vehicles",
                  "Real-time tracking and management of delivery robots",
                  "Drone integration for advanced monitoring and logistics",
                  "Centralized control system for all moving objects"
                ].map((feature, index) => (
                  <li className="flex items-start" key={index}>
                    <svg className="h-6 w-6 text-btsai-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="relative">
            <div className="bg-btsai-blue/20 absolute inset-0 rounded-lg transform -rotate-3"></div>
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
              alt="Virtual Worker Technology" 
              className="rounded-lg shadow-xl relative z-10 w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* SAP Products Section */}
        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-btsai-blue mb-6">SAP Product Portfolio & Supply Chain</h3>
          <p className="text-gray-700 mb-8">
            To realize smart factories and digital services, we use the following SAP portfolio, among others:
          </p>

          {/* Centered Card Grid */}
          <div className="flex flex-wrap justify-center gap-6">
            {sapProducts.map((product, index) => (
              <Card
                key={index}
                className="w-full sm:w-[45%] lg:w-[22%] border border-gray-300 transition transform hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-btsai-blue/5"
              >
                <CardContent className="p-6 flex flex-col items-center text-center h-40 justify-center">
                  <ShieldCheck/>
                  <span className="text-gray-800 font-medium">{product}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
