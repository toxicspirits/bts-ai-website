

import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Products from "@/components/Products";
import Careers from "@/components/Careers";
import ContactSection from "@/components/ContactSection";
import { Button } from "@/components/ui/button";

const Index = () => {
  useEffect(() => {
    const revealElements = () => {
      const reveals = document.querySelectorAll(".reveal");
      
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    
    window.addEventListener("scroll", revealElements);
    revealElements(); // Call once to check for elements in view on load
    
    return () => window.removeEventListener("scroll", revealElements);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      
      <div className="mt-0 pt-16">
        <div className="reveal">
          <Products />
        </div>
        
        <div className="reveal">
          <Services />
        </div>
        
        <div className="reveal">
          <About />
        </div>
        
        <div className="reveal">
          <Careers />
        </div>
        
        <div className="reveal">
          <ContactSection />
        </div>
      </div>
      
      <footer className="bg-btsai-lightblue text-white py-10">
  <div className="container mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">
      
      {/* Company Info */}
      <div>
        <h4 className="text-xl font-semibold text-black mb-3">BTS AI Ltd</h4>
        <p className="text-gray-600 mb-1">
          <strong>Address:</strong> 169 soi 1 udomsuk 58, mooban rangsiya, บางนา, Bang Na, Bangkok 10260
        </p>
        <p className="text-gray-600 mb-1"><strong>Tel:</strong> +66 081 812 6021</p>
        <p className="text-gray-600"><strong>Email:</strong> info@btsai.net</p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="text-xl font-semibold text-black mb-3 text-right">Quick Links</h4>
        <ul className="text-gray-600 space-y-2">
          <li className="text-right"><a href="/#home" className="hover:text-white">Digital Transformation</a></li>
          <li className="text-right"><a href="/#products" className="hover:text-white">Products</a></li>
          <li className="text-right"><a href="/#services" className="hover:text-white">Services</a></li>
          <li className="text-right"><a href="/#about" className="hover:text-white">Company</a></li>
          <li className="text-right"><a href="/#careers" className="hover:text-white">Careers</a></li>
        </ul>
      </div>
    </div>

    {/* Logo & Copyright */}
    <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/30 pt-6">
      <div className="mb-4 md:mb-0 flex items-center">
        <img 
          src="/assets/BTSAI Logo - New Blue.png"
          alt="BTS AI Logo" 
          className="h-10"
        />
      </div>
      <div className="text-center md:text-right">
        <p className="text-white">© {new Date().getFullYear()} BTS AI Ltd. All rights reserved.</p>
      </div>
    </div>
  </div>
</footer>


    </div>
  );
};

export default Index;
