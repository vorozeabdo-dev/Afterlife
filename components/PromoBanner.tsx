import React from 'react';

const PromoBanner: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 relative z-30 -mt-8 md:-mt-16 mb-12">
      <div className="relative border-2 border-cyber-cyan/50 bg-cyber-black/90 backdrop-blur-xl overflow-hidden shadow-[0_0_30px_rgba(0,240,255,0.15)] clip-corner-br">
             
        {/* Background Glitch Effects */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30">
             <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-cyber-cyan/20 blur-[100px]"></div>
             <div className="absolute bottom-[-50%] right-[-10%] w-[500px] h-[500px] bg-cyber-pink/20 blur-[100px]"></div>
        </div>

        {/* Content Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-0">
            
            {/* Left: Image / Visual */}
            <div className="relative h-64 md:h-auto overflow-hidden min-h-[300px] group">
                <div className="absolute inset-0 bg-cyber-cyan/10 z-10 mix-blend-overlay"></div>
                <img 
                    src="https://sun9-87.userapi.com/s/v1/ig2/YCLmKpkAmv2qFQoVe80hvvZSpvVAD99z0V3YqebVaz5SCB3lcPpTc-Hna-v6SYc0BwT8gg7yNFTqrlHgzp2R8xSa.jpg?quality=95&as=32x32,48x48,72x72,108x108,160x160,240x240,360x360,480x480,540x540,640x640,720x720,1080x1080,1280x1280,1440x1440,1500x1500&from=bu&cs=1080x0" 
                    alt="Cyberpunk Promo" 
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 grayscale-[0.3] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-cyber-black/90 z-20"></div>
                
                {/* Decorative UI Overlay */}
                <div className="absolute bottom-4 left-4 z-30">
                    <div className="bg-black/70 border border-cyber-pink p-2 backdrop-blur-md">
                        <span className="text-cyber-pink font-mono text-[10px] tracking-widest block">TARGET: NEW_USER</span>
                        <span className="text-white font-mono text-[10px] tracking-widest block">STATUS: UNLOCKED</span>
                    </div>
                </div>
            </div>

            {/* Right: Text Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center relative z-30">
                
                {/* Title */}
                <div className="mb-4">
                    <h2 className="glitch-text font-orbitron font-black text-3xl md:text-5xl text-cyber-cyan italic tracking-tighter drop-shadow-[0_0_10px_rgba(0,240,255,0.5)]" data-text="АКЦИЯ: ПЕРВЫЙ РАЗ">
                        АКЦИЯ: ПЕРВЫЙ РАЗ
                    </h2>
                    <div className="h-1 w-24 bg-gradient-to-r from-cyber-cyan to-transparent mt-2"></div>
                </div>

                {/* Main Offer */}
                <div className="mb-2">
                    <p className="font-rajdhani font-bold text-4xl md:text-6xl text-white uppercase leading-[0.9]">
                        1 ЧАС ИГРЫ <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">БЕСПЛАТНО</span>
                    </p>
                </div>

                {/* Subtitle */}
                <p className="font-orbitron font-bold text-cyber-pink text-lg md:text-xl tracking-widest uppercase mb-6 glow-text" style={{ textShadow: "0 0 10px rgba(217,0,214,0.5)" }}>
                    ПРИ ПЕРВОМ ПОСЕЩЕНИИ
                </p>

                {/* Disclaimer */}
                <div className="mt-auto border-t border-white/10 pt-4">
                    <p className="font-rajdhani text-gray-400 text-xs md:text-sm flex items-start gap-2">
                        <span className="text-cyber-pink text-lg leading-none">*</span>
                        Для получения бонуса необходимо купить минимум 1 час игрового времени.
                    </p>
                </div>

                {/* Decorative Cyber Lines */}
                <div className="absolute top-4 right-4 flex flex-col gap-1 opacity-50">
                    <div className="w-16 h-[1px] bg-cyber-pink"></div>
                    <div className="w-8 h-[1px] bg-cyber-pink ml-auto"></div>
                </div>

            </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;