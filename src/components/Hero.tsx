
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[600px] w-full bg-btsai-blue overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-10">
        <img 
          src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952" 
          alt="Smart Factory" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-btsai-blue/50"></div>
        
        {/* Wave shape at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path 
              fill="#ffffff" 
              fillOpacity="1" 
              d="M0,128L80,138.7C160,149,320,171,480,165.3C640,160,800,128,960,122.7C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
        <div className="max-w-3xl text-white">
          {/* Logo and tagline */}
          <div className="mb-8 flex items-center">
            <img 
              src="/lovable-uploads/5a3c2604-cf41-477d-bdb3-9404ae4cd5f0.png" 
              alt="BTS AI Logo" 
              className="h-16 mr-3 bg-white/90 p-2 rounded"
            />
          </div>
          
          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Art of <br />Automation
          </h1>
          
          {/* Description paragraphs */}
          <p className="text-lg md:text-xl mb-6 max-w-2xl">
            We enable manufacturers to improve their business, delivering
            transparency and control with software solutions and
            consulting for automation.
          </p>
          
          <p className="text-lg md:text-xl mb-10 max-w-2xl">
            30 Years experienced, more than 200 engineers strong,
            automation experts worldwide.
          </p>
          
          {/* CTA Button */}
          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-6 text-lg rounded-sm"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
      
      {/* Optional Feature Blocks - Can be moved outside this component if needed */}
      <div className="container mx-auto px-4 relative z-20 mt-auto hidden md:block">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature blocks will be shown in wider screens */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
