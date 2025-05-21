
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Search, Briefcase, Users, BriefcaseBusiness } from "lucide-react";
import { cn } from "@/lib/utils";

type JobPosting = {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  postedDate: Date;
  shortDescription: string;
  requirements: string[];
  isRemote: boolean;
};

const SAMPLE_JOBS: JobPosting[] = [
  {
    id: "job-001",
    title: "Senior Automation Engineer",
    department: "Engineering",
    location: "Bangkok, Thailand",
    type: "Full-time",
    postedDate: new Date(2025, 4, 15),
    shortDescription: "Lead the development of innovative automation solutions for manufacturing clients across Asia.",
    requirements: [
      "Bachelor's degree in Electrical Engineering, Computer Science, or related field",
      "7+ years of experience in industrial automation or manufacturing systems",
      "Proficiency in PLC programming, SCADA, and HMI development",
      "Experience with major automation platforms (Siemens, Allen Bradley, etc.)"
    ],
    isRemote: false
  },
  {
    id: "job-002",
    title: "Machine Learning Engineer",
    department: "AI Solutions",
    location: "Singapore",
    type: "Full-time",
    postedDate: new Date(2025, 4, 18),
    shortDescription: "Develop and deploy machine learning models to optimize manufacturing processes and enable predictive maintenance.",
    requirements: [
      "Master's degree in Computer Science, Data Science, or related field",
      "3+ years of experience applying ML techniques in industrial settings",
      "Proficiency in Python, TensorFlow, PyTorch, and data visualization",
      "Experience with time-series analysis and anomaly detection"
    ],
    isRemote: false
  },
  {
    id: "job-003",
    title: "Digital Transformation Consultant",
    department: "Consulting",
    location: "Remote",
    type: "Full-time",
    postedDate: new Date(2025, 4, 20),
    shortDescription: "Guide manufacturing clients through their digital transformation journey, from strategy to implementation.",
    requirements: [
      "Bachelor's degree in Business, Engineering, or related field",
      "5+ years of experience in digital transformation projects",
      "Strong knowledge of Industry 4.0 concepts and technologies",
      "Excellent communication and project management skills"
    ],
    isRemote: true
  },
  {
    id: "job-004",
    title: "IoT Solutions Architect",
    department: "Engineering",
    location: "Kuala Lumpur, Malaysia",
    type: "Full-time",
    postedDate: new Date(2025, 4, 25),
    shortDescription: "Design and implement IoT solutions for smart manufacturing environments.",
    requirements: [
      "Bachelor's degree in Computer Engineering, Electrical Engineering or related field",
      "5+ years of experience in IoT architecture and implementation",
      "Experience with industrial networking protocols and cloud platforms",
      "Knowledge of data security and privacy practices"
    ],
    isRemote: false
  },
];

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
    <div className="bg-gray-100 p-6 rounded-full mb-6">
      <Briefcase className="h-12 w-12 text-btsai-blue" />
    </div>
    <h3 className="text-2xl font-bold text-btsai-blue mb-3">No job openings found</h3>
    <p className="text-gray-600 max-w-md mb-8">
      We couldn't find any positions that match your search criteria. Please try different filters or check back soon for new opportunities.
    </p>
    <Button onClick={() => window.location.reload()}>
      Reset Filters
    </Button>
  </div>
);

const CareerOpenings = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState<JobPosting[]>(SAMPLE_JOBS);
  const [activeTab, setActiveTab] = useState("all");

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (!term) {
      filterJobs(activeTab);
      return;
    }
    
    const filtered = SAMPLE_JOBS.filter(job => 
      job.title.toLowerCase().includes(term.toLowerCase()) ||
      job.department.toLowerCase().includes(term.toLowerCase()) ||
      job.location.toLowerCase().includes(term.toLowerCase())
    );
    
    setFilteredJobs(filtered);
  };

  const filterJobs = (filter: string) => {
    setActiveTab(filter);
    
    if (filter === "all") {
      setFilteredJobs(searchTerm ? 
        SAMPLE_JOBS.filter(job => 
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
        ) : 
        SAMPLE_JOBS
      );
      return;
    }
    
    if (filter === "remote") {
      const filtered = SAMPLE_JOBS.filter(job => job.isRemote);
      setFilteredJobs(searchTerm ? 
        filtered.filter(job => 
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.location.toLowerCase().includes(searchTerm.toLowerCase())
        ) : 
        filtered
      );
      return;
    }
    
    const filtered = SAMPLE_JOBS.filter(job => job.department.toLowerCase() === filter.toLowerCase());
    setFilteredJobs(searchTerm ? 
      filtered.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase())
      ) : 
      filtered
    );
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-24 pb-16 bg-btsai-blue/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-btsai-blue mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover exciting opportunities to work with cutting-edge technology and help transform the manufacturing industry.
            </p>
          </div>
          
          {/* Career hero image */}
          <div className="relative rounded-lg overflow-hidden mb-12 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-btsai-blue/80 to-btsai-purple/70 z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
              alt="Career at BTS AI" 
              className="w-full h-64 md:h-80 object-cover"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1519389950473-47ba0277781c";
              }}
            />
            <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-white text-center p-4">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build the Future of Manufacturing</h2>
              <p className="text-lg md:text-xl max-w-2xl">
                Join our global team of experts and innovators shaping the next generation of smart factories.
              </p>
            </div>
          </div>
          
          {/* Search and filters */}
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search for jobs..." 
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className="pl-9" 
                />
              </div>
              
              <div className="w-full md:w-auto">
                <Tabs 
                  value={activeTab} 
                  onValueChange={filterJobs}
                  className="w-full md:w-auto"
                >
                  <TabsList className="w-full md:w-auto grid grid-cols-2 md:grid-cols-4 gap-1">
                    <TabsTrigger value="all">All Jobs</TabsTrigger>
                    <TabsTrigger value="engineering">Engineering</TabsTrigger>
                    <TabsTrigger value="ai solutions">AI Solutions</TabsTrigger>
                    <TabsTrigger value="remote">Remote Only</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Job listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                      <div>
                        <CardTitle className="text-xl font-semibold text-btsai-blue">{job.title}</CardTitle>
                        <CardDescription className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
                          <span className="flex items-center">
                            <BriefcaseBusiness className="h-4 w-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {job.location}
                          </span>
                          <span>Posted: {formatDate(job.postedDate)}</span>
                        </CardDescription>
                      </div>
                      <div className="mt-3 md:mt-0">
                        <span className={cn(
                          "inline-block px-3 py-1 rounded-full text-xs font-medium",
                          job.isRemote 
                            ? "bg-green-100 text-green-800" 
                            : "bg-blue-100 text-blue-800"
                        )}>
                          {job.isRemote ? "Remote" : "On-site"} · {job.type}
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{job.shortDescription}</p>
                    <div className="hidden sm:block">
                      <h4 className="font-medium mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 text-gray-600 space-y-1">
                        {job.requirements.slice(0, 2).map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                        {job.requirements.length > 2 && (
                          <li>And {job.requirements.length - 2} more requirements...</li>
                        )}
                      </ul>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
                      View Position
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <EmptyState />
            )}
          </div>
          
          {/* Work benefits section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-btsai-blue mb-8">Why Join BTS AI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-btsai-blue/10 p-4 rounded-full inline-block mb-4">
                  <Briefcase className="h-8 w-8 text-btsai-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Career Growth</h3>
                <p className="text-gray-600">
                  Continuous learning opportunities, mentorship programs, and clear paths for advancement.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-btsai-purple/10 p-4 rounded-full inline-block mb-4">
                  <Users className="h-8 w-8 text-btsai-purple" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Global Impact</h3>
                <p className="text-gray-600">
                  Work on projects that transform industries and create sustainable manufacturing practices.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-md text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                  <BriefcaseBusiness className="h-8 w-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation Culture</h3>
                <p className="text-gray-600">
                  Collaborate with top minds in a supportive environment that encourages creative thinking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerOpenings;
