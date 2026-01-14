
import React from 'react';
import { motion } from 'framer-motion';

const WhoItsFor: React.FC = () => {
  const clients = [
    "SaaS Companies",
    "Consumer Brands",
    "Media Houses",
    "Public Figures",
    "Cultural Movements"
  ];

  return (
    <section className="py-16 md:py-20 border-t border-zinc-900 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        <div className="max-w-md">
          <span className="text-xs uppercase tracking-widest text-zinc-500 mb-6 block font-black">Eligibility</span>
          <h2 className="text-3xl md:text-5xl font-serif-bold italic mb-6 uppercase tracking-tighter">Built for power. <br/>Used by the few.</h2>
          <p className="text-zinc-400 font-medium uppercase text-xs tracking-tight leading-relaxed max-w-xs">
            We work with entities that understand narrative velocity is the primary asset of the 21st century.
          </p>
        </div>

        <div className="flex-1 max-w-xl">
          <div className="border-t border-zinc-800">
            {clients.map((c, i) => (
              <motion.div 
                key={i}
                whileHover={{ x: 20 }}
                transition={{ duration: 0.4 }}
                className="py-5 border-b border-zinc-800 flex justify-between items-center group cursor-default"
              >
                <span className="text-2xl md:text-4xl font-editorial uppercase tracking-tighter opacity-60 group-hover:opacity-100 transition-opacity italic">{c}</span>
                <div className="w-2 h-2 rounded-full bg-zinc-800 group-hover:bg-blue-600 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
