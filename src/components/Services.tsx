import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Factory, Lightbulb, RefreshCcw, Settings, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const bounceVariant = {
  hover: {
    y: [0, -10, 0],
    transition: { duration: 0.6, ease: "easeInOut", repeat: 0 },
  },
};

const Services = () => {
  const services = [
    {
      title: "Manufacturing Maturity Analysis",
      description:
        "Comprehensive assessment of your current manufacturing processes to identify optimization opportunities.",
      icon: <Factory className="h-12 w-12 text-btsai-purple" />,
      href: "/manufacturing-analysis",
    },
    {
      title: "Proof of Concept",
      description:
        "Rapid development and testing of new system concepts to validate their effectiveness before full implementation.",
      icon: <Lightbulb className="h-12 w-12 text-btsai-purple" />,
      href: "/proof-of-concept",
    },
    {
      title: "Legacy System Migration",
      description:
        "Seamless migration or replacement of outdated systems while preserving critical business data and processes.",
      icon: <RefreshCcw className="h-12 w-12 text-btsai-purple" />,
      href: "/legacy-migration",
    },
    {
      title: "Machine Integration with S4 HANA",
      description:
        "Seamless connectivity between production machinery and S4 HANA for real-time data flow and analysis.",
      icon: <Settings className="h-12 w-12 text-btsai-purple" />,
      href: "/hana",
    },
    {
      title: "IOT & Digital Twin",
      description:
        "Implementation of IoT sensors and digital twin technology for real-time monitoring and simulation of production processes.",
      icon: <Globe className="h-12 w-12 text-btsai-purple" />,
      href: "/iot",
    },
  ];

  return (
    <section id="services" className="section bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-btsai-blue mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From strategy consulting to operational excellence, we provide end-to-end solutions for manufacturing digital transformation.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              className="w-full sm:w-[45%] lg:w-[30%]"
              variants={bounceVariant}
            >
              <Link to={service.href} className="block focus:outline-none">
                <Card className="w-full border border-gray-200 hover:shadow-lg transition-shadow text-left cursor-pointer">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <motion.div
                      className="bg-btsai-lightgray rounded-full p-2"
                      variants={bounceVariant}
                    >
                      {service.icon}
                    </motion.div>
                    <CardTitle className="text-xl text-btsai-blue">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
