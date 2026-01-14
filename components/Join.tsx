
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FormSuccess = ({ type }: { type: 'brand' | 'creator' }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="h-full flex flex-col items-center justify-center text-center space-y-8 p-12 bg-white text-black"
  >
    <div className="w-20 h-20 bg-blue-600 flex items-center justify-center">
      <div className="w-4 h-4 bg-white animate-ping" />
    </div>
    <h4 className="text-4xl font-black uppercase tracking-tighter italic">Application Logged</h4>
    <p className="text-zinc-600 font-bold uppercase text-xs tracking-widest max-w-[300px]">
      Protocol vetting initiated. You will receive notification via encrypted channel.
    </p>
    <button 
      onClick={() => window.location.reload()}
      className="text-[10px] uppercase tracking-[0.3em] font-black border-b-2 border-black pb-1 hover:text-blue-600 transition-colors"
    >
      Submit New Case
    </button>
  </motion.div>
);

const Join: React.FC = () => {
  const [submittingBrand, setSubmittingBrand] = useState(false);
  const [successBrand, setSuccessBrand] = useState(false);
  const [submittingCreator, setSubmittingCreator] = useState(false);
  const [successCreator, setSuccessCreator] = useState(false);

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingBrand(true);
    setTimeout(() => {
      setSubmittingBrand(false);
      setSuccessBrand(true);
    }, 1500);
  };

  const handleCreatorSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingCreator(true);
    setTimeout(() => {
      setSubmittingCreator(false);
      setSuccessCreator(true);
    }, 1500);
  };

  return (
    <section className="py-16 md:py-20 px-6 md:px-12 bg-[#09090b]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="bg-red-500 text-white px-4 py-1 inline-block font-black text-xs uppercase tracking-[0.3em] mb-6">
            The Gateway
          </div>
          <h2 className="text-6xl md:text-[100px] font-editorial uppercase tracking-tighter leading-none">Get <br /> Inside.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Brand Form */}
          <div className="bg-white text-black p-12 md:p-16 border-2 border-white relative overflow-hidden group">
            <AnimatePresence mode="wait">
              {!successBrand ? (
                <motion.div key="form-brand" exit={{ opacity: 0 }} className="h-full flex flex-col">
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4">Deploy Narrative</h3>
                  <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-tight leading-relaxed">
                    Stop gambling on "organic" reach. We provide a direct, managed line to the cultural vanguard. One brief. Total saturation.
                  </p>
                  <form className="space-y-4" onSubmit={handleBrandSubmit}>
                    <input required type="email" placeholder="DIRECT_CONTACT@DOMAIN.COM" className="w-full bg-zinc-100 border-none p-6 outline-none focus:ring-2 focus:ring-zinc-300 font-bold placeholder:text-zinc-400" />
                    <input required type="text" placeholder="ENTITY_NAME" className="w-full bg-zinc-100 border-none p-6 outline-none focus:ring-2 focus:ring-zinc-300 font-bold placeholder:text-zinc-400" />
                    <button disabled={submittingBrand} className="w-full bg-black text-white py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors active:scale-95 flex justify-center items-center">
                      {submittingBrand ? 'VERIFYING...' : 'INITIATE_PROTOCOL'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <FormSuccess key="success-brand" type="brand" />
              )}
            </AnimatePresence>
          </div>

          {/* Creator Form */}
          <div className="bg-zinc-900 border-2 border-zinc-800 p-12 md:p-16 relative overflow-hidden group">
            <AnimatePresence mode="wait">
              {!successCreator ? (
                <motion.div key="form-creator" exit={{ opacity: 0 }} className="h-full flex flex-col">
                  <h3 className="text-4xl font-black uppercase tracking-tighter italic mb-4 text-white">Sync Your Voice</h3>
                  <p className="text-sm font-medium text-zinc-500 mb-8 uppercase tracking-tight leading-relaxed">
                    Algorithms are fickle. Narrative is forever. We don't want your data; we want your perspective. Join the elite distribution layer.
                  </p>
                  <form className="space-y-4" onSubmit={handleCreatorSubmit}>
                    <input required type="email" placeholder="YOUR_BEST_EMAIL@PROVIDER.COM" className="w-full bg-zinc-950 border border-zinc-800 p-6 outline-none focus:ring-2 focus:ring-zinc-700 font-bold placeholder:text-zinc-600 text-white" />
                    <input required type="text" placeholder="URL_OF_YOUR_FOOTPRINT" className="w-full bg-zinc-950 border border-zinc-800 p-6 outline-none focus:ring-2 focus:ring-zinc-700 font-bold placeholder:text-zinc-600 text-white" />
                    <button disabled={submittingCreator} className="w-full bg-red-600 text-white py-6 text-[12px] font-black uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all active:scale-95 flex justify-center items-center">
                      {submittingCreator ? 'PROCESSING...' : 'APPLY_FOR_SYNC'}
                    </button>
                  </form>
                </motion.div>
              ) : (
                <FormSuccess key="success-creator" type="creator" />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Join;
