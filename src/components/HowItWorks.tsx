
import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-32 px-6 md:px-12 bg-white text-black overflow-hidden relative">
      <div className="absolute top-0 right-0 p-12 opacity-5 hidden md:block">
        <h2 className="text-[200px] font-black uppercase tracking-tighter leading-none select-none">SYSTEM</h2>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24">
          <div className="bg-black text-white px-4 py-1 inline-block font-black text-xs uppercase tracking-[0.3em] mb-8">
            Operational Logic
          </div>
          <h2 className="text-5xl md:text-8xl font-editorial uppercase tracking-tighter">Two-Sided Synergy</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-24">
          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-blue-600 flex items-center justify-center text-white font-black">B</div>
                <h3 className="text-xs uppercase tracking-[0.4em] font-black text-zinc-400">For Brand Partners</h3>
              </div>
              <div className="space-y-12">
                <div className="group">
                  <span className="text-sm font-black text-blue-600 mb-2 block tracking-widest uppercase">Protocol Alpha</span>
                  <p className="text-2xl font-bold tracking-tighter leading-tight uppercase">Submit narrative objectives via secure institutional portal.</p>
                </div>
                <div className="group">
                  <span className="text-sm font-black text-blue-600 mb-2 block tracking-widest uppercase">Protocol Beta</span>
                  <p className="text-2xl font-bold tracking-tighter leading-tight uppercase">Approve automated memetic strategy & creator mappings.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-16">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-red-600 flex items-center justify-center text-white font-black">C</div>
                <h3 className="text-xs uppercase tracking-[0.4em] font-black text-zinc-400">For Creator Collective</h3>
              </div>
              <div className="space-y-12">
                <div className="group">
                  <span className="text-sm font-black text-red-600 mb-2 block tracking-widest uppercase">Node Action</span>
                  <p className="text-2xl font-bold tracking-tighter leading-tight uppercase">Receive high-saturation tasks mapped to your voice.</p>
                </div>
                <div className="group">
                  <span className="text-sm font-black text-red-600 mb-2 block tracking-widest uppercase">Node Settlement</span>
                  <p className="text-2xl font-bold tracking-tighter leading-tight uppercase">Automated distribution of rewards per amplification metric.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
