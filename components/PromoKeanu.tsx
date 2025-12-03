import React from 'react';
import { motion } from 'framer-motion';

const PromoKeanu: React.FC = () => {
  return (
    <section className="relative w-full bg-cyber-black py-20 overflow-hidden">
      
      {/* Container */}
      <div className="container mx-auto px-4 relative">
        
        {/* Border Frame */}
        <div className="relative border-4 border-cyber-pink/50 p-2 md:p-4 bg-cyber-black/50 backdrop-blur-sm rounded-lg overflow-hidden">
             
            {/* Background Glitch Effects */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
                 <div className="absolute top-10 left-10 w-64 h-64 bg-cyber-pink blur-[100px] animate-pulse"></div>
                 <div className="absolute bottom-10 right-10 w-64 h-64 bg-cyber-cyan blur-[100px] animate-pulse"></div>
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-black/80 border border-cyber-pink/30 p-8 md:p-12 shadow-[0_0_30px_rgba(217,0,214,0.15)]">
                
                {/* Left: Content */}
                <div className="flex flex-col z-10">
                    <div className="inline-block bg-cyber-cyan/10 border border-cyber-cyan px-3 py-1 mb-4 w-fit">
                        <span className="text-cyber-cyan font-bold font-mono tracking-widest text-sm uppercase">Акция // Special Offer</span>
                    </div>

                    <h2 className="font-orbitron font-black text-5xl md:text-7xl text-white italic tracking-tighter mb-4 glitch-text" style={{ textShadow: "4px 4px 0px #D900D6" }}>
                        ПЕРВЫЙ <br/> 
                        <span className="text-cyber-cyan" style={{ textShadow: "4px 4px 0px rgba(0,0,0,0.5)" }}>РАЗ</span>
                    </h2>

                    <div className="my-6 pl-6 border-l-4 border-cyber-yellow">
                        <p className="font-rajdhani font-bold text-2xl md:text-4xl text-white uppercase leading-tight">
                            1 ЧАС ИГРЫ <br/>
                            <span className="text-cyber-yellow text-5xl md:text-6xl">БЕСПЛАТНО</span>
                        </p>
                    </div>

                    <p className="font-orbitron text-gray-400 tracking-widest text-lg uppercase mb-8">
                        ПРИ ПЕРВОМ ПОСЕЩЕНИИ ЛЮБОГО КЛУБА
                    </p>

                    <button className="w-fit bg-cyber-pink hover:bg-white hover:text-black text-white font-bold font-orbitron py-4 px-10 uppercase tracking-widest transition-all duration-300 clip-corner-br shadow-[0_0_20px_rgba(217,0,214,0.4)]">
                        ПОЛУЧИТЬ БОНУС
                    </button>
                </div>

                {/* Right: Keanu Visual */}
                <div className="relative h-full min-h-[400px] flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                    {/* Keanu Image Replicant */}
                    <img 
                        src="https://images4.alphacoders.com/936/936378.jpg" 
                        alt="Cyberpunk Character" 
                        className="relative z-0 w-full h-full object-cover object-top opacity-90 mix-blend-lighten mask-image-gradient"
                        style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                    />
                    
                    {/* Floating UI Elements */}
                    <div className="absolute top-10 right-10 z-20 hidden md:block">
                        <div className="bg-black/80 border border-cyber-cyan p-4 backdrop-blur-md">
                            <p className="text-cyber-cyan font-mono text-xs">ID: JOHNNY_S</p>
                            <p className="text-white font-mono text-xs">STATUS: LEGEND</p>
                            <div className="w-full h-1 bg-cyber-pink mt-2"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative Lines */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white"></div>
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white"></div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PromoKeanu;
