
import React from 'react';
import { motion } from 'framer-motion';
import { SECTORS } from '../constants';
import { SectorData } from '../types';
import { MapPin, Zap, Gamepad2 } from 'lucide-react';

interface SectorModalProps {
  isOpen: boolean;
  onSelect: (sector: SectorData) => void;
  currentSectorId?: string;
}

const SectorModal: React.FC<SectorModalProps> = ({ isOpen, onSelect, currentSectorId }) => {
  if (!isOpen) return null;

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "circOut" } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" } })
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
      {/* 1. Dark Backdrop with Blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 bg-black/95 backdrop-blur-md"
      />

      {/* 2. Grid Texture Overlay (Holographic Feel) */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none opacity-50"></div>
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000000_100%)] pointer-events-none"></div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        // WIDENED CONTAINER: max-w-7xl to fix desktop text cutoff
        className="relative w-full max-w-7xl h-auto min-h-[80vh] md:h-[600px] flex flex-col items-center justify-center z-10 py-8 md:py-0"
      >
        {/* HEADER: Floating & Glitched */}
        <div className="text-center mb-6 md:mb-8 relative z-20 shrink-0">
             <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 mb-3 px-4 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md"
             >
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_8px_#22c55e]"></span>
                <span className="font-mono text-[10px] md:text-xs text-gray-300 tracking-[0.2em] uppercase">SYSTEM INITIALIZATION</span>
             </motion.div>
             <h2 className="font-orbitron font-black text-3xl md:text-6xl text-white tracking-widest glitch-text uppercase drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                ВЫБЕРИТЕ СЕКТОР
             </h2>
        </div>

        {/* CARDS CONTAINER: Split Layout */}
        <div className="w-full grow grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 px-4 md:px-8 pb-4 md:pb-8">
            {Object.values(SECTORS).map((sector, index) => {
                const isLenina = sector.id === 'lenina';
                const isActive = currentSectorId === sector.id;

                // --- THEME CONFIGURATION ---
                // Real Images from Yandex
                const bgImage = isLenina
                    ? 'https://avatars.mds.yandex.net/get-altay/5455550/2a000001834750a9b5f849d6d423dcec1e65/XXXL' // Lenina (Girl/Branding)
                    : 'https://avatars.mds.yandex.net/get-altay/10703420/2a0000018a5f7fe8a1b8c9f32ad5f3d369a5/XXXL'; // Demonstratsii

                // Colors
                const themeColor = isLenina ? 'text-cyber-cyan' : 'text-cyber-pink';
                const borderColor = isLenina ? 'border-cyber-cyan' : 'border-cyber-pink';
                
                // Gradients & Hovers
                const gradientOverlay = isLenina
                    ? 'bg-gradient-to-t from-black via-blue-900/40 to-transparent'
                    : 'bg-gradient-to-t from-black via-fuchsia-900/40 to-transparent';
                
                const hoverBorder = isLenina ? 'group-hover:border-cyber-cyan' : 'group-hover:border-cyber-pink';
                const hoverShadow = isLenina 
                    ? 'group-hover:shadow-[0_0_50px_rgba(0,240,255,0.25)]' 
                    : 'group-hover:shadow-[0_0_50px_rgba(217,0,214,0.25)]';

                return (
                    <motion.div
                        key={sector.id}
                        custom={index}
                        variants={cardVariants}
                        onClick={() => onSelect(sector)}
                        className={`
                            group relative w-full h-[300px] md:h-full rounded-2xl overflow-hidden cursor-pointer
                            border border-white/10 ${hoverBorder} ${hoverShadow}
                            transition-all duration-500 bg-black
                        `}
                    >
                        {/* 1. Background Image with Zoom Effect */}
                        <div className="absolute inset-0 overflow-hidden">
                            <img
                                src={bgImage}
                                alt={sector.name}
                                className="w-full h-full object-cover object-center opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-in-out"
                            />
                        </div>

                        {/* 2. Heavy Color Overlay (Fades on Hover to reveal branding) */}
                        <div className={`absolute inset-0 ${gradientOverlay} opacity-80 group-hover:opacity-40 transition-opacity duration-500`}></div>

                        {/* 3. Scanline/Grid Hover Effect */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[size:100%_4px] transition-opacity duration-300 pointer-events-none"></div>

                        {/* 4. Content Layer - LEFT ALIGNED */}
                        <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start text-left z-10">
                            
                            {/* Online Status Badge (Top Right) */}
                            <div className="absolute top-4 right-4 md:top-6 md:right-6 translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <div className={`flex items-center gap-2 px-3 py-1.5 bg-black/80 backdrop-blur-md border ${borderColor} rounded-sm shadow-lg`}>
                                    <div className={`w-2 h-2 rounded-full animate-pulse ${isLenina ? 'bg-cyber-cyan' : 'bg-cyber-pink'}`}></div>
                                    <span className={`text-[10px] font-mono font-bold uppercase ${themeColor}`}>ONLINE</span>
                                </div>
                            </div>

                            {/* Active Indicator (Top Left) */}
                            {isActive && (
                                <div className="absolute top-4 left-4 md:top-6 md:left-6">
                                     <div className={`px-3 py-1 md:px-4 md:py-1 ${isLenina ? 'bg-cyber-cyan text-black' : 'bg-cyber-pink text-white'} font-bold font-mono text-[10px] md:text-xs uppercase tracking-widest shadow-[0_0_15px_currentColor]`}>
                                        CONNECTED
                                     </div>
                                </div>
                            )}

                            {/* Main Icon - Left Aligned */}
                            <div className={`mb-4 md:mb-6 p-3 md:p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 group-hover:scale-110 transition-transform duration-300 shadow-xl ${themeColor}`}>
                                {isLenina ? <Zap size={32} md:size={40} strokeWidth={1.5} /> : <Gamepad2 size={32} md:size={40} strokeWidth={1.5} />}
                            </div>

                            {/* Text Content - Left Aligned */}
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 w-full text-left">
                                {/* Adjusted Font Size: md:text-4xl lg:text-5xl to prevent overflow */}
                                <h3 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl text-white uppercase tracking-tighter mb-2 drop-shadow-lg leading-tight break-words">
                                    {sector.name.replace('СЕКТОР ', '')}
                                </h3>
                                <div className="h-1 w-12 bg-white/20 mb-3 md:mb-4 group-hover:w-full transition-all duration-700 origin-left"></div>
                                <div className="flex items-center gap-2 md:gap-3 text-gray-400 group-hover:text-white transition-colors">
                                    <MapPin size={16} className="shrink-0" />
                                    <span className="font-rajdhani font-bold text-xs md:text-sm tracking-widest uppercase drop-shadow-md whitespace-nowrap overflow-hidden text-ellipsis">
                                        {sector.address}
                                    </span>
                                </div>
                            </div>

                        </div>

                        {/* 5. Animated Border Frame */}
                        <div className={`absolute inset-0 border-2 ${borderColor} opacity-0 scale-95 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 rounded-2xl pointer-events-none`}></div>

                    </motion.div>
                );
            })}
        </div>
        
        {/* FOOTER INFO */}
        <div className="mt-4 md:mt-6 flex flex-col items-center gap-1 opacity-60 shrink-0">
             <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-500 to-transparent"></div>
             <p className="font-mono text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                 SECURE_CONNECTION_V.4.0.2 // AWAITING_INPUT
             </p>
        </div>

      </motion.div>
    </div>
  );
};

export default SectorModal;
