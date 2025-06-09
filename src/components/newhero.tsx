import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // optional icons (install lucide-react if not already)

const slides = [
  {
    image: "/assets/images/1.webp",
    headline: "Manufacturing Maturity Analysis",
    subheadline: "Assess your current processes and unlock operational excellence.",
  },
  {
    image: "/assets/images/2.webp",
    headline: "Proof of Concept",
    subheadline: "Test and validate SAP solutions in real-world industrial environments.",
  },
  {
    image: "/assets/images/3.webp",
    headline: "Legacy System Migration",
    subheadline: "Seamlessly migrate from outdated systems to SAP S/4HANA.",
  },
  {
    image: "/assets/images/4.webp",
    headline: "Machine Integration with S/4HANA",
    subheadline: "Connect industrial machinery directly with your SAP landscape.",
  },
  {
    image: "/assets/images/5.webp",
    headline: "IoT & Digital Twin",
    subheadline: "Digitize physical assets and monitor them in real time with SAP.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative h-screen w-full">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.headline}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center text-left text-white px-6">
            <h1 className="text-4xl md:text-6xl ml-20 font-bold mb-4">{slide.headline}</h1>
            <p className="text-lg md:text-2xl max-w-3xl ml-20">{slide.subheadline}</p>
          </div>
        </div>
      ))}

      {/* Left and Right Arrows */}
      <button
        onClick={goPrev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full z-20"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={goNext}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-3 rounded-full z-20"
        aria-label="Next Slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 rounded-full border-2 ${
              index === current ? "bg-white" : "border-white"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </section>
  );
}
