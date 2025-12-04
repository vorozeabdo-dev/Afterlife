
import React from 'react';
import { MapPin } from 'lucide-react';
import { SectorData } from '../types';

interface HeroProps {
  currentSector: SectorData;
  onNavigate?: (view: 'HOME' | 'PRICING' | 'GAMES' | 'PROMOS' | 'ABOUT') => void;
  onOpenBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ currentSector, onNavigate, onOpenBooking }) => {
  return (
    <section className="relative w-full min-h-screen pt-16 md:pt-20 flex flex-col justify-center overflow-hidden bg-cyber-black">
      
      {/* Dynamic Styles for Animation */}
      <style>{`
        @keyframes kenBurns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-ken-burns {
          animation: kenBurns 20s ease-in-out infinite alternate;
        }
      `}</style>

      {/* --- BACKGROUND LAYERS --- */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        
        {/* 1. Cinematic Living Image (Ken Burns Effect) */}
        <div className="absolute inset-0 w-full h-full animate-ken-burns">
            <img 
                src="https://images.unsplash.com/photo-1555680202-c86f0e12f086?q=80&w=2070&auto=format&fit=crop" 
                alt="Cyberpunk City Background" 
                className="w-full h-full object-cover"
            />
        </div>
        
        {/* 2. Heavy Overlay for Text Contrast (Top & Bottom Fades) */}
        {/* Main darkened overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Gradient from bottom (matches page bg) to top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent"></div>
        {/* Gradient from top for nav contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-transparent opacity-60"></div>
        
        {/* 3. Texture & Atmosphere */}
        {/* Subtle Noise Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
        
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyber-cyan/10 blur-[150px] rounded-full mix-blend-screen"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyber-pink/10 blur-[150px] rounded-full mix-blend-screen"></div>

        {/* Scanlines/Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20"></div>
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 md:px-6 relative z-20 flex flex-col gap-4 md:gap-6 lg:gap-10 mt-12 md:mt-0">
        
        {/* Top Tag */}
        <div className="flex items-center gap-2 animate-pulse">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyber-cyan rounded-full shadow-[0_0_10px_#00F0FF]"></div>
            <p className="font-mono text-cyber-cyan text-[10px] md:text-sm tracking-[0.2em] font-bold uppercase drop-shadow-md">
                SYSTEM ONLINE // {currentSector.name}
            </p>
        </div>

        {/* Main Title */}
        <div className="flex flex-col leading-[0.85] select-none">
          <h1 className="font-orbitron font-bold italic text-[12vw] md:text-8xl lg:text-[130px] text-white tracking-tighter drop-shadow-2xl">
            AFTERLIFE
          </h1>
          <div className="relative w-fit">
            <h2 className="glitch-text font-orbitron font-black italic text-[10vw] md:text-7xl lg:text-[110px] text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-[#8c008a] tracking-tighter drop-shadow-[0_0_25px_rgba(217,0,214,0.6)]">
              CYBER ARENA
            </h2>
          </div>
        </div>

        {/* Quote */}
        <div className="border-l-2 md:border-l-4 border-cyber-yellow pl-4 md:pl-6 py-1 max-w-2xl mt-2 md:mt-0 bg-black/30 backdrop-blur-sm pr-4 rounded-r-sm">
            <p className="font-rajdhani text-lg md:text-2xl text-gray-200 italic font-light tracking-wide shadow-black drop-shadow-md">
                "We'll never fade away."
            </p>
        </div>

        {/* Location Badge */}
        <div className="flex items-center gap-3 md:gap-4 bg-black/60 backdrop-blur-md w-fit px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/10 hover:border-cyber-pink/50 transition-colors mt-2 md:mt-0 max-w-full shadow-lg group cursor-default">
            <div className="bg-cyber-pink/20 p-1.5 md:p-2 rounded-full flex-shrink-0 group-hover:bg-cyber-pink/40 transition-colors">
                <MapPin className="text-cyber-pink w-4 h-4 md:w-5 md:h-5 drop-shadow-[0_0_5px_#D900D6]" />
            </div>
            <div className="flex flex-col overflow-hidden">
                <span className="text-[9px] md:text-xs text-cyber-cyan font-bold tracking-widest uppercase truncate drop-shadow-sm">Current Location</span>
                <span className="font-rajdhani font-bold text-sm md:text-lg md:text-xl text-white truncate group-hover:text-cyber-yellow transition-colors">
                    {currentSector.address}
                    <span className="hidden sm:inline text-gray-400 mx-2">/</span>
                    <span className="block sm:inline text-gray-300">{currentSector.phone}</span>
                </span>
            </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mt-6 md:mt-8">
            
            {/* Primary Yellow Button */}
            <button 
                onClick={onOpenBooking}
                className="group relative w-full sm:w-auto"
            >
                <div className="absolute inset-0 bg-cyber-yellow translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2 box-shadow-[0_0_20px_#FEEF06]"></div>
                <div className="relative bg-cyber-yellow px-6 py-4 md:px-10 md:py-5 flex items-center justify-center border-2 border-transparent hover:brightness-110 transition-all cursor-pointer">
                    <span className="font-orbitron font-black text-cyber-black text-lg md:text-xl tracking-wider uppercase">
                        ЗАБРОНИРОВАТЬ
                    </span>
                </div>
            </button>

            {/* Secondary Outline Button */}
            <button 
                onClick={() => onNavigate && onNavigate('ABOUT')}
                className="group relative w-full sm:w-auto"
            >
                <div className="absolute inset-0 border border-cyber-cyan/30 translate-x-1 translate-y-1 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative bg-black/40 backdrop-blur-sm border-2 border-cyber-cyan px-6 py-4 md:px-10 md:py-5 flex items-center justify-center transition-all hover:bg-cyber-cyan/10 cursor-pointer">
                    <span className="font-orbitron font-bold text-cyber-cyan text-lg md:text-xl tracking-wider uppercase group-hover:text-white transition-colors drop-shadow-md">
                        О КЛУБЕ
                    </span>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-cyber-cyan shadow-[0_0_10px_#00F0FF]"></div>
                    <div className="absolute top-0 left-0 w-2 h-2 bg-cyber-cyan shadow-[0_0_10px_#00F0FF]"></div>
                </div>
            </button>

        </div>

        {/* Decorative Elements (Hidden on mobile) */}
        <div className="absolute bottom-10 right-10 hidden lg:flex flex-col items-end gap-1 opacity-70">
             <div className="h-px w-32 bg-cyber-cyan shadow-[0_0_10px_#00F0FF]"></div>
             <div className="text-xs font-mono text-cyber-cyan text-right drop-shadow-md">
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
