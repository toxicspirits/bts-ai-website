import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

const products = [
  {
    title: "SAP® DM",
    description:
      "Unlock the full potential of your production operations with SAP Digital Manufacturing (SAP® DM). Our SAP® DM solutions deliver real-time insights, intelligent execution, and seamless integration across the shop floor. From advanced analytics to automated workflows, we help enterprises drive efficiency, reduce downtime, and enable adaptive manufacturing processes that align with Industry 4.0 standards.",
    image: "https://content.cdn.sap.com/is/image/sap/294690:3840x2160?wid=433&hei=243&fit=stretch,1&resMode=sharp2",
  },
  {
    title: "Custom MES Development",
    description:
      "When off-the-shelf MES solutions fall short, our custom MES development services deliver tailored functionality built on modern frameworks like .NET, Java, and Node.js. From production scheduling to quality assurance and performance analytics, we engineer scalable MES platforms that adapt to your unique process requirements and drive operational excellence.",
    image: "/assets/images/MES.jpg",
  },
  {
    title: "SAP® BTP",
    description:
      "Maximize innovation with custom development on SAP® Business Technology Platform (SAP® BTP). We create scalable, cloud-native applications and extensions that enhance your SAP® ecosystem—whether it's building Fiori apps, integrating third-party APIs, or deploying AI/ML models. With SAP® BTP, we empower your enterprise to innovate faster and adapt smarter.",
    image: "/assets/images/BTP.jpg",
  },
  {
    title: "SAP® IBP",
    description:
      "Leverage the power of SAP® IBP enhanced with custom interfaces and extensions developed in .NET and Java. Our solutions enable dynamic supply chain modeling, demand forecasting, and scenario planning. Whether integrating IBP with non-SAP® systems or building custom planning logic, we ensure your supply chain remains agile and responsive.",
    image: "/assets/images/IBP.jpg",
  },
  {
    title: "SAP® ME",
    description:
      "Empower your discrete manufacturing operations with SAP® ME, a robust manufacturing execution system tailored for precision, traceability, and compliance. We provide end-to-end deployment, configuration, and customization of SAP® ME to help you standardize operations, reduce cycle times, and ensure product quality—ensuring your shop floor is connected, controlled, and agile.",
    image: "/assets/images/ME.jpg",
  },
  {
    title: "S4 HANA Integration",
    description:
      "Accelerate digital transformation with seamless S/4HANA integration across your enterprise landscape. We deliver comprehensive integration services that align SAP® S/4HANA with both upstream and downstream systems including MES, PLM, CRM, and legacy platforms. Our approach ensures data consistency, optimized workflows, and real-time visibility across your value chain.",
    image: "/assets/images/HANA.jpg",
  },
  {
    title: "Machine Connectivity",
    description:
      "We specialize in bridging the gap between OT and IT through machine connectivity solutions that bring real-time data from sensors, PLCs, and legacy equipment directly into your digital platforms. Whether integrating with OPC UA, MQTT, or proprietary protocols, we ensure scalable and secure data pipelines that enable predictive maintenance, performance monitoring, and smart decision-making on the factory floor.",
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
          <Navbar/>

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
        <footer className="bg-btsai-gray text-white py-10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-8">

              {/* Company Info */}
              <div>
                <h4 className="text-xl font-semibold text-black mb-3">BTS AI Ltd</h4>
                <p className="text-gray-800 mb-1">
                  <strong>Address:</strong> 169 soi 1 udomsuk 58, mooban rangsiya, บางนา, Bang Na, Bangkok 10260
                </p>
                <p className="text-gray-800 mb-1"><strong>Tel:</strong> +66 081 812 6021</p>
                <p className="text-gray-800"><strong>Email:</strong> info@btsai.net</p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-xl font-semibold text-black mb-3 text-right">Quick Links</h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="text-right"><a href="/#home" className="hover:text-white">Digital Transformation</a>
                  </li>
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
                    src="/assets/Logo-new.png"
                    alt="BTS AI Logo"
                    className="h-12"
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
