
import React, { useState, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import EthicsImage from '../assets/ethics-governance.svg';

const Ethics: React.FC = () => {
  const [hoveredRule, setHoveredRule] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7.5, -7.5]), {
    stiffness: 150,
    damping: 15
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7.5, 7.5]), {
    stiffness: 150,
    damping: 15
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const x = (e.clientX - centerX) / (rect.width / 2);
    const y = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

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
        <motion.div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d"
          }}
          className="relative aspect-square bg-zinc-900 border border-zinc-800 rounded-full flex items-center justify-center overflow-hidden cursor-pointer group"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <motion.div 
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent)]"
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="w-3/4 h-3/4 border border-zinc-800 rounded-full border-dashed absolute"
          />
          
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="w-1/2 h-1/2 border border-blue-500/30 rounded-full border-dashed absolute"
          />

          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-10"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <img 
              src={EthicsImage} 
              alt="Ethical Governance" 
              className="w-3/4 h-3/4 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full"
              style={{
                top: '50%',
                left: '50%',
                x: '-50%',
                y: '-50%',
                originX: 0,
                originY: 0,
              }}
              animate={{
                x: [
                  `calc(-50% + ${Math.cos((i * Math.PI) / 4) * 140}px)`,
                  `calc(-50% + ${Math.cos((i * Math.PI) / 4) * 160}px)`,
                  `calc(-50% + ${Math.cos((i * Math.PI) / 4) * 140}px)`,
                ],
                y: [
                  `calc(-50% + ${Math.sin((i * Math.PI) / 4) * 140}px)`,
                  `calc(-50% + ${Math.sin((i * Math.PI) / 4) * 160}px)`,
                  `calc(-50% + ${Math.sin((i * Math.PI) / 4) * 140}px)`,
                ],
                opacity: [0.3, 0.6, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}

          <motion.h3 
            className="text-4xl font-serif-bold z-20 italic uppercase tracking-tighter text-center px-4 relative"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            Ethical Guardrails
          </motion.h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-xs uppercase tracking-widest text-zinc-500 mb-8 block font-black"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Platform Governance
          </motion.span>
          
          <motion.h2 
            className="text-3xl md:text-5xl font-editorial uppercase leading-[0.9] tracking-tighter mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Infrastructure requires responsibility.
          </motion.h2>
          
          <div className="space-y-8">
            <motion.p 
              className="text-lg text-zinc-400 font-medium leading-relaxed uppercase tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Roborofl is not an open utility. It is a managed environment. We enforce strict ethical boundaries to ensure that memetic amplification serves culture rather than destroying it.
            </motion.p>
            
            <ul className="space-y-4">
              {rules.map((r, i) => (
                <motion.li 
                  key={i} 
                  className="flex items-center gap-4 text-zinc-400 font-bold text-sm uppercase tracking-tight cursor-pointer group/rule"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  onHoverStart={() => setHoveredRule(i)}
                  onHoverEnd={() => setHoveredRule(null)}
                  whileHover={{ x: 10, scale: 1.02 }}
                >
                  <motion.div 
                    className="w-1.5 h-1.5 rounded-full bg-blue-500 relative"
                    animate={{
                      scale: hoveredRule === i ? [1, 1.5, 1] : 1,
                      boxShadow: hoveredRule === i 
                        ? "0 0 10px rgba(59, 130, 246, 0.8)" 
                        : "0 0 0px rgba(59, 130, 246, 0)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {hoveredRule === i && (
                      <motion.div
                        className="absolute inset-0 rounded-full bg-blue-500"
                        initial={{ scale: 0, opacity: 0.8 }}
                        animate={{ scale: 2, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                  <motion.span
                    animate={{
                      color: hoveredRule === i ? "#60a5fa" : "#a1a1aa"
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    {r}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Ethics;
