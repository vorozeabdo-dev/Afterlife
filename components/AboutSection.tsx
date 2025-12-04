
import React from 'react';
import { ArrowLeft, Cpu, Clock, Users, Gamepad2, Sparkles, CheckCircle2 } from 'lucide-react';

interface AboutSectionProps {
    onBack: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ onBack }) => {

  const features = [
    {
        id: 1,
        title: "PRO ОБОРУДОВАНИЕ",
        desc: "RTX 40 Series / 360Hz Monitors",
        icon: <Cpu className="w-6 h-6 text-cyber-cyan" />,
        color: "border-cyber-cyan",
        bg: "bg-cyber-cyan/10"
    },
    {
        id: 2,
        title: "КОМФОРТ 24/7",
        desc: "Lounge Zone / Bar / Ventilation",
        icon: <Clock className="w-6 h-6 text-cyber-yellow" />,
        color: "border-cyber-yellow",
        bg: "bg-cyber-yellow/10"
    },
    {
        id: 3,
        title: "BOOTCAMPS",
        desc: "Private Rooms for Teams",
        icon: <Users className="w-6 h-6 text-cyber-pink" />,
        color: "border-cyber-pink",
        bg: "bg-cyber-pink/10"
    },
    {
        id: 4,
        title: "ATMOSPHERE",
        desc: "Neon Aesthetics / PS5 Zone",
        icon: <Gamepad2 className="w-6 h-6 text-purple-500" />,
        color: "border-purple-500",
        bg: "bg-purple-500/10"
    }
  ];

  return (
    <section className="min-h-screen bg-cyber-black pt-24 pb-20 relative overflow-hidden">
        
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyber-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyber-pink/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
            
            {/* Navigation */}
            <button 
                onClick={onBack}
                className="mb-12 flex items-center gap-2 text-gray-500 hover:text-white transition-colors group w-fit"
            >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
                <span className="font-mono text-xs uppercase tracking-widest">BACK TO HOME</span>
            </button>

            {/* Header */}
            <div className="flex flex-col gap-2 mb-16">
                <div className="flex items-center gap-3">
                    <Sparkles className="w-5 h-5 text-cyber-cyan animate-pulse" />
                    <span className="font-mono text-cyber-cyan text-sm tracking-[0.3em] uppercase">SYSTEM_INFO // VER 4.0</span>
                </div>
                <h2 className="font-orbitron font-black text-4xl md:text-6xl text-white uppercase italic tracking-tighter drop-shadow-lg">
                    ИНФОРМАЦИЯ О <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-pink to-cyber-cyan">СИСТЕМЕ</span>
                </h2>
            </div>

            {/* Content Split */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                
                {/* Left Column: Text */}
                <div className="flex flex-col gap-8">
                    <div className="p-8 border-l-4 border-cyber-pink bg-white/5 backdrop-blur-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyber-pink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <h3 className="font-rajdhani font-bold text-3xl md:text-4xl text-white uppercase leading-tight mb-4 relative z-10">
                            AFTERLIFE — ЭТО БОЛЬШЕ, <br/> ЧЕМ ПРОСТО КЛУБ.
                        </h3>
                        <p className="font-rajdhani text-gray-300 text-lg leading-relaxed relative z-10">
                            Мы создали пространство, где технологии встречаются с комфортом. Топовое железо, профессиональная периферия и атмосфера ночного Найт-Сити. Здесь рождаются чемпионы.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="font-mono text-gray-500 text-xs tracking-widest uppercase mb-2">// MISSION STATEMENT</p>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-cyber-cyan shrink-0" />
                                <span className="text-gray-300 font-rajdhani font-semibold text-lg">Обеспечить максимальный FPS в любой игре.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-cyber-cyan shrink-0" />
                                <span className="text-gray-300 font-rajdhani font-semibold text-lg">Создать идеальные условия для тренировок и отдыха.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-6 h-6 text-cyber-cyan shrink-0" />
                                <span className="text-gray-300 font-rajdhani font-semibold text-lg">Объединить комьюнити геймеров в одном месте.</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Column: Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {features.map((feature) => (
                        <div 
                            key={feature.id}
                            className={`
                                group relative p-6 bg-black/40 backdrop-blur-md border border-white/10 
                                rounded-xl hover:border-opacity-50 transition-all duration-300 hover:-translate-y-1
                                overflow-hidden
                            `}
                        >
                            {/* Hover Border Accent */}
                            <div className={`absolute top-0 left-0 w-full h-1 ${feature.bg} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                            
                            {/* Background Gradient on Hover */}
                            <div className={`absolute inset-0 ${feature.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`w-12 h-12 rounded-lg ${feature.bg} border ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                    {feature.icon}
                                </div>
                                
                                <h4 className="font-orbitron font-bold text-lg text-white uppercase tracking-wider mb-2 group-hover:text-cyber-cyan transition-colors">
                                    {feature.title}
                                </h4>
                                
                                <p className="font-mono text-gray-400 text-xs uppercase tracking-wide">
                                    {feature.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bottom Image Strip */}
            <div className="mt-20 relative h-40 md:h-64 rounded-sm overflow-hidden border-t border-b border-white/20">
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2071&auto=format&fit=crop" 
                    alt="Cyberpunk Room" 
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                     <span className="font-orbitron font-black text-4xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white/20 to-white/50 tracking-[0.2em] uppercase">
                        JOIN THE SYSTEM
                     </span>
                </div>
            </div>

        </div>
    </section>
  );
};

export default AboutSection;
