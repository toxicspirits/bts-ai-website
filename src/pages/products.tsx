import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const products = [
  {
    title: "SAP BTP",
    description:
      "SAP BPT (Business Process Testing) is a component of SAP Solution Manager that facilitates efficient, end-to-end testing of business processes across SAP landscapes...",
    image: "https://content.cdn.sap.com/is/image/sap/294690:3840x2160?wid=433&hei=243&fit=stretch,1&resMode=sharp2",
  },
  {
    title: "Custom MES Development",
    description:
      "Custom MES (Manufacturing Execution System) Development involves building a tailored software solution to manage and optimize shop floor operations...",
    image: "/assets/images/MES.jpg",
  },
  {
    title: "SAP BTP",
    description:
      "SAP BPT (Business Process Testing) is a component of SAP Solution Manager that facilitates efficient, end-to-end testing of business processes...",
    image: "/assets/images/BTP.jpg",
  },
  {
    title: "SAP IBP",
    description:
      "SAP IBP (Integrated Business Planning) is a cloud-based planning solution that enables real-time, end-to-end supply chain visibility and collaboration...",
    image: "/assets/images/IBP.webp",
  },
  {
    title: "SAP ME",
    description:
      "SAP BE (Business Explorer) is a suite of analytical tools within the SAP NetWeaver BI platform that allows users to create, view, and analyze business data...",
    image: "/assets/images/ME.jpg",
  },
  {
    title: "S4 HANA Integration",
    description:
      "S/4HANA integration refers to seamless connectivity between SAP S/4HANA and other systems to enable real-time data exchange...",
    image: "/assets/images/HANA.webp",
  },
  {
    title: "Machine Connectivity",
    description:
      "Machine connectivity refers to seamless integration and communication between machines, devices, and systems within an industrial or IoT environment...",
    image: "/assets/images/machine.jpg",
  },
];

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="bg-white text-gray-700">
      <Navbar />

      {/* Header Section */}
      <div
        className="relative h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: "url('/assets/images/factory.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">OUR PRODUCTS</h1>
          <p className="text-lg mt-4">
            From Shop Floor to Cloud We Connect, Build, and Optimize.

          </p>
        </div>
      </div>

      {/* Product Cards */}
      <div className="max-w-6xl mx-auto py-16 px-4 space-y-16">
        {products.map((product, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 === 0 ? "" : "md:flex-row-reverse"
            } gap-10 items-center`}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full md:w-1/2 rounded-lg shadow-lg"
            />
            <div className="md:w-1/2">
              <h2 className="text-2xl font-bold text-btsai-blue mb-4">
                {product.title}
              </h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
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

export default ProductsPage;
