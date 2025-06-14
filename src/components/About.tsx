import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="section bg-white relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
          {/* Border Frame */}
          <div className="relative">
            <div className="absolute top-[-5px] left-[-5px] h-full w-full border-t-4 border-l-4 border-btsai-blue z-0 rounded-lg " />
            
            <motion.img
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/assets/images/about-us.webp"
              alt="BTS AI Office"
              className="rounded-lg shadow-lg object-cover h-full w-full relative z-10"
            />
          </div>

          {/* Text Section */}
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
              {/*<Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">*/}
              {/*  Learn More About Us*/}
              {/*</Button>*/}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
