
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <section id="careers" className="section bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-btsai-blue mb-6">Your Career at BTS AI</h2>
            <p className="text-gray-600 mb-6">
              In just minutes, discover your dream job that perfectly matches your strengths and aspirations.
              Join our team of innovative professionals working at the forefront of manufacturing digital transformation.
            </p>
            <div className="bg-gray-50 rounded-lg p-6 shadow-md mb-6">
              <h3 className="text-xl font-semibold text-btsai-purple mb-3">Why Join Us?</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-btsai-purple mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work with cutting-edge technologies and methodologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-btsai-purple mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Collaborative and innovative company culture</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-btsai-purple mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Professional development and growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-btsai-purple mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Work with global manufacturing leaders</span>
                </li>
              </ul>
            </div>
            <Button className="bg-btsai-purple hover:bg-btsai-blue transition-colors">
              View Open Positions
            </Button>
          </div>
          <div className="relative">
            <div className="bg-btsai-purple/20 absolute inset-0 rounded-lg transform rotate-2"></div>
            <img 
              src="https://images.unsplash.com/photo-1605826832916-3fe306e2741e" 
              alt="Team Collaboration" 
              className="rounded-lg shadow-xl relative z-10 w-full h-[400px] object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1600880292203-757bb62b4baf";
              }}
            />
          </div>
        </div>

        <div className="mt-16 p-8 bg-btsai-blue/5 rounded-lg shadow-md">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-btsai-blue">Upcoming Events</h3>
            <p className="text-gray-600">Where and when to find out more about smart factories and digital services</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-btsai-purple font-semibold mb-2">June 15, 2025</div>
              <h4 className="text-lg font-medium text-btsai-blue mb-2">Digital Manufacturing Summit</h4>
              <p className="text-gray-600 mb-4">Bangkok, Thailand</p>
              <Button variant="outline" className="w-full border-btsai-purple text-btsai-purple hover:bg-btsai-purple/10">
                Register
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-btsai-purple font-semibold mb-2">July 8, 2025</div>
              <h4 className="text-lg font-medium text-btsai-blue mb-2">SAP for Smart Manufacturing Webinar</h4>
              <p className="text-gray-600 mb-4">Online Event</p>
              <Button variant="outline" className="w-full border-btsai-purple text-btsai-purple hover:bg-btsai-purple/10">
                Register
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100">
              <div className="text-btsai-purple font-semibold mb-2">August 22, 2025</div>
              <h4 className="text-lg font-medium text-btsai-blue mb-2">Industry 4.0 Innovation Conference</h4>
              <p className="text-gray-600 mb-4">Singapore</p>
              <Button variant="outline" className="w-full border-btsai-purple text-btsai-purple hover:bg-btsai-purple/10">
                Register
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
