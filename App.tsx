
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import GamesSection from './components/GamesSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import SectorModal from './components/SectorModal';
import { SECTORS } from './constants';
import { SectorData } from './types';

function App() {
  const [currentSector, setCurrentSector] = useState<SectorData>(SECTORS.lenina);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleSectorSelect = (sector: SectorData) => {
    setCurrentSector(sector);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cyber-black text-white font-rajdhani selection:bg-cyber-pink selection:text-white overflow-x-hidden">
      
      <SectorModal 
        isOpen={isModalOpen} 
        onSelect={handleSectorSelect}
        currentSectorId={currentSector.id}
      />

      <Navbar 
        currentSector={currentSector} 
        onSelectSector={handleSectorSelect}
      />
      
      <main>
        <Hero currentSector={currentSector} />
        
        {/* New First Visit Promo Banner (Replaces old Info Section) */}
        <PromoBanner />
        
        <PricingSection currentSector={currentSector} />
        <GamesSection />
      </main>
      
      <Footer currentSector={currentSector} />
    </div>
  );
}

export default App;
