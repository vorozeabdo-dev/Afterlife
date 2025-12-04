
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Gift, Cpu, Activity, Zap, Trophy, Wifi, Server } from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (view: 'PRICING' | 'GAMES' | 'PROMOS') => void;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ onNavigate }) => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      {/* GRID CONTAINER: 3 Columns on Desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* --- SLOT 1: GAMES LIBRARY (Top Left) [Span 2] --- */}
        <motion.div 
          onClick={() => onNavigate('GAMES')}
          whileHover={{ scale: 0.98 }}
          whileTap={{ scale: 0.95 }}
          className="relative md:col-span-2 h-64 md:h-80 group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-cyber-cyan transition-colors bg-cyber-black shadow-lg"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"></div>
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-cyber-black/50 to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-black/80 via-transparent to-transparent"></div>

          <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-1 h-4 bg-cyber-cyan"></div>
                    <p className="font-mono text-cyber-cyan text-xs tracking-widest uppercase">
                    // ARSENAL_DB
                    </p>
                </div>
                <h3 className="font-orbitron font-black text-3xl md:text-5xl text-white uppercase italic tracking-tighter group-hover:text-cyber-cyan transition-colors drop-shadow-lg">
                  БИБЛИОТЕКА
                </h3>
                <p className="font-rajdhani font-bold text-gray-400 mt-2 text-sm md:text-lg max-w-md">
                  100+ ТАЙТЛОВ // AUTO-UPDATE // PRE-LOADED
                </p>
              </div>
              
              {/* Arrow Button */}
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyber-cyan group-hover:border-cyber-cyan group-hover:text-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- SLOT 2: PRICING (Top Right) [Span 1] --- */}
        <motion.div 
            onClick={() => onNavigate('PRICING')}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="relative md:col-span-1 h-64 md:h-80 group cursor-pointer rounded-xl overflow-hidden border border-white/10 hover:border-cyber-pink transition-colors bg-cyber-black shadow-lg"
        >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
            
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                    <p className="font-mono text-cyber-pink text-xs tracking-widest uppercase bg-cyber-pink/10 px-2 py-1 rounded-sm">
                        // TARIFFS
                    </p>
                    <ArrowUpRight size={20} className="text-gray-500 group-hover:text-cyber-pink transition-colors"/>
                </div>
                
                <div className="text-right mt-auto">
                    <h3 className="font-orbitron font-black text-3xl md:text-4xl text-white uppercase italic tracking-tighter mb-2 group-hover:text-cyber-pink transition-colors">
                    ТАРИФЫ
                    </h3>
                    <div className="flex flex-col items-end gap-1">
                        <span className="font-orbitron font-bold text-cyber-yellow text-2xl">от 100₽</span>
                        <span className="font-rajdhani font-semibold text-gray-400 text-xs tracking-wider">/ ЧАС START PACK</span>
                    </div>
                </div>
            </div>
        </motion.div>

        {/* --- SLOT 3: LOOT & BONUSES (Bottom Left) [Span 1] --- */}
        <motion.div 
            onClick={() => onNavigate('PROMOS')}
            whileHover={{ scale: 0.98 }}
            whileTap={{ scale: 0.95 }}
            className="relative md:col-span-1 h-64 md:h-80 group cursor-pointer rounded-xl overflow-hidden border border-cyber-yellow/60 hover:border-cyber-yellow transition-all duration-300 bg-cyber-black shadow-[0_0_20px_rgba(254,239,6,0.1)] hover:shadow-[0_0_30px_rgba(254,239,6,0.2)]"
        >
             {/* Pulse Animation Overlay */}
             <div className="absolute inset-0 border-2 border-cyber-yellow/20 rounded-xl animate-pulse"></div>
             
             {/* Background Effects */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-cyber-yellow/20 via-transparent to-transparent opacity-80"></div>
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>

             <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between relative z-10">
                 <div className="flex justify-between items-start">
                     <div className="flex items-center gap-2">
                         <Trophy size={16} className="text-cyber-yellow" />
                         <p className="font-mono text-cyber-yellow text-xs tracking-widest uppercase">
                             // LOOT BOX
                         </p>
                     </div>
                     <Gift size={24} className="text-cyber-yellow animate-bounce" />
                 </div>

                 <div>
                    <div className="mb-4 p-3 bg-cyber-yellow/10 border border-cyber-yellow/30 rounded-lg w-fit group-hover:rotate-12 transition-transform duration-300">
                        <Gift size={32} className="text-cyber-yellow drop-shadow-[0_0_10px_rgba(254,239,6,0.5)]" />
                    </div>
                    <h3 className="font-orbitron font-black text-2xl md:text-3xl text-white uppercase italic tracking-tighter mb-1 drop-shadow-md">
                        АКЦИИ КЛУБА
                    </h3>
                    <p className="font-rajdhani font-bold text-gray-300 text-sm md:text-base">
                        Х2 ДЕПОЗИТ <span className="text-cyber-yellow mx-1">//</span> ЛУТ
                    </p>
                 </div>
             </div>
        </motion.div>

        {/* --- SLOT 4: SYSTEM STATUS (Bottom Right) [Span 2] --- */}
        <motion.div 
            whileHover={{ scale: 0.995 }}
            className="relative md:col-span-2 h-64 md:h-80 rounded-xl overflow-hidden border border-white/5 bg-[#030303] flex flex-col p-6 md:p-8 justify-between group"
        >
             {/* Subtle Matrix Background */}
             <div className="absolute inset-0 opacity-10 bg-[linear-gradient(0deg,transparent_24%,rgba(34,197,94,0.1)_25%,rgba(34,197,94,0.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.1)_75%,rgba(34,197,94,0.1)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(34,197,94,0.1)_25%,rgba(34,197,94,0.1)_26%,transparent_27%,transparent_74%,rgba(34,197,94,0.1)_75%,rgba(34,197,94,0.1)_76%,transparent_77%,transparent)] bg-[size:30px_30px]"></div>
             
             {/* Header */}
             <div className="flex justify-between items-start z-10 border-b border-white/5 pb-4">
                 <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/10 rounded-sm">
                        <Activity size={18} className="text-green-500" />
                    </div>
                    <div>
                        <span className="block font-orbitron text-white text-lg font-bold tracking-wider uppercase">SYSTEM STATUS</span>
                        <span className="block font-mono text-green-500 text-[10px] tracking-widest uppercase">ALL SYSTEMS OPERATIONAL</span>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 bg-black/50 px-3 py-1 rounded-full border border-white/5">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_5px_#22c55e]"></div>
                     <span className="text-[10px] font-mono text-gray-400">ONLINE</span>
                 </div>
             </div>

             {/* Tech Specs Grid - Horizontal Layout to fill span 2 */}
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 mt-auto">
                 
                 {/* Stat 1 */}
                 <div className="group/item flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-2 p-3 bg-white/5 rounded-sm border border-transparent hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Cpu size={14} />
                        <span className="text-[10px] font-mono tracking-wider">GPU CLUSTER</span>
                    </div>
                    <div className="text-xl font-orbitron font-bold text-gray-200 group-hover/item:text-green-400 transition-colors">
                        RTX 4070 Ti
                    </div>
                 </div>

                 {/* Stat 2 */}
                 <div className="group/item flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-2 p-3 bg-white/5 rounded-sm border border-transparent hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Wifi size={14} />
                        <span className="text-[10px] font-mono tracking-wider">NETWORK</span>
                    </div>
                    <div className="text-xl font-orbitron font-bold text-gray-200 group-hover/item:text-green-400 transition-colors">
                        FIBER 1GBPS
                    </div>
                 </div>

                 {/* Stat 3 */}
                  <div className="group/item flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start gap-2 p-3 bg-white/5 rounded-sm border border-transparent hover:border-green-500/30 transition-colors">
                    <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Server size={14} />
                        <span className="text-[10px] font-mono tracking-wider">PING</span>
                    </div>
                    <div className="text-xl font-orbitron font-bold text-gray-200 group-hover/item:text-green-400 transition-colors">
                        1ms STABLE
                    </div>
                 </div>
             </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HomeDashboard;
