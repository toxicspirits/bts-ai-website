
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
              alt="BTS AI Office" 
              className="rounded-lg shadow-lg object-cover h-[500px] w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-btsai-blue mb-6">About Us</h2>
            <p className="text-gray-600 mb-4">
              BTS AI is a consultant for the digital transformation of manufacturing to a sustainable 
              supply chain with the core of an intelligent factory. Through an agile approach and a 
              pioneering spirit, we work together with AI to create values while connecting.
            </p>
            <p className="text-gray-600 mb-6">
              The trend is clear: products are to be manufactured efficiently, flexibly and sustainably 
              in resilient value chains. The key is data that is consistently analyzed and used, as well 
              as the ability to act more dynamically with cloud technology.
            </p>
            <p className="text-gray-600 mb-8">
              To implement intelligent factories in a networked environment, we use SAP's cloud innovation 
              portfolio for the digital supply chain based on the SAP Business Technology Platform, 
              such as SAP Digital Manufacturing (SAP DM) and more. We ensure the success of the digital 
              transformation with accompanying change management.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-btsai-blue">We are here for you</h3>
          </div>
          
          <div className="bg-gray-50 rounded-lg shadow-md p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-btsai-blue mb-3">BTS AI Ltd</h4>
                <p className="text-gray-600 mb-1">169 soi 1 udomsuk 58, mooban rangsiya, บางนา, Bang Na, Bangkok 10260</p>
                <p className="text-gray-600 mb-1">Tel.: +66 081 812 6021</p>
                <p className="text-gray-600">E-Mail: info@btsai.net</p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-btsai-blue mb-3">Ready for the next step?</h4>
                <p className="text-gray-600 mb-4">
                  Would you like to learn more about the strategy and implementation of a smart factory 
                  and digital services? Then please feel free to contact us.
                </p>
                <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
