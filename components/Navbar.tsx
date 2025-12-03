
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Zap, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectorData } from '../types';
import { SECTORS } from '../constants';

interface NavbarProps {
  currentSector: SectorData;
  onSelectSector: (sector: SectorData) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSector, onSelectSector }) => {
  const [isSectorOpen, setIsSectorOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Dropdown Animation Variants
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, filter: 'blur(5px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: 'blur(0px)',
      transition: { duration: 0.2, ease: "circOut" } 
    },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 backdrop-blur-xl h-20 border-b border-white/10 flex items-center shadow-lg">
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        
        {/* --- LEFT SECTION: LOGO & SECTOR SELECTOR --- */}
        <div className="flex items-center gap-6 md:gap-8">
            
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
                <div className="relative flex items-center justify-center w-10 h-10 bg-cyber-yellow/10 border border-cyber-yellow/50 rounded-sm overflow-hidden group-hover:bg-cyber-yellow group-hover:text-black transition-colors duration-300">
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-orbitron font-bold text-xl text-white tracking-wider">
                        AFTERLIFE
                    </span>
                    <span className="font-rajdhani font-bold text-[10px] text-cyber-cyan tracking-[0.3em] uppercase">
                        CYBER ARENA
                    </span>
                </div>
            </a>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>

            {/* SECTOR SELECTOR DROPDOWN TRIGGER */}
            <div className="relative hidden md:block">
                <button 
                    onClick={() => {
                        setIsSectorOpen(!isSectorOpen);
                        setIsMenuOpen(false);
                    }}
                    className="flex flex-col items-start group outline-none"
                >
                    <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase mb-0.5 group-hover:text-cyber-cyan transition-colors">
                        LOCATION //
                    </span>
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-rajdhani font-bold tracking-widest uppercase text-white group-hover:text-cyber-cyan transition-colors">
                            {currentSector.name.replace('СЕКТОР ', '')}
                        </span>
                        <ChevronDown 
                            size={14} 
                            className={`text-gray-500 group-hover:text-white transition-transform duration-300 ${isSectorOpen ? 'rotate-180' : ''}`} 
                        />
                    </div>
                </button>

                {/* DROPDOWN MENU: SECTORS */}
                <AnimatePresence>
                    {isSectorOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute top-full left-0 mt-4 w-64 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyber-cyan/30 shadow-[0_0_30px_rgba(0,240,255,0.1)] rounded-sm overflow-hidden z-50 clip-corner-br"
                        >
                             {/* Header */}
                             <div className="bg-cyber-cyan/10 px-4 py-2 border-b border-cyber-cyan/20">
                                 <span className="text-[10px] font-mono text-cyber-cyan uppercase tracking-widest">
                                     SELECT SECTOR
                                 </span>
                             </div>

                             {/* Options */}
                             <div className="flex flex-col p-1">
                                {Object.values(SECTORS).map((sector) => {
                                    const isActive = currentSector.id === sector.id;
                                    return (
                                        <button
                                            key={sector.id}
                                            onClick={() => {
                                                onSelectSector(sector);
                                                setIsSectorOpen(false);
                                            }}
                                            className={`
                                                relative flex items-center gap-3 px-4 py-3 text-left transition-all group
                                                ${isActive ? 'bg-white/5' : 'hover:bg-white/5'}
                                            `}
                                        >
                                            {isActive && (
                                                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyber-cyan shadow-[0_0_10px_#00F0FF]"></div>
                                            )}
                                            
                                            <div className={`p-1.5 rounded-sm ${isActive ? 'text-cyber-cyan' : 'text-gray-500 group-hover:text-white'}`}>
                                                <MapPin size={16} />
                                            </div>
                                            
                                            <div className="flex flex-col">
                                                <span className={`font-orbitron font-bold text-sm uppercase ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                                                    {sector.name.replace('СЕКТОР ', '')}
                                                </span>
                                                <span className="text-[10px] font-mono text-gray-600 truncate max-w-[140px]">
                                                    {sector.address}
                                                </span>
                                            </div>

                                            {isActive && <Check size={14} className="ml-auto text-cyber-cyan" />}
                                        </button>
                                    );
                                })}
                             </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>

        {/* --- RIGHT SECTION: ACTIONS & MENU --- */}
        <div className="flex items-center gap-4 md:gap-6">
            
            {/* Booking Button (Visible on all screens, cleaner look) */}
            <button className="relative group overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-pink opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative px-6 py-2 md:px-8 md:py-2.5 flex items-center justify-center border border-white/20">
                    <span className="font-orbitron font-bold text-white tracking-wider text-xs md:text-sm uppercase transform group-hover:scale-105 transition-transform">
                        ЗАБРОНИРОВАТЬ
                    </span>
                </div>
            </button>

            {/* NAV MENU TRIGGER */}
            <div className="relative">
                <button 
                    onClick={() => {
                        setIsMenuOpen(!isMenuOpen);
                        setIsSectorOpen(false);
                    }}
                    className={`
                        w-10 h-10 flex items-center justify-center border rounded-sm transition-all duration-300
                        ${isMenuOpen 
                            ? 'bg-cyber-pink/20 border-cyber-pink text-cyber-pink shadow-[0_0_15px_rgba(217,0,214,0.3)]' 
                            : 'bg-transparent border-white/10 text-white hover:border-white/50 hover:bg-white/5'
                        }
                    `}
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {/* DROPDOWN MENU: NAVIGATION */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute top-full right-0 mt-4 w-56 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyber-pink/30 shadow-[0_0_30px_rgba(217,0,214,0.1)] rounded-sm overflow-hidden z-50 clip-corner-br"
                        >
                            {/* Decorative Top Line */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-cyber-pink to-transparent"></div>
                            
                            <div className="flex flex-col py-2">
                                {['ЦЕНЫ', 'ИГРЫ', 'АКЦИИ', 'КОНТАКТЫ'].map((item, index) => (
                                    <a 
                                        key={item} 
                                        href={`#${item.toLowerCase()}`}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="relative group px-6 py-3 flex items-center justify-between hover:bg-white/5 transition-colors"
                                    >
                                        <span className="font-rajdhani font-bold text-lg text-white tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                            {item}
                                        </span>
                                        
                                        {/* Hover Effect arrow */}
                                        <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-cyber-pink">
                                            //
                                        </span>
                                    </a>
                                ))}
                            </div>
                            
                            {/* Mobile Sector Switcher (Only visible on small screens inside menu) */}
                            <div className="md:hidden border-t border-white/10 p-4 bg-white/5">
                                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-2">
                                    SWITCH SECTOR
                                </span>
                                {Object.values(SECTORS).map((sector) => {
                                    if(sector.id === currentSector.id) return null;
                                    return (
                                        <button
                                            key={sector.id}
                                            onClick={() => {
                                                onSelectSector(sector);
                                                setIsMenuOpen(false);
                                            }}
                                            className="text-xs text-cyber-cyan font-bold font-orbitron uppercase hover:underline"
                                        >
                                            → {sector.name}
                                        </button>
                                    )
                                })}
                            </div>

                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
