
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-20 bg-gradient-to-br from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-12 mb-10 md:mb-0">
            <div className="mb-8 flex items-center">
              <img 
                src="/lovable-uploads/5a3c2604-cf41-477d-bdb3-9404ae4cd5f0.png" 
                alt="BTS AI Logo" 
                className="h-12 mr-3"
              />
              <span className="text-lg text-btsai-blue font-medium">Digital Transformation</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-btsai-blue mb-6">
              Digital Transformation for Manufacturing Leaders
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              BTS AI is your consultant and implementation partner for Lean Supply Chain & Manufacturing, 
              creating value through AI-driven approaches. <span className="font-semibold">Connecting Values in AI.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-btsai-blue text-btsai-blue hover:bg-btsai-blue/10 px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-btsai-lightblue/20 absolute inset-0 rounded-lg transform rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
                alt="Smart Factory" 
                className="rounded-lg shadow-xl relative z-10 object-cover w-full h-[400px]"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-btsai-blue mb-3">Transparent & Efficient</h3>
            <p className="text-gray-600">Create productive and efficient systems with complete transparency.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-btsai-blue mb-3">Future-Proof Systems</h3>
            <p className="text-gray-600">Connected systems with AI-driven approach for long-term sustainability.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-btsai-blue mb-3">Early Benefits</h3>
            <p className="text-gray-600">Realize value quickly with accepted systems and agile implementation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
