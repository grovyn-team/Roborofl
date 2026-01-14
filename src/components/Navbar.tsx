
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RoboroflLogo from '../assets/Roborofl.svg';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 w-full z-[60] py-6 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-xl bg-zinc-900/80 border-b border-zinc-800/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="flex items-center gap-4 cursor-pointer group" onClick={() => scrollTo('hero')}>
        <img 
          src={RoboroflLogo} 
          alt="Roborofl" 
          className="h-8 w-auto group-hover:opacity-80 transition-opacity duration-300"
        />
        <span className="text-lg font-bold tracking-widest uppercase hidden sm:inline-block ml-[-12px]">oborofl</span>
      </div>

      <div className="hidden md:flex gap-8 bg-zinc-900/80 backdrop-blur-md px-8 py-3 rounded-full border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-bold">
        <button onClick={() => scrollTo('how-it-works')} className="hover:text-blue-500 transition-colors">Infrastructure</button>
        <button onClick={() => scrollTo('engine')} className="hover:text-red-500 transition-colors">The Engine</button>
        <button onClick={() => scrollTo('ethics')} className="hover:text-purple-500 transition-colors">Governance</button>
      </div>

      <div className="flex items-center gap-4">
        <button 
          onClick={() => scrollTo('join')}
          className="text-[10px] uppercase tracking-[0.2em] font-black bg-white text-black px-6 py-3 hover:bg-yellow-400 transition-all duration-300 active:scale-95"
        >
          Get Access
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
