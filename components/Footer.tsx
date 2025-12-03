
import React from 'react';
import { MapPin, Phone, Instagram, Send, Disc, Zap } from 'lucide-react';
import { SECTORS, SOCIAL_LINKS } from '../constants';
import { SectorData } from '../types';

interface FooterProps {
    currentSector: SectorData;
}

const Footer: React.FC<FooterProps> = ({ currentSector }) => {
  return (
    <footer id="контакты" className="bg-cyber-black border-t border-cyber-pink/30 py-8 relative overflow-hidden">
      
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16 mb-8">
          
          {/* LEFT: Brand & Socials */}
          <div className="flex flex-col gap-4 min-w-fit">
            {/* Logo */}
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 flex items-center justify-center bg-cyber-yellow text-black rounded-sm">
                    <Zap size={18} fill="currentColor" />
                </div>
                <div className="flex flex-col leading-none">
                    <span className="font-orbitron font-bold text-lg text-white tracking-wider">AFTERLIFE</span>
                    <span className="font-rajdhani font-bold text-[9px] text-gray-500 tracking-[0.3em] uppercase">CYBER ARENA</span>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
                <a href={SOCIAL_LINKS.instagram} className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-cyber-pink hover:border-cyber-pink transition-all">
                    <Instagram size={16} />
                </a>
                <a href={SOCIAL_LINKS.telegram} className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-cyber-cyan hover:border-cyber-cyan transition-all">
                    <Send size={16} />
                </a>
                <a href={SOCIAL_LINKS.vk} className="w-8 h-8 border border-white/10 rounded-sm flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all">
                    <Disc size={16} />
                </a>
            </div>
          </div>

          {/* RIGHT: Addresses (Horizontal Grid) */}
          <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0 lg:divide-x divide-white/10 w-full lg:w-auto">
             {Object.values(SECTORS).map((sector) => {
                 const isCurrent = sector.id === currentSector.id;
                 return (
                    <div key={sector.id} className="flex flex-col gap-1 lg:px-8 first:lg:pl-0 last:lg:pr-0">
                        <div className="flex items-center gap-2 mb-1">
                            <h4 className={`font-orbitron font-bold text-sm uppercase tracking-wider ${isCurrent ? 'text-white' : 'text-gray-500'}`}>
                                {sector.name.replace('СЕКТОР ', '')}
                            </h4>
                            {isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-cyber-green shadow-[0_0_5px_#00ff00]"></span>}
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400 hover:text-cyber-cyan transition-colors cursor-default">
                            <MapPin size={12} className="shrink-0" />
                            <span className="font-rajdhani font-semibold text-xs md:text-sm uppercase tracking-wide">
                                {sector.address}
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors cursor-default">
                            <Phone size={12} className="shrink-0" />
                            <span className="font-mono text-xs text-gray-500">
                                {sector.phone}
                            </span>
                        </div>
                    </div>
                 );
             })}
          </div>

        </div>

        {/* Bottom Row: Copyright */}
        <div className="border-t border-white/5 pt-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-gray-600 font-mono uppercase tracking-wider">
            <p>© 2025 AFTERLIFE CYBER ARENA. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
                <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
