
import React from 'react';
import { GAMES_LIBRARY } from '../constants';
import { ArrowLeft } from 'lucide-react';

interface GamesSectionProps {
    onBack?: () => void;
}

const GamesSection: React.FC<GamesSectionProps> = ({ onBack }) => {
  const pcGames = GAMES_LIBRARY.filter(g => g.category === 'pc');
  const consoleGames = GAMES_LIBRARY.filter(g => g.category === 'console');

  return (
    <section id="игры" className="pt-24 pb-20 bg-cyber-black relative overflow-hidden min-h-screen">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

       <div className="container mx-auto px-4 relative z-10">
          
          {/* Back Button */}
          {onBack && (
              <button 
                  onClick={onBack}
                  className="mb-8 flex items-center gap-2 text-gray-500 hover:text-white transition-colors group"
              >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform"/>
                  <span className="font-mono text-xs uppercase tracking-widest">BACK TO HOME</span>
              </button>
          )}

          {/* Header */}
          <div className="text-center mb-16">
             <h2 className="font-orbitron font-black text-5xl md:text-6xl text-white italic tracking-tighter glitch-text inline-block" data-text="СПИСОК ИГР">
                <span className="text-cyber-cyan">СПИСОК</span> ИГР
             </h2>
             <p className="text-gray-500 font-mono mt-2 tracking-[0.5em] text-sm">// GAMES_LIBRARY_V.2.0</p>
          </div>

          {/* PC Section */}
          <div className="mb-16">
              <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-2 bg-cyber-pink"></div>
                  <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider">
                      ПРЕДУСТАНОВЛЕННЫЕ ИГРЫ НА ПК
                  </h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-cyber-pink/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {pcGames.map((game) => (
                      <div key={game.id} className="group relative aspect-[2/3] overflow-hidden rounded-sm border border-white/10 hover:border-cyber-pink transition-colors cursor-pointer bg-black">
                          <img 
                              src={game.image} 
                              alt={game.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                          <div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <p className="text-white font-rajdhani font-bold text-sm md:text-base leading-none text-center drop-shadow-md">
                                  {game.title}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

          {/* Console Section */}
          <div>
              <div className="flex items-center gap-4 mb-8">
                  <div className="h-8 w-2 bg-cyber-cyan"></div>
                  <h3 className="text-2xl font-orbitron font-bold text-white uppercase tracking-wider">
                      ИГРЫ НА КОНСОЛИ
                  </h3>
                  <div className="h-px flex-grow bg-gradient-to-r from-cyber-cyan/50 to-transparent"></div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {consoleGames.map((game) => (
                      <div key={game.id} className="group relative aspect-[2/3] overflow-hidden rounded-sm border border-white/10 hover:border-cyber-cyan transition-colors cursor-pointer bg-black">
                          <img 
                              src={game.image} 
                              alt={game.title} 
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:grayscale-0 grayscale-[0.3]"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                          <div className="absolute bottom-0 left-0 w-full p-3 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                              <p className="text-white font-rajdhani font-bold text-sm md:text-base leading-none text-center drop-shadow-md">
                                  {game.title}
                              </p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>

       </div>
    </section>
  );
};

export default GamesSection;
