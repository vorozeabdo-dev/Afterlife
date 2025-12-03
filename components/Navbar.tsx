
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Zap, MapPin, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectorData } from '../types';
import { SECTORS } from '../constants';

interface NavbarProps {
  currentSector: SectorData;
  onSelectSector: (sector: SectorData) => void;
  currentView: 'HOME' | 'PRICING' | 'GAMES';
  onNavigate: (view: 'HOME' | 'PRICING' | 'GAMES') => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSector, onSelectSector, currentView, onNavigate }) => {
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

  const handleNav = (view: 'HOME' | 'PRICING' | 'GAMES') => {
      onNavigate(view);
      setIsMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-cyber-black/90 backdrop-blur-xl h-16 md:h-20 border-b border-white/10 flex items-center shadow-lg transition-all">
      
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan/50 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative">
        
        {/* --- LEFT SECTION: LOGO & SECTOR SELECTOR --- */}
        <div className="flex items-center gap-4 md:gap-8">
            
            {/* Logo */}
            <button onClick={() => onNavigate('HOME')} className="flex items-center gap-2 md:gap-3 group outline-none">
                <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-cyber-yellow/10 border border-cyber-yellow/50 rounded-sm overflow-hidden group-hover:bg-cyber-yellow group-hover:text-black transition-colors duration-300">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex flex-col leading-none text-left">
                    <span className="font-orbitron font-bold text-lg md:text-xl text-white tracking-wider">
                        AFTERLIFE
                    </span>
                    <span className="font-rajdhani font-bold text-[8px] md:text-[10px] text-cyber-cyan tracking-[0.2em] md:tracking-[0.3em] uppercase">
                        CYBER ARENA
                    </span>
                </div>
            </button>

            {/* Divider */}
            <div className="h-8 w-px bg-white/10 hidden md:block"></div>

            {/* SECTOR SELECTOR DROPDOWN TRIGGER (Desktop Only) */}
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
        <div className="flex items-center gap-3 md:gap-6">
            
            {/* Booking Button (Compact on mobile) */}
            <button className="relative group overflow-hidden rounded-sm">
                <div className="absolute inset-0 bg-gradient-pink opacity-80 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative px-3 py-2 md:px-8 md:py-2.5 flex items-center justify-center border border-white/20">
                    <span className="font-orbitron font-bold text-white tracking-wider text-[10px] md:text-sm uppercase transform group-hover:scale-105 transition-transform whitespace-nowrap">
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
                        w-9 h-9 md:w-10 md:h-10 flex items-center justify-center border rounded-sm transition-all duration-300
                        ${isMenuOpen 
                            ? 'bg-cyber-pink/20 border-cyber-pink text-cyber-pink shadow-[0_0_15px_rgba(217,0,214,0.3)]' 
                            : 'bg-transparent border-white/10 text-white hover:border-white/50 hover:bg-white/5'
                        }
                    `}
                >
                    {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
                </button>

                {/* DROPDOWN MENU: NAVIGATION */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            variants={dropdownVariants}
                            className="absolute top-full right-0 mt-4 w-64 md:w-56 bg-[#0a0a0a]/95 backdrop-blur-xl border border-cyber-pink/30 shadow-[0_0_30px_rgba(217,0,214,0.1)] rounded-sm overflow-hidden z-50 clip-corner-br"
                        >
                            {/* Decorative Top Line */}
                            <div className="h-[2px] w-full bg-gradient-to-r from-cyber-pink to-transparent"></div>
                            
                            <div className="flex flex-col py-2">
                                <button 
                                    onClick={() => handleNav('HOME')}
                                    className={`relative group px-6 py-3 flex items-center justify-between hover:bg-white/5 transition-colors ${currentView === 'HOME' ? 'text-cyber-pink' : 'text-white'}`}
                                >
                                    <span className="font-rajdhani font-bold text-lg tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                        ГЛАВНАЯ
                                    </span>
                                    {currentView === 'HOME' && <span className="text-cyber-pink text-xs font-mono">///</span>}
                                </button>
                                <button 
                                    onClick={() => handleNav('PRICING')}
                                    className={`relative group px-6 py-3 flex items-center justify-between hover:bg-white/5 transition-colors ${currentView === 'PRICING' ? 'text-cyber-pink' : 'text-white'}`}
                                >
                                    <span className="font-rajdhani font-bold text-lg tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                        ЦЕНЫ
                                    </span>
                                    {currentView === 'PRICING' && <span className="text-cyber-pink text-xs font-mono">///</span>}
                                </button>
                                <button 
                                    onClick={() => handleNav('GAMES')}
                                    className={`relative group px-6 py-3 flex items-center justify-between hover:bg-white/5 transition-colors ${currentView === 'GAMES' ? 'text-cyber-pink' : 'text-white'}`}
                                >
                                    <span className="font-rajdhani font-bold text-lg tracking-widest group-hover:translate-x-2 transition-transform duration-300">
                                        ИГРЫ
                                    </span>
                                    {currentView === 'GAMES' && <span className="text-cyber-pink text-xs font-mono">///</span>}
                                </button>
                            </div>
                            
                            {/* Mobile Sector Switcher */}
                            <div className="md:hidden border-t border-white/10 p-4 bg-white/5">
                                <span className="text-[10px] text-gray-500 font-mono tracking-widest uppercase block mb-3">
                                    SWITCH LOCATION
                                </span>
                                <div className="space-y-2">
                                    {Object.values(SECTORS).map((sector) => {
                                        const isActive = sector.id === currentSector.id;
                                        return (
                                            <button
                                                key={sector.id}
                                                onClick={() => {
                                                    onSelectSector(sector);
                                                    setIsMenuOpen(false);
                                                }}
                                                className={`flex items-center gap-2 w-full text-left p-2 rounded-sm transition-colors ${isActive ? 'bg-cyber-cyan/10 text-cyber-cyan border border-cyber-cyan/20' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                            >
                                                <MapPin size={12} />
                                                <span className="text-xs font-orbitron font-bold uppercase">
                                                    {sector.name.replace('СЕКТОР ', '')}
                                                </span>
                                            </button>
                                        )
                                    })}
                                </div>
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
