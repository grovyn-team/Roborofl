
import React from 'react';
import { motion } from 'framer-motion';

const Problem: React.FC = () => {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <div className="bg-yellow-400 text-black px-4 py-1 inline-block font-black text-xs uppercase tracking-[0.3em] mb-8">
            The Market Gap
          </div>
          <h2 className="text-4xl md:text-6xl font-editorial uppercase leading-[0.9] tracking-tighter">
            Tradition is failing the timeline.
          </h2>
        </div>
        
        <div className="md:col-span-8 flex flex-col justify-end">
          <div className="space-y-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 border border-zinc-800 bg-zinc-900/40">
                <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-4">Problem 01</span>
                <p className="text-xl font-bold uppercase tracking-tight text-zinc-300">Ads are ignored by the very people you want to reach.</p>
              </div>
              <div className="p-8 border border-zinc-800 bg-zinc-900/40">
                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-4">Problem 02</span>
                <p className="text-xl font-bold uppercase tracking-tight text-zinc-300">Influencer marketing has become institutional noise.</p>
              </div>
            </div>
            
            <p className="text-2xl md:text-4xl font-serif-bold italic text-zinc-400 leading-tight border-l-4 border-yellow-400 pl-8">
              "Virality is unpredictable until you own the distribution layers. We bridge the gap between corporate intent and organic impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
