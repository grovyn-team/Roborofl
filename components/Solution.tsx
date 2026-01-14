
import React from 'react';
import { motion } from 'framer-motion';

const Solution: React.FC = () => {
  const steps = [
    { label: 'Strategic Intent', color: 'bg-zinc-800', text: 'white' },
    { label: 'Memetic Translation', color: 'bg-blue-600', text: 'white' },
    { label: 'Controlled Distribution', color: 'bg-white', text: 'black' },
    { label: 'Internet Saturation', color: 'bg-purple-600', text: 'white' }
  ];

  return (
    <section className="py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20 items-start mb-24">
          <div className="md:w-1/2">
            <div className="bg-blue-500 text-white px-4 py-1 inline-block font-black text-xs uppercase tracking-[0.3em] mb-8">
              The Protocol
            </div>
            <h2 className="text-5xl md:text-[100px] font-editorial uppercase leading-[0.8] tracking-tighter mb-12">
              Modular <br /> Narrative <br /> Engineering
            </h2>
          </div>
          <div className="md:w-1/2 flex flex-col justify-center">
            <p className="text-xl text-zinc-400 font-medium leading-relaxed uppercase tracking-tight">
              One brief in. Hundreds of contextual memes out. Our engine atomizes your narrative and distributes it through curated creator nodes across the global timeline.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`${step.color} p-12 min-h-[300px] flex flex-col justify-between border border-black group cursor-default`}
            >
              <span className={`text-[40px] font-editorial ${step.text === 'black' ? 'text-black' : 'text-white'} opacity-20`}>
                0{idx + 1}
              </span>
              <h3 className={`text-2xl font-black uppercase tracking-tighter ${step.text === 'black' ? 'text-black' : 'text-white'}`}>
                {step.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
