
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { title: "Digital Transformation", href: "#home" },
    { title: "Products", href: "#products" },
    { title: "Services", href: "#services" },
    { title: "Company", href: "#about" },
    { title: "Careers", href: "#careers" },
  ];

  return (
    <nav 
      className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center">
          <img 
            src="/lovable-uploads/5a3c2604-cf41-477d-bdb3-9404ae4cd5f0.png" 
            alt="BTS AI Logo" 
            className="h-10 mr-2"
          />
        </a>
        
        {/* Empty space in the middle */}
        <div className="flex-grow"></div>
        
        {/* Navigation moved to right */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="font-medium text-gray-600 hover:text-btsai-blue transition-colors"
            >
              {item.title}
            </a>
          ))}
        </div>
        
        <div className="hidden md:block ml-8">
          <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
            Contact Us
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-500 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-btsai-blue hover:bg-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.title}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button className="w-full bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
