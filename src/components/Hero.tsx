
import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const scrollToJoin = () => {
    const el = document.getElementById('join');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-[#09090b]">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -right-24 w-96 h-96 border-[0.5px] border-zinc-800 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -left-24 w-64 h-64 border-[0.5px] border-zinc-800 opacity-50"
        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}
      />

      <div className="z-10 text-center px-4 max-w-7xl">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="h-[1px] w-8 bg-blue-500"></span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-black text-zinc-500">
              Protocol v1.0 / Global Marketplace
            </span>
            <span className="h-[1px] w-8 bg-blue-500"></span>
          </div>
          
          <h1 className="text-5xl md:text-[140px] font-editorial leading-[0.85] uppercase tracking-tighter mb-12">
            The Internet <br />
            <span className="relative inline-block">
              <span className="relative z-10 italic">Runs on Memes.</span>
              <motion.span 
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ delay: 0.8, duration: 0.8, ease: "circOut" }}
                className="absolute bottom-2 left-0 h-[20%] bg-blue-600 -z-0"
              />
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-12 mt-12"
        >
          <p className="text-sm md:text-lg text-zinc-400 max-w-md text-left font-medium leading-relaxed border-l-2 border-red-500 pl-6 uppercase tracking-tight">
            We provide institutional-grade distribution for cultural narratives. Curated. Controlled. Inevitable.
          </p>

          <div className="flex gap-4">
            <button 
              onClick={scrollToJoin}
              className="bg-red-500 text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all duration-300"
            >
              Launch Campaign
            </button>
            <button 
              onClick={scrollToJoin}
              className="bg-blue-600 text-white px-10 py-5 text-[11px] uppercase tracking-[0.2em] font-black hover:bg-white hover:text-black transition-all duration-300"
            >
              Apply as Creator
            </button>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/4 right-1/4 opacity-20 pointer-events-none">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0L24.4903 15.5097L40 20L24.4903 24.4903L20 40L15.5097 24.4903L0 20L15.5097 15.5097L20 0Z" fill="white"/>
        </svg>
      </div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-bold"
      >
        Scroll to explore infrastructure
      </motion.div>
    </div>
  );
};

export default Hero;
