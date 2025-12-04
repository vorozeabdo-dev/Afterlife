
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectorData } from '../types';
import { Phone, X, Radio, Activity, CheckCircle2, Zap } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSector: SectorData;
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, currentSector }) => {
  if (!isOpen) return null;

  const cleanPhone = currentSector.phone.replace(/[^0-9+]/g, '');
  const isLenina = currentSector.id === 'lenina';

  // Dynamic Zones Logic based on Sector
  const availableZones = isLenina 
    ? ['PC (Standard)', 'VIP', 'BOOTCAMP', 'XBOX (TV)']
    : ['STANDARD', 'VIP', 'BOOTCAMP', 'SOLO ROOM', 'XBOX (TV)'];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
        
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg bg-[#0a0a0a] border border-cyber-yellow/50 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(254,239,6,0.15)]"
        >
            {/* Header: Secure Connection */}
            <div className="bg-cyber-yellow/10 border-b border-cyber-yellow/30 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative">
                        <Radio className="text-cyber-yellow animate-pulse" size={20} />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-yellow rounded-full animate-ping"></span>
                    </div>
                    <span className="font-mono text-cyber-yellow text-xs md:text-sm tracking-[0.2em] uppercase font-bold">
                        INCOMING TRANSMISSION // SECURE
                    </span>
                </div>
                <button 
                    onClick={onClose}
                    className="text-cyber-yellow/50 hover:text-cyber-yellow transition-colors outline-none"
                >
                    <X size={24} />
                </button>
            </div>

            {/* Content Body */}
            <div className="p-6 md:p-8 relative">
                {/* Background Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(254,239,6,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(254,239,6,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    
                    <h2 className="font-orbitron font-bold text-2xl text-white uppercase tracking-wider mb-1">
                        БРОНИРОВАНИЕ МЕСТА
                    </h2>
                    <p className="font-rajdhani text-gray-400 uppercase tracking-widest text-sm mb-8">
                        СВЯЗЬ С АДМИНИСТРАТОРОМ
                    </p>

                    {/* Phone Number Display */}
                    <div className="w-full bg-cyber-yellow/5 border border-cyber-yellow/30 rounded-xl p-6 mb-8 relative group hover:bg-cyber-yellow/10 transition-colors overflow-hidden">
                        {/* Scanlines */}
                        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[size:100%_4px] pointer-events-none"></div>
                        
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-yellow to-transparent opacity-50"></div>
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyber-yellow to-transparent opacity-50"></div>
                        
                        <p className="font-mono text-xs text-cyber-yellow/80 uppercase tracking-widest mb-2">DIRECT LINE LINKED</p>
                        
                        <a 
                            href={`tel:${cleanPhone}`} 
                            className="relative z-10 font-orbitron font-black text-2xl md:text-4xl text-white group-hover:text-cyber-yellow transition-colors drop-shadow-[0_0_10px_rgba(254,239,6,0.5)] flex items-center justify-center gap-3 whitespace-nowrap"
                        >
                            <Phone size={24} className="md:w-8 md:h-8 animate-pulse text-cyber-yellow" />
                            {currentSector.phone}
                        </a>
                        
                        <div className="mt-4 flex items-center justify-center gap-2 text-cyber-yellow/60">
                             <Activity size={16} />
                             <span className="text-[10px] font-mono tracking-widest">SIGNAL STRENGTH: 100%</span>
                        </div>
                    </div>

                    {/* Instructions Script */}
                    <div className="w-full text-left bg-white/5 rounded-lg p-5 border border-white/10">
                        <div className="flex items-center gap-2 mb-4">
                            <Zap size={16} className="text-cyber-yellow" />
                            <p className="font-rajdhani font-bold text-white text-lg">При звонке сообщите:</p>
                        </div>
                        
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3 text-gray-300 font-rajdhani">
                                <CheckCircle2 className="w-5 h-5 text-cyber-yellow shrink-0 mt-0.5" />
                                <span>Желаемую дату и время посещения.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 font-rajdhani">
                                <CheckCircle2 className="w-5 h-5 text-cyber-yellow shrink-0 mt-0.5" />
                                <span>Количество гостей.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300 font-rajdhani">
                                <CheckCircle2 className="w-5 h-5 text-cyber-yellow shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span>Выбранную зону:</span>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {availableZones.map((zone) => (
                                            <span key={zone} className="text-[10px] font-mono uppercase bg-white/10 px-2 py-1 rounded text-cyber-yellow border border-white/10">
                                                {zone}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <p className="mt-6 text-xs text-gray-500 font-mono tracking-widest">
                        // OPERATOR IS WAITING FOR YOUR INPUT
                    </p>

                </div>
            </div>

            {/* Footer Bar */}
            <div className="h-1 w-full bg-gradient-to-r from-cyber-yellow/0 via-cyber-yellow to-cyber-yellow/0"></div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BookingModal;
