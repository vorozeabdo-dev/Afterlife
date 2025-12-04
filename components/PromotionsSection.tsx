
import React from 'react';
import { ArrowLeft, Users, Wallet, Gift, Zap } from 'lucide-react';

interface PromotionsSectionProps {
    onBack: () => void;
}

const PromotionsSection: React.FC<PromotionsSectionProps> = ({ onBack }) => {

  const secondaryPromos = [
    {
      id: 'deposit',
      title: 'БОНУС К ДЕПОЗИТУ',
      headline: '+100₽ / +200₽',
      condition: 'Действует неограниченное количество раз.',
      icon: <Wallet className="w-8 h-8 md:w-10 md:h-10 text-cyber-yellow" />,
      watermarkIcon: <Wallet className="w-full h-full text-cyber-yellow" />,
      color: 'text-cyber-yellow',
      borderColor: 'border-cyber-yellow',
      glow: 'shadow-[0_0_20px_rgba(254,239,6,0.15)]',
      bgGradient: 'from-yellow-900/20 to-black'
    },
    {
      id: 'friend',
      title: 'ПРИВЕДИ ДРУГА',
      headline: 'ЧАС ТЕБЕ И ДРУГУ',
      condition: 'Для получения бонуса нужно оплатить минимум час игрового времени.',
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-cyber-cyan" />,
      watermarkIcon: <Users className="w-full h-full text-cyber-cyan" />,
      color: 'text-cyber-cyan',
      borderColor: 'border-cyber-cyan',
      glow: 'shadow-[0_0_20px_rgba(0,240,255,0.15)]',
      bgGradient: 'from-cyan-900/20 to-black'
    },
    {
      id: 'birthday',
      title: 'ДЕНЬ РОЖДЕНИЯ',
      headline: 'Х2 ДЕПОЗИТ ВСЕМ',
      condition: 'При посещении арены в день рождения (3 дня до и 3 дня после) удваиваем депозит имениннику и 2ум его друзьям! Действует один раз в год для одного пополнения.',
      icon: <Gift className="w-8 h-8 md:w-10 md:h-10 text-cyber-pink" />,
      watermarkIcon: <Gift className="w-full h-full text-cyber-pink" />,
      color: 'text-cyber-pink',
      borderColor: 'border-cyber-pink',
      glow: 'shadow-[0_0_20px_rgba(217,0,214,0.15)]',
      bgGradient: 'from-fuchsia-900/20 to-black'
    }
  ];

  return (
    <div className="bg-cyber-black min-h-screen pt-24 pb-20 relative overflow-hidden">
       {/* 1. GLOBAL BACKGROUND UPGRADE */}
       {/* Noise */}
       <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
       {/* Dot Matrix Grid */}
       <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Navigation */}
        <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
        >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
            <span className="font-mono text-xs uppercase tracking-widest">BACK TO HOME</span>
        </button>

        {/* --- 2. HERO BANNER UPGRADE --- */}
        <div className="relative w-full mb-16 overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.8)] border-y border-white/10 bg-black">
            
            {/* LAYER 1: Background Image with Slow Zoom Effect */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://images.unsplash.com/photo-1605218427306-0338d084048e?q=80&w=2000&auto=format&fit=crop" 
                    alt="Cyberpunk City" 
                    className="w-full h-full object-cover opacity-60 transition-transform duration-[20s] ease-linear transform scale-100 group-hover:scale-110"
                />
            </div>

            {/* LAYER 2: Readability Overlay (Dark Gradient) */}
            {/* Focusing darkness on the center/left for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>

            {/* Scanline Overlay */}
            <div className="absolute inset-0 pointer-events-none z-10 opacity-10 bg-[linear-gradient(transparent_50%,rgba(0,0,0,1)_50%)] bg-[length:100%_4px]"></div>
            
            {/* Moving Gradient Borders */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-cyan via-white to-cyber-pink shadow-[0_0_20px_rgba(0,240,255,0.8)] animate-pulse z-20"></div>
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-pink via-white to-cyber-cyan shadow-[0_0_20px_rgba(217,0,214,0.8)] animate-pulse z-20"></div>
            
            {/* LAYER 3: Content (Text) */}
            <div className="relative z-20 py-12 md:py-16 px-6 flex flex-col items-center justify-center text-center">
                
                {/* Title */}
                <div className="flex items-center gap-3 mb-4">
                    <Zap className="text-cyber-cyan w-6 h-6 animate-pulse" />
                    <h2 className="font-orbitron font-bold text-cyber-cyan text-xl md:text-2xl tracking-[0.2em] uppercase drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]">
                        АКЦИЯ: ПЕРВЫЙ РАЗ
                    </h2>
                    <Zap className="text-cyber-cyan w-6 h-6 animate-pulse" />
                </div>

                {/* Main Headline with intensified glow */}
                <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl text-white italic tracking-tighter mb-4 glitch-text drop-shadow-[0_0_25px_rgba(255,255,255,0.3)]" data-text="1 ЧАС ИГРЫ БЕСПЛАТНО">
                    1 ЧАС ИГРЫ <br className="md:hidden" /> БЕСПЛАТНО
                </h1>

                {/* Subtitle */}
                <p className="font-orbitron font-bold text-cyber-pink text-xl md:text-3xl tracking-widest uppercase mb-8 drop-shadow-[0_0_10px_rgba(217,0,214,0.8)]">
                    ПРИ ПЕРВОМ ПОСЕЩЕНИИ
                </p>

                {/* Fine Print */}
                <p className="font-rajdhani text-gray-400 text-sm md:text-base max-w-2xl mx-auto border-t border-white/10 pt-4">
                    * Для получения бонуса нужно оплатить минимум час игрового времени.
                </p>

            </div>
        </div>


        {/* --- 3. CARDS UPGRADE (3 Small Cards) --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {secondaryPromos.map((promo) => (
                <div 
                    key={promo.id}
                    className={`
                        relative p-8 rounded-xl overflow-hidden group transition-all duration-300 transform hover:scale-[1.02]
                        border border-white/10 hover:border-opacity-100
                        hover:${promo.borderColor} ${promo.glow} bg-cyber-black
                    `}
                >
                    {/* Gradient Background (Color Coded) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${promo.bgGradient} opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
                    
                    {/* Watermark Icon (Huge, Rotated, Faint) */}
                    <div className="absolute -bottom-8 -right-8 w-40 h-40 opacity-[0.05] rotate-[-12deg] group-hover:opacity-[0.1] transition-opacity duration-500 pointer-events-none">
                        {promo.watermarkIcon}
                    </div>

                    <div className="relative z-10 flex flex-col h-full items-center text-center">
                        
                        {/* Icon */}
                        <div className="mb-6 p-4 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm shadow-lg">
                            {promo.icon}
                        </div>

                        {/* Title */}
                        <h3 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider mb-2 drop-shadow-md">
                            {promo.title}
                        </h3>

                        {/* Headline */}
                        <div className={`font-orbitron font-black text-2xl md:text-3xl ${promo.color} mb-4 italic drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]`}>
                            {promo.headline}
                        </div>

                        {/* Divider */}
                        <div className="w-12 h-1 bg-white/10 mb-4 rounded-full group-hover:bg-white/30 transition-colors"></div>

                        {/* Condition Text */}
                        <p className="font-rajdhani text-gray-400 text-sm leading-relaxed">
                            {promo.condition}
                        </p>

                    </div>
                </div>
            ))}
        </div>

      </div>
    </div>
  );
};

export default PromotionsSection;
