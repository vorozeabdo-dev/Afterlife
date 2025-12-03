
import React from 'react';

const PartnersStrip: React.FC = () => {
  const brands = [
    "NVIDIA", "INTEL", "ASUS ROG", "STEELSERIES", "HYPERX"
  ];

  return (
    <section className="border-t border-white/5 bg-cyber-black py-8 md:py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-0 opacity-80">
          {brands.map((brand, index) => (
            <span 
              key={index}
              className="font-orbitron font-bold text-xl md:text-2xl text-gray-700 hover:text-white hover:text-glow-cyan transition-all duration-300 cursor-default select-none uppercase tracking-widest"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersStrip;
