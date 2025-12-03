import React from 'react';
import { MapPin } from 'lucide-react';
import { SectorData } from '../types';

interface HeroProps {
  currentSector: SectorData;
}

const Hero: React.FC<HeroProps> = ({ currentSector }) => {
  return (
    <section className="relative w-full min-h-screen pt-20 flex flex-col justify-center overflow-hidden bg-cyber-black">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0">
        {/* Base Dark Background */}
        <div className="absolute inset-0 bg-cyber-black"></div>
        
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyber-cyan/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/5 blur-[150px] rounded-full pointer-events-none"></div>

        {/* Scanlines/Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[5] bg-[length:100%_2px,3px_100%] pointer-events-none opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col gap-6 lg:gap-10 mt-10 md:mt-0">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 animate-pulse">
            <div className="w-2 h-2 bg-cyber-cyan rounded-full"></div>
            <p className="font-mono text-cyber-cyan text-xs md:text-sm tracking-[0.2em] font-bold uppercase">
                SYSTEM ONLINE // {currentSector.name}
            </p>
        </div>

        {/* Main Title */}
        <div className="flex flex-col leading-[0.85] select-none">
          <h1 className="font-orbitron font-bold italic text-6xl md:text-8xl lg:text-[130px] text-white tracking-tighter drop-shadow-2xl">
            AFTERLIFE
          </h1>
          <div className="relative w-fit">
            <h2 className="glitch-text font-orbitron font-black italic text-5xl md:text-7xl lg:text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-[#8c008a] tracking-tighter drop-shadow-[0_0_15px_rgba(217,0,214,0.5)]">
              CYBER ARENA
            </h2>
          </div>
        </div>

        {/* Quote */}
        <div className="border-l-4 border-cyber-yellow pl-6 py-1 max-w-2xl">
            <p className="font-rajdhani text-xl md:text-2xl text-gray-300 italic font-light tracking-wide">
                "We'll never fade away."
            </p>
        </div>

        {/* Location Badge */}
        <div className="flex items-center gap-4 bg-white/5 backdrop-blur-sm w-fit px-6 py-3 rounded-full border border-white/10 hover:border-cyber-pink/50 transition-colors">
            <div className="bg-cyber-pink/20 p-2 rounded-full">
                <MapPin className="text-cyber-pink w-5 h-5" />
            </div>
            <div className="flex flex-col">
                <span className="text-xs text-cyber-cyan font-bold tracking-widest uppercase">Current Location</span>
                <span className="font-rajdhani font-bold text-lg md:text-xl text-white">
                    {currentSector.address}
                    <span className="text-gray-400 mx-2">/</span> 
                    {currentSector.phone}
                </span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mt-8">
            
            {/* Primary Yellow Button */}
            <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 bg-cyber-yellow translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-cyber-yellow px-10 py-5 flex items-center justify-center border-2 border-transparent hover:brightness-110 transition-all cursor-pointer">
                    <span className="font-orbitron font-black text-cyber-black text-xl tracking-wider uppercase">
                        ЗАБРОНИРОВАТЬ
                    </span>
                </div>
            </button>

            {/* Secondary Outline Button */}
            <button className="group relative w-full sm:w-auto">
                <div className="absolute inset-0 border border-cyber-cyan/30 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-transparent border-2 border-cyber-cyan px-10 py-5 flex items-center justify-center transition-all hover:bg-cyber-cyan/10 cursor-pointer">
                    <span className="font-orbitron font-bold text-cyber-cyan text-xl tracking-wider uppercase group-hover:text-white transition-colors">
                        О КЛУБЕ
                    </span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-cyan"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyber-cyan"></div>
                </div>
            </button>

        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-1 opacity-50">
             <div className="h-px w-32 bg-cyber-cyan"></div>
             <div className="text-xs font-mono text-cyber-cyan text-right">
                // OPEN 24/7<br/>
                // HIGH PERFORMANCE<br/>
                // LOW LATENCY
             </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;