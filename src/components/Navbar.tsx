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

  const serviceItems = [
    { title: "Manufacturing Maturity Analysis", href: "/manufacturing-analysis" },
    { title: "Proof of Concept", href: "/proof-of-concept" },
    { title: "Legacy System Migration", href: "/legacy-migration" },
    { title: "Machine Integration", href: "/hana" },
    { title: "IoT & Digital Twin", href: "/iot" },
  ];

  const navItems = [
    { title: "Digital Transformation", href: "/#home" },
    { title: "Products", href: "/products" },
    { title: "Services", dropdown: true, href: "/#services" },
    { title: "Company", href: "/#about" },
    { title: "Careers", href: "/#careers" },
  ];

  const renderNavLink = (item) => {
    if (item.dropdown) {
      return (
        <div key="services" className="relative group">
          <span className="cursor-pointer font-medium text-white hover:text-btsai-blue transition-colors">
            Services
          </span>
          <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-50">
            <div className="py-2">
              {serviceItems.map((subItem) => (
                <HashLink
                  key={subItem.title}
                  to={subItem.href}
                  smooth
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-btsai-blue hover:text-white transition"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {subItem.title}
                </HashLink>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return (
      <HashLink
        key={item.title}
        smooth
        to={item.href}
        className="font-medium text-white hover:text-btsai-blue transition-colors"
        onClick={() => setIsMobileMenuOpen(false)}
      >
        {item.title}
      </HashLink>
    );
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-30 transition-all duration-300",
        isScrolled
          ? "bg-black bg-opacity-30 backdrop-blur-lg shadow-md py-2"
          : "py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="assets/BTS-Logo-square.jpeg" alt="BTS AI Logo" className="h-10 mr-1" />
          <span className="text-blue-700 font-semibold">
            Connecting values in AI.
          </span>
        </Link>

        <div className="flex-grow"></div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8 items-center">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
{isMobileMenuOpen && (
  <div className="md:hidden bg-white shadow-lg absolute w-full z-40">
    <div className="px-4 pt-4 pb-4 space-y-4">
      {navItems.map((item) => {
        if (item.dropdown) {
          return (
            <div key="services-mobile">
              <span className="block text-slate-900 font-semibold text-base mb-2">
                Services
              </span>
              <div className="pl-3 space-y-2">
                {serviceItems.map((subItem) => (
                  <HashLink
                    key={subItem.title}
                    to={subItem.href}
                    smooth
                    className="block text-sm text-gray-700 hover:text-btsai-blue transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    • {subItem.title}
                  </HashLink>
                ))}
              </div>
            </div>
          );
        }

        return (
          <HashLink
            key={item.title}
            smooth
            to={item.href}
            className="block text-slate-900 font-medium text-base hover:text-btsai-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {item.title}
          </HashLink>
        );
      })}

      {/* Contact Button */}
      <div>
        <HashLink
          smooth
          to="/#contact"
          onClick={() => setIsMobileMenuOpen(false)}
        >
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
