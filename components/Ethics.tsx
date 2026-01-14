
import React from 'react';
import { motion } from 'framer-motion';

const Ethics: React.FC = () => {
  const rules = [
    "No hate speech or harassment.",
    "No illegal content or misinformation.",
    "Total creator autonomy in execution.",
    "Transparency in campaign reporting.",
    "Strict adherence to platform TOS."
  ];

  return (
    <section id="ethics" className="py-16 md:py-20 bg-[#09090b] px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-square bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent)]" />
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-3/4 h-3/4 border border-zinc-800 rounded-full border-dashed"
          />
          <h3 className="text-4xl font-serif-bold z-10 italic uppercase tracking-tighter text-center px-4">Ethical Guardrails</h3>
        </div>

        <div>
          <span className="text-xs uppercase tracking-widest text-zinc-500 mb-8 block font-black">Platform Governance</span>
          <h2 className="text-3xl md:text-5xl font-editorial uppercase leading-[0.9] tracking-tighter mb-8">Infrastructure requires responsibility.</h2>
          <div className="space-y-8">
            <p className="text-lg text-zinc-400 font-medium leading-relaxed uppercase tracking-tight">
              Roborofl is not an open utility. It is a managed environment. We enforce strict ethical boundaries to ensure that memetic amplification serves culture rather than destroying it.
            </p>
            <ul className="space-y-4">
              {rules.map((r, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-400 font-bold text-sm uppercase tracking-tight">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ethics;
