
import React from 'react';
import { SECTOR_PRICING } from '../constants';
import { SectorData } from '../types';
import { 
  Cpu, 
  Zap, 
  Monitor, 
  Gamepad2, 
  Database, 
  Mouse, 
  Keyboard, 
  Headphones,
  Info 
} from 'lucide-react';

interface PricingSectionProps {
    currentSector: SectorData;
}

// Helper to determine icon based on spec text content
const getSpecIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes('i5') || t.includes('i7') || t.includes('i9') || t.includes('ryzen')) return <Cpu size={16} />;
    if (t.includes('rtx') || t.includes('gtx') || t.includes('radeon')) return <Zap size={16} />;
    if (t.includes('ram')) return <Database size={16} />;
    if (t.includes('"') || t.includes('hz') || t.includes('tv') || t.includes('ips')) return <Monitor size={16} />;
    if (t.includes('mouse') || t.includes('rival') || t.includes('logitech') || t.includes('g403') || t.includes('superlight') || t.includes('zowie')) return <Mouse size={16} />;
    if (t.includes('keyboard') || t.includes('kd87a') || t.includes('kd83a') || t.includes('key') || t.includes('titan')) return <Keyboard size={16} />;
    if (t.includes('headset') || t.includes('audio') || t.includes('h3') || t.includes('arctis') || t.includes('cloud') || t.includes('hyperx')) return <Headphones size={16} />;
    if (t.includes('xbox') || t.includes('ps5') || t.includes('playstation') || t.includes('gamepad')) return <Gamepad2 size={16} />;
    return <Info size={16} />;
};

const PricingSection: React.FC<PricingSectionProps> = ({ currentSector }) => {
  const data = SECTOR_PRICING[currentSector.id] || SECTOR_PRICING['lenina'];

  // Helper for Card Styling based on ID/Type
  const getCardStyle = (id: string) => {
      if (id.includes('pc') || id.includes('standard')) return {
          borderColor: 'border-cyber-cyan',
          glowColor: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
          textColor: 'text-cyber-cyan',
          footerBg: 'bg-cyber-cyan/10',
          bgGradient: 'from-cyber-cyan/10'
      };
      if (id.includes('tv')) return {
          borderColor: 'border-cyber-yellow',
          glowColor: 'shadow-[0_0_20px_rgba(254,239,6,0.15)]',
          textColor: 'text-cyber-yellow',
          footerBg: 'bg-cyber-yellow/10',
          bgGradient: 'from-cyber-yellow/10'
      };
      if (id.includes('solo')) return {
          borderColor: 'border-[#9d00ff]', // Purple
          glowColor: 'shadow-[0_0_20px_rgba(157,0,255,0.15)]',
          textColor: 'text-[#9d00ff]',
          footerBg: 'bg-[#9d00ff]/10',
          bgGradient: 'from-[#9d00ff]/10'
      };
      // Default (VIP, Bootcamp)
      return {
          borderColor: 'border-cyber-pink',
          glowColor: 'shadow-[0_0_20px_rgba(217,0,214,0.15)]',
          textColor: 'text-cyber-pink',
          footerBg: 'bg-cyber-pink/10',
          bgGradient: 'from-cyber-pink/10'
      };
  };

  return (
    <section id="цены" className="py-20 relative bg-cyber-black overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-cyber-pink/20 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-cyber-cyan/20 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
            <h2 className="font-orbitron font-black text-5xl md:text-7xl text-white mb-4 text-center tracking-tighter drop-shadow-lg">
                ВЫБЕРИ СВОЙ <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-cyan">УРОВЕНЬ</span>
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400 font-mono text-xs md:text-sm tracking-widest border border-white/10 px-4 py-2 rounded-full bg-black/50 backdrop-blur">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyber-cyan"></div> ПАКЕТ УТРО: 08:00 - 13:00</span>
                <div className="hidden sm:block w-px h-4 bg-white/20"></div>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-cyber-pink"></div> ПАКЕТ НОЧЬ: 22:00 - 08:00</span>
            </div>
        </div>

        {/* Pricing Grid - Adjusted for up to 5 items */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6`}>
            {data.map((row) => {
                const style = getCardStyle(row.id);
                
                return (
                    <div 
                        key={row.id} 
                        className={`
                            relative flex flex-col bg-cyber-black/80 backdrop-blur-xl 
                            border-2 ${style.borderColor} rounded-xl overflow-hidden 
                            hover:transform hover:-translate-y-2 transition-all duration-300
                            ${style.glowColor} group
                        `}
                    >
                        {/* 1. Texture Overlay (Grid Pattern) */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none z-0"></div>
                        
                        {/* Card Gradient Header */}
                        <div className={`absolute top-0 left-0 w-full h-32 bg-gradient-to-b ${style.bgGradient} to-transparent opacity-60 z-0`}></div>

                        <div className="p-5 flex flex-col h-full relative z-10">
                            
                            {/* 2. Card Header */}
                            <div className="mb-5 pb-3 border-b border-white/10">
                                <h3 className={`font-orbitron font-black text-2xl uppercase tracking-tighter ${style.textColor} glitch-text whitespace-nowrap overflow-hidden text-ellipsis`} data-text={row.title}>
                                    {row.title}
                                </h3>
                                <div className="mt-1 w-8 h-1 bg-white/20 rounded-full"></div>
                            </div>

                            {/* 3. Specs Section with Icons */}
                            <div className="space-y-2.5 mb-8 min-h-[160px]">
                                {row.specs.map((spec, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs text-gray-300 font-rajdhani font-semibold group/spec">
                                        <div className={`${style.textColor} opacity-60 group-hover/spec:opacity-100 transition-opacity min-w-[16px]`}>
                                            {getSpecIcon(spec)}
                                        </div>
                                        <span className="leading-tight uppercase tracking-wide opacity-90">{spec}</span>
                                    </div>
                                ))}
                            </div>

                            {/* 4. Pricing List */}
                            <div className="mt-auto space-y-3">
                                {/* Morning Hour */}
                                {row.prices.hourMorning && (
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2 border-dashed">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">1 ЧАС (УТРО)</span>
                                        <span className="font-orbitron font-black text-lg text-white">{row.prices.hourMorning} ₽</span>
                                    </div>
                                )}
                                
                                {/* Standard Hour */}
                                <div className="flex justify-between items-baseline border-b border-white/5 pb-2 border-dashed">
                                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">1 ЧАС</span>
                                    <span className={`font-orbitron font-black text-2xl italic ${style.textColor}`}>{row.prices.hourStandard} ₽</span>
                                </div>

                                {/* Morning Pack */}
                                {row.prices.packMorning && (
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2 border-dashed">
                                        <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">ПАКЕТ 5Ч (УТРО)</span>
                                        <span className="font-orbitron font-black text-lg text-white">{row.prices.packMorning} ₽</span>
                                    </div>
                                )}

                                {/* Standard Pack */}
                                {row.prices.packStandard ? (
                                    <div className="flex justify-between items-baseline border-b border-white/5 pb-2 border-dashed">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ПАКЕТ 5 ЧАСОВ</span>
                                        <span className="font-orbitron font-black text-xl text-white">{row.prices.packStandard} ₽</span>
                                    </div>
                                ) : row.prices.pack3h ? (
                                     <div className="flex justify-between items-baseline border-b border-white/5 pb-2 border-dashed">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">ПАКЕТ 3 ЧАСА</span>
                                        <span className="font-orbitron font-black text-xl text-white">{row.prices.pack3h} ₽</span>
                                    </div>
                                ) : null}

                                {/* Night Pack */}
                                <div className="flex justify-between items-baseline pt-1">
                                    <span className="text-[10px] font-bold text-cyber-pink uppercase tracking-widest glow-text">ПАКЕТ НОЧЬ</span>
                                    <span className="font-orbitron font-black text-xl text-white">{row.prices.packNight} ₽</span>
                                </div>
                            </div>

                            {/* 5. Special Offers Footer */}
                            {row.special && (
                                <div className={`mt-6 -mx-5 -mb-5 p-4 border-t border-dashed ${style.borderColor} ${style.footerBg} text-center relative overflow-hidden group/offer`}>
                                    <p className={`text-[9px] font-black uppercase tracking-[0.2em] mb-1 ${style.textColor} leading-tight`}>
                                        {row.special.label}
                                    </p>
                                    <p className="text-white font-orbitron font-bold text-sm leading-tight">
                                        {row.special.value}
                                    </p>
                                    {/* Animated Shine */}
                                    <div className="absolute top-0 -left-full w-1/2 h-full bg-white/10 skew-x-[25deg] group-hover/offer:animate-[shimmer_1s_infinite]"></div>
                                </div>
                            )}

                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
