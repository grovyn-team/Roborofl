
import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import Engine from './components/Engine';
import Ethics from './components/Ethics';
import WhoItsFor from './components/WhoItsFor';
import Join from './components/Join';
import Footer from './components/Footer';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative bg-[#09090b] selection:bg-white selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-blue-500 z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <section id="hero">
        <Hero />
      </section>

      <div className="relative z-10">
        <Problem />
        
        {/* Culture Statement Horizontal Bar */}
        <div className="bg-red-500 py-4 overflow-hidden whitespace-nowrap border-y border-black">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="text-[12px] uppercase tracking-[0.5em] font-bold text-black inline-block"
          >
            CULTURE-LED DISTRIBUTION • INTERNET-NATIVE INFRASTRUCTURE • MEMETIC SETTLEMENT • CULTURE-LED DISTRIBUTION • INTERNET-NATIVE INFRASTRUCTURE • MEMETIC SETTLEMENT • 
          </motion.div>
        </div>

        <Solution />
        <HowItWorks />
        
        {/* Intersecting Color Bar Decoration - Adjusted for seamless transition */}
        <div className="h-24 bg-blue-600 relative -skew-y-1 z-0 hidden md:block" />

        <Engine />
        <Ethics />
        <WhoItsFor />
        
        <section id="join" className="bg-[#09090b]">
          <Join />
        </section>
      </div>

      <Footer />
    </main>
  );
};

export default App;
