
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PromoBanner from './components/PromoBanner';
import HomeDashboard from './components/HomeDashboard';
import PartnersStrip from './components/PartnersStrip';
import GamesSection from './components/GamesSection';
import PricingSection from './components/PricingSection';
import PromotionsSection from './components/PromotionsSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import SectorModal from './components/SectorModal';
import BookingModal from './components/BookingModal';
import { SECTORS } from './constants';
import { SectorData } from './types';

type ViewState = 'HOME' | 'PRICING' | 'GAMES' | 'PROMOS' | 'ABOUT';

function App() {
  const [currentSector, setCurrentSector] = useState<SectorData>(SECTORS.lenina);
  const [isSectorModalOpen, setIsSectorModalOpen] = useState(true);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('HOME');

  const handleSectorSelect = (sector: SectorData) => {
    setCurrentSector(sector);
    setIsSectorModalOpen(false);
  };

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-cyber-black text-white font-rajdhani selection:bg-cyber-pink selection:text-white overflow-x-hidden">
      
      <SectorModal 
        isOpen={isSectorModalOpen} 
        onSelect={handleSectorSelect}
        currentSectorId={currentSector.id}
      />

      <BookingModal 
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        currentSector={currentSector}
      />

      <Navbar 
        currentSector={currentSector} 
        onSelectSector={handleSectorSelect}
        currentView={currentView}
        onNavigate={setCurrentView}
        onOpenBooking={() => setIsBookingOpen(true)}
      />
      
      <AnimatePresence mode="wait">
        
        {/* VIEW A: HOME */}
        {currentView === 'HOME' && (
          <motion.main
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Hero 
                currentSector={currentSector} 
                onNavigate={setCurrentView} 
                onOpenBooking={() => setIsBookingOpen(true)}
            />
            <PromoBanner />
            <HomeDashboard onNavigate={setCurrentView} />
            <PartnersStrip />
            <Footer currentSector={currentSector} />
          </motion.main>
        )}

        {/* VIEW B: PRICING */}
        {currentView === 'PRICING' && (
           <motion.main
            key="pricing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PricingSection currentSector={currentSector} onBack={() => setCurrentView('HOME')} />
            <Footer currentSector={currentSector} />
          </motion.main>
        )}

        {/* VIEW C: GAMES */}
        {currentView === 'GAMES' && (
           <motion.main
            key="games"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <GamesSection onBack={() => setCurrentView('HOME')} />
            <Footer currentSector={currentSector} />
          </motion.main>
        )}

        {/* VIEW D: PROMOS */}
        {currentView === 'PROMOS' && (
           <motion.main
            key="promos"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <PromotionsSection onBack={() => setCurrentView('HOME')} />
            <Footer currentSector={currentSector} />
          </motion.main>
        )}

        {/* VIEW E: ABOUT */}
        {currentView === 'ABOUT' && (
           <motion.main
            key="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AboutSection onBack={() => setCurrentView('HOME')} />
            <Footer currentSector={currentSector} />
          </motion.main>
        )}

      </AnimatePresence>
      
    </div>
  );
}

export default App;
