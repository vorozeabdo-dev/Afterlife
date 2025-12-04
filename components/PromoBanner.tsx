
import React from 'react';
import { Zap } from 'lucide-react';

const PromoBanner: React.FC = () => {
  // Reusable content block for the marquee
  const MarqueeContent = () => (
    <div className="flex items-center gap-12 md:gap-24 px-4 whitespace-nowrap">
        {/* Item 1: ACTION */}
        <div className="flex items-center gap-3">
            <Zap className="text-cyan-400 fill-cyan-400 w-5 h-5 md:w-6 md:h-6 animate-pulse drop-shadow-[0_0_5px_#22d3ee]" />
            <span className="font-orbitron text-cyan-400 text-lg md:text-2xl font-bold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">
                АКЦИЯ: ПЕРВЫЙ РАЗ
            </span>
        </div>

        <span className="text-gray-800 font-orbitron text-lg md:text-2xl font-bold select-none">///</span>

        {/* Item 2: MAIN OFFER */}
        <span className="font-orbitron text-white text-lg md:text-2xl font-bold tracking-wider drop-shadow-md">
            1 ЧАС ИГРЫ БЕСПЛАТНО
        </span>

        <span className="text-gray-800 font-orbitron text-lg md:text-2xl font-bold select-none">///</span>

        {/* Item 3: SUBTITLE */}
        <span className="font-orbitron text-pink-500 text-lg md:text-2xl font-bold tracking-wider uppercase drop-shadow-[0_0_5px_rgba(236,72,153,0.6)]">
            ПРИ ПЕРВОМ ПОСЕЩЕНИИ
        </span>

        <span className="text-gray-800 font-orbitron text-lg md:text-2xl font-bold select-none">///</span>

        {/* Item 4: INFO */}
        <span className="font-orbitron text-gray-500 text-lg md:text-2xl font-bold tracking-wider uppercase">
            ПОДРОБНЕЕ В РАЗДЕЛЕ АКЦИЙ
        </span>
    </div>
  );

  return (
    <section className="w-full relative z-30 mb-8 bg-[#050505] overflow-hidden group border-y border-transparent shadow-lg">
      
      {/* 1. CONTINUOUS GRADIENT BORDERS (Top & Bottom) - THIN */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20"></div>

      {/* 2. BACKGROUND & TEXTURE */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>

      {/* 3. SCROLLING MARQUEE CONTAINER - SLIM PADDING */}
      <div className="relative flex w-full overflow-hidden py-4 md:py-6">
          <div className="flex animate-marquee group-hover:[animation-play-state:paused] w-fit items-center">
              {/* Render content twice for seamless loop */}
              <MarqueeContent />
              <MarqueeContent />
          </div>
      </div>

    </section>
  );
};

export default PromoBanner;
