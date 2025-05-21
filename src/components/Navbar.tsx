import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
    { title: "Digital Transformation", href: "/#home" },
    { title: "Products", href: "/#products" },
    { title: "Services", href: "/#services" },
    { title: "Company", href: "/#about" },
    { title: "Careers", href: "/#careers" },
  ];

  const renderNavLink = (item) => {
    if (item.href.startsWith("/#")) {
      return (
        <HashLink
          key={item.title}
          smooth
          to={item.href}
          className="font-medium text-slate-700 hover:text-btsai-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.title}
        </HashLink>
      );
    } else {
      return (
        <Link
          key={item.title}
          to={item.href}
          className="font-medium text-slate-700 hover:text-btsai-blue transition-colors"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {item.title}
        </Link>
      );
    }
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled 
          ? "bg-slate-50 shadow-md py-2" 
          : "bg-gradient-to-r from-slate-100 to-blue-50 py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img 
            src="assets/BTSAI Logo - New Blue.png"
            alt="BTS AI Logo" 
            className="h-10 mr-2"
          />
          <span className="text-blue-700 font-semibold">
            Connecting values in AI.
          </span>
        </Link>

        <div className="flex-grow"></div>
        
        {/* Navigation - Desktop */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(renderNavLink)}
        </div>
        
        <div className="hidden md:block ml-8">
          <HashLink smooth to="/#contact">
            <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
              Contact Us
            </Button>
          </HashLink>
        </div>
        
        {/* Mobile menu toggle */}
        <button 
          className="md:hidden text-slate-700 focus:outline-none"
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
        <div className="md:hidden bg-slate-50 shadow-lg absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(renderNavLink)}
            <div className="px-3 py-2">
              <HashLink smooth to="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
                  Contact Us
                </Button>
              </HashLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;