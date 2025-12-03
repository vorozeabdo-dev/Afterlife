
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Wifi, Zap } from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (view: 'PRICING' | 'GAMES') => void;
}

const HomeDashboard: React.FC<HomeDashboardProps> = ({ onNavigate }) => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[400px]">
        
        {/* CARD 1: GAMES LIBRARY (Large, Spans 2 cols) */}
        <motion.div 
          onClick={() => onNavigate('GAMES')}
          whileHover={{ scale: 0.99 }}
          whileTap={{ scale: 0.98 }}
          className="col-span-1 md:col-span-2 relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-cyber-cyan transition-colors bg-cyber-black"
        >
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105 opacity-60"></div>
          
          {/* Gradients */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-black via-transparent to-transparent opacity-90"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-transparent opacity-90"></div>

          <div className="absolute inset-0 p-8 flex flex-col justify-end">
            <div className="flex justify-between items-end">
              <div>
                <p className="font-mono text-cyber-cyan text-xs tracking-widest uppercase mb-2">
                  // ARSENAL
                </p>
                <h3 className="font-orbitron font-black text-3xl md:text-5xl text-white uppercase italic tracking-tighter group-hover:text-cyber-cyan transition-colors">
                  БИБЛИОТЕКА ИГР
                </h3>
                <p className="font-rajdhani font-bold text-gray-400 mt-2 text-lg">
                  100+ ТАЙТЛОВ // PC & CONSOLE
                </p>
              </div>
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-cyber-cyan group-hover:border-cyber-cyan group-hover:text-black transition-all">
                <ArrowUpRight size={24} />
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-6 h-full">
            
            {/* CARD 2: PRICING (Tall) */}
            <motion.div 
              onClick={() => onNavigate('PRICING')}
              whileHover={{ scale: 0.99 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 relative group cursor-pointer rounded-2xl overflow-hidden border border-white/10 hover:border-cyber-pink transition-colors bg-cyber-black"
            >
              {/* Abstract Background */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-pink/20 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>
              
              {/* Grid Lines */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(217,0,214,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(217,0,214,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30"></div>

              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-between items-start">
                   <p className="font-mono text-cyber-pink text-xs tracking-widest uppercase">
                    // CONTRACTS
                  </p>
                  <ArrowUpRight size={20} className="text-gray-500 group-hover:text-cyber-pink transition-colors"/>
                </div>
                
                <div>
                   <h3 className="font-orbitron font-black text-2xl text-white uppercase italic tracking-tighter mb-1">
                    ТАРИФЫ И БРОНЬ
                  </h3>
                  <p className="font-mono text-cyber-yellow text-sm">
                    ОТ 100₽ / ЧАС
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: SYSTEM STATUS (Small) */}
            <div className="h-32 relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a] flex flex-col p-6 justify-center">
                 <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-mono text-green-500 text-xs font-bold tracking-widest uppercase">SYSTEM ONLINE</span>
                 </div>
                 <div className="space-y-1 font-mono text-[10px] md:text-xs text-gray-500">
                    <div className="flex justify-between">
                        <span>GPU CLUSTER:</span>
                        <span className="text-white">RTX 4070 Ti</span>
                    </div>
                    <div className="flex justify-between">
                        <span>NETWORK:</span>
                        <span className="text-white">FIBER 1GBPS</span>
                    </div>
                    <div className="flex justify-between">
                        <span>LATENCY:</span>
                        <span className="text-white">1ms</span>
                    </div>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
};

export default HomeDashboard;
