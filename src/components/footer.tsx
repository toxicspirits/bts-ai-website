import React from 'react';
import { Button } from '@/components/ui/button'; // Adjust path as needed

const Footer = () => {
  return (
    <footer className="bg-gray-50 rounded-t-lg shadow-inner px-6 py-12 mt-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-xl font-semibold text-btsai-blue mb-3">BTS AI Ltd</h4>
          <p className="text-gray-600 mb-1">
            <strong>Address:</strong> 169 soi 1 udomsuk 58, mooban rangsiya, บางนา, Bang Na, Bangkok 10260
          </p>
          <p className="text-gray-600 mb-1">
            <strong>Tel:</strong> +66 081 812 6021
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> info@btsai.net
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold text-btsai-blue mb-3">Ready for the next step?</h4>
          <p className="text-gray-600 mb-4">
            Would you like to learn more about the strategy and implementation of a smart factory and digital services?
            Then please feel free to contact us.
          </p>
          <a href="#contact">
            <Button className="bg-btsai-blue hover:bg-btsai-lightblue transition-colors">
              Contact Us
            </Button>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
