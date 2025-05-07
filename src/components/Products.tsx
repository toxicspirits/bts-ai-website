
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="products" className="section bg-gradient-to-br from-btsai-blue/5 to-btsai-purple/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-btsai-blue mb-4">Our Products</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Innovative solutions for smart factory implementation and digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
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
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-btsai-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Seamless integration of autonomous guided vehicles</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-btsai-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-time tracking and management of delivery robots</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-btsai-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Drone integration for advanced monitoring and logistics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-btsai-purple mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Centralized control system for all moving objects</span>
                </li>
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

        <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-btsai-blue mb-6">SAP Product Portfolio & Supply Chain</h3>
          <p className="text-gray-700 mb-8">
            To realize smart factories and digital services, we use the following SAP portfolio, among others:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {sapProducts.map((product, index) => (
              <Card key={index} className="border border-gray-200">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <svg className="h-8 w-8 text-btsai-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span className="text-gray-800 font-medium">{product}</span>
                  </div>
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
