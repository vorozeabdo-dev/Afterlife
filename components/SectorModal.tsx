
import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../constants';
import { SectorData } from '../types';
import { MapPin, Crosshair, Cpu, Wifi } from 'lucide-react';

interface SectorModalProps {
  isOpen: boolean;
  onSelect: (sector: SectorData) => void;
  currentSectorId?: string;
}

const SectorModal: React.FC<SectorModalProps> = ({ isOpen, onSelect, currentSectorId }) => {
  if (!isOpen) return null;

  // Animation variants for "Holographic Materialize" effect
  const modalVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95,
      filter: "blur(10px) brightness(0)",
      clipPath: "inset(50% 0 50% 0)"
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      filter: "blur(0px) brightness(1)",
      clipPath: "inset(0 0 0 0)",
      transition: { 
        duration: 0.5, 
        ease: "circOut",
        when: "beforeChildren",
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Dark Backdrop with Noise */}
      <div className="absolute inset-0 bg-cyber-black/95 backdrop-blur-xl"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      {/* Main Modal Container - Added scrolling for small screens */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={modalVariants}
        className="relative z-10 w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#0a0a0a] shadow-[0_0_100px_rgba(0,240,255,0.15)] group/modal"
      >
        {/* Cyberpunk Circuit Board Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none fixed">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800 via-black to-black"></div>
             {/* Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden h-full fixed">
            <div className="w-full h-2 bg-gradient-to-b from-transparent via-cyber-cyan/20 to-transparent animate-scanline"></div>
        </div>

        {/* Pulsing Neon Border */}
        <div className="absolute inset-0 border border-cyber-cyan/50 z-30 shadow-[0_0_15px_rgba(0,240,255,0.2),inset_0_0_15px_rgba(0,240,255,0.1)] pointer-events-none animate-pulse fixed"></div>
        
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-l-4 border-cyber-cyan z-40 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-8 h-8 md:w-12 md:h-12 border-t-4 border-r-4 border-cyber-cyan z-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-l-4 border-cyber-cyan z-40 pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 md:w-12 md:h-12 border-b-4 border-r-4 border-cyber-cyan z-40 pointer-events-none"></div>

        <div className="relative z-30 p-6 md:p-16 flex flex-col items-center">
            
            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8 md:mb-12 text-center relative">
                 <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-px h-12 bg-gradient-to-b from-transparent to-cyber-cyan/50"></div>
                 <h2 className="glitch-text font-orbitron font-black text-2xl md:text-6xl text-white tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(0,240,255,0.8)] mb-2" data-text="ВЫБЕРИТЕ СЕКТОР">
                    ВЫБЕРИТЕ СЕКТОР
                </h2>
                <div className="flex items-center justify-center gap-2 md:gap-4 text-cyber-cyan/70 font-mono text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] uppercase">
                    <span>// Init</span>
                    <span className="w-1.5 h-1.5 bg-cyber-cyan rounded-full animate-ping"></span>
                    <span>// Select Location</span>
                </div>
            </motion.div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full max-w-4xl">
                {Object.values(SECTORS).map((sector) => {
                    const isActive = currentSectorId === sector.id;
                    const isLenina = sector.id === 'lenina';
                    const themeColor = isLenina ? 'text-cyber-cyan' : 'text-cyber-pink';
                    const borderColor = isLenina ? 'border-cyber-cyan' : 'border-cyber-pink';
                    
                    return (
                        <motion.button
                            key={sector.id}
                            variants={itemVariants}
                            onClick={() => onSelect(sector)}
                            className={`
                                group relative flex flex-col items-center text-center 
                                w-full overflow-hidden transition-all duration-300 min-h-[200px] md:min-h-[300px]
                            `}
                        >
                             {/* --- CARD BORDER & TRAIL ANIMATION --- */}
                             <div className={`absolute inset-0 bg-white/5 opacity-50 group-hover:opacity-100 transition-opacity`}></div>
                             
                             {/* Animated Light Trail Border (Desktop only for performance) */}
                             <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                  <div 
                                    className="absolute inset-[-50%] animate-spin-slow"
                                    style={{ 
                                        backgroundImage: `conic-gradient(from 0deg, transparent 0deg, transparent 340deg, ${isLenina ? '#00F0FF' : '#D900D6'} 360deg)` 
                                    }}
                                  ></div>
                             </div>

                             {/* Inner Content Card */}
                             <div className="absolute inset-[1px] md:inset-[2px] bg-[#0c0c0c] z-10 flex flex-col items-center p-6 md:p-8 transition-colors group-hover:bg-[#111]">
                                 
                                 {/* Hover Glow Background */}
                                 <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-b from-${isLenina ? 'cyber-cyan' : 'cyber-pink'} to-transparent`}></div>

                                 {/* Icon */}
                                 <div className="relative mb-4 md:mb-6 p-2 md:p-4">
                                     <Crosshair 
                                        className={`w-10 h-10 md:w-16 md:h-16 ${themeColor} drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-300`} 
                                     />
                                 </div>
                                
                                 {/* Title */}
                                 <h3 className={`font-orbitron font-black text-xl md:text-4xl mb-2 md:mb-3 text-white uppercase tracking-wider group-hover:scale-105 transition-transform duration-300 drop-shadow-md group-hover:${themeColor}`}>
                                     {sector.name.replace('СЕКТОР ', '')}
                                 </h3>
                                
                                 {/* Description */}
                                 <p className="font-rajdhani text-gray-400 text-sm md:text-lg mb-6 md:mb-8 uppercase tracking-wide group-hover:text-white transition-colors">
                                     {sector.description}
                                 </p>
                                
                                 {/* Footer Info */}
                                 <div className="mt-auto w-full border-t border-white/10 pt-4 flex justify-between items-center text-[10px] md:text-xs font-mono text-gray-500">
                                     <div className="flex items-center gap-2 group-hover:text-white transition-colors">
                                         <MapPin size={12} />
                                         <span>{sector.address}</span>
                                     </div>
                                 </div>

                                 {/* Active Indicator */}
                                 {isActive && (
                                     <div className={`absolute top-4 right-4 flex items-center gap-2 px-2 py-1 bg-${isLenina ? 'cyber-cyan' : 'cyber-pink'}/20 border ${borderColor}`}>
                                         <div className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-${isLenina ? 'cyber-cyan' : 'cyber-pink'} animate-pulse`}></div>
                                         <span className={`text-[8px] md:text-[10px] font-bold uppercase ${themeColor}`}>Selected</span>
                                     </div>
                                 )}
                             </div>

                        </motion.button>
                    );
                })}
            </div>

            <motion.p variants={itemVariants} className="mt-8 md:mt-12 font-mono text-gray-600 text-[10px] md:text-xs">
                SECURE CONNECTION ESTABLISHED // V.4.0.2
            </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default SectorModal;
