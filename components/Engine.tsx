
import React from 'react';
import { motion } from 'framer-motion';

const Engine: React.FC = () => {
  const features = [
    { title: "Narrative Design", color: "bg-blue-600", desc: "Translating corporate objectives into organic cultural linguistic patterns." },
    { title: "Format Mapping", color: "bg-yellow-400", desc: "Identifying high-yield visual formats for specific demographic nodes." },
    { title: "Creator Matching", color: "bg-red-500", desc: "Connecting narratives to nodes with the highest probability of organic lift." },
    { title: "Release Strategy", color: "bg-purple-600", desc: "Coordinated deployment across timezones to maximize memetic friction." },
    { title: "Amplification Tracking", color: "bg-green-500", desc: "Real-time institutional dashboards for reach and secondary sentiment." }
  ];

  return (
    <section id="engine" className="py-24 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <div className="bg-blue-500 text-white px-4 py-1 inline-block font-black text-xs uppercase tracking-[0.3em] mb-8">
            Proprietary Architecture
          </div>
          <h2 className="text-5xl md:text-9xl font-editorial uppercase tracking-tighter leading-[0.8]">The Core <br /> Engine</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-zinc-800">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900 border-r border-b border-zinc-800 p-12 hover:bg-zinc-800 transition-colors duration-500 flex flex-col justify-between min-h-[400px]"
            >
              <div>
                <div className={`w-8 h-8 ${f.color} mb-8`}></div>
                <h4 className="text-3xl font-black uppercase tracking-tighter mb-6 italic">{f.title}</h4>
                <p className="text-zinc-500 text-sm font-bold uppercase tracking-tight leading-relaxed">{f.desc}</p>
              </div>
              <div className="pt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] uppercase tracking-[0.5em] font-black text-blue-500">System Ready</span>
              </div>
            </motion.div>
          ))}
          {/* Fill card to maintain grid */}
          <div className="bg-zinc-950 border-r border-b border-zinc-900 p-12 flex items-center justify-center opacity-20">
             <div className="text-[80px] font-black text-zinc-800">ROFL</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Engine;
