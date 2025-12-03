import React from 'react';
import { ChevronsRight } from 'lucide-react';
import { SectorData } from '../types';

interface PromoSectionProps {
    currentSector: SectorData;
}

const PromoSection: React.FC<PromoSectionProps> = ({ currentSector }) => {
  return (
    // Changed negative margins to standard padding to move it below Hero
    <div className="container mx-auto px-4 py-10 md:py-16 relative z-30 flex justify-center md:justify-end mb-10">
      <div className="w-full md:w-[600px] relative group cursor-pointer transform md:-translate-y-12">
        
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyber-cyan to-cyber-pink opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-500"></div>
        
        {/* Main Card */}
        <div className="relative bg-cyber-black/90 backdrop-blur-xl border border-cyber-cyan/30 p-1 clip-corner-br shadow-2xl">
            
            {/* Inner Content Wrapper */}
            <div className="relative bg-cyber-black/50 p-6 md:p-10 flex flex-row items-center gap-6 overflow-hidden">
                
                {/* Decorative Grid Background */}
                <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,240,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Left Icon */}
                <div className="relative z-10 p-4 border border-cyber-pink bg-cyber-pink/10 shadow-[0_0_15px_rgba(217,0,214,0.3)] group-hover:bg-cyber-pink group-hover:text-black transition-all duration-300">
                    <ChevronsRight className="w-8 h-8 md:w-10 md:h-10 text-cyber-pink group-hover:text-black transition-colors" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col z-10 w-full">
                    <div className="flex justify-between items-end">
                        <h3 className="font-orbitron font-black text-4xl text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink drop-shadow-lg uppercase">
                            ВХОД
                        </h3>
                        <span className="text-gray-500 font-rajdhani font-bold uppercase tracking-widest text-sm mb-1">
                           {currentSector.name.replace('СЕКТОР ', '')}
                        </span>
                    </div>
                    
                    <div className="h-px w-full bg-gradient-to-r from-cyber-cyan to-transparent my-3"></div>
                    
                    <p className="font-rajdhani font-bold text-white text-xl tracking-wide uppercase">
                        {currentSector.address}
                    </p>
                    <p className="font-mono text-cyber-cyan text-base tracking-widest mt-1">
                        {currentSector.phone}
                    </p>
                </div>

                {/* Cyber Accents */}
                <div className="absolute top-0 right-0 p-2">
                    <div className="w-16 h-1 bg-cyber-cyan/50"></div>
                </div>
                <div className="absolute bottom-0 left-0 p-2">
                    <div className="w-16 h-1 bg-cyber-pink/50"></div>
                </div>

            </div>
            
            {/* Corner Bracket */}
            <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyber-cyan"></div>
        </div>
      </div>
    </div>
  );
};

export default PromoSection;