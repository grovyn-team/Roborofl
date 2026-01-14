
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 bg-white text-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-black text-white px-2 py-1 font-black text-2xl tracking-tighter uppercase">RR</div>
            <span className="text-xl font-black tracking-widest uppercase">Roborofl</span>
          </div>
          <p className="text-lg font-bold uppercase tracking-tight max-w-sm leading-tight text-zinc-600">
            The infrastructure layer of modern cultural distribution. Inevitable amplification.
          </p>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-400 mb-8">Access</h4>
          <div className="space-y-4 font-bold text-sm uppercase">
            <a href="#" className="block hover:text-blue-600 transition-colors">X / Twitter</a>
            <a href="#" className="block hover:text-blue-600 transition-colors">Telegram</a>
            <a href="#" className="block hover:text-blue-600 transition-colors">Email</a>
          </div>
        </div>

        <div>
          <h4 className="text-[10px] uppercase tracking-[0.5em] font-black text-zinc-400 mb-8">Protocol</h4>
          <div className="space-y-4 font-bold text-sm uppercase">
            <a href="#" className="block hover:text-blue-600 transition-colors">Terms of Action</a>
            <a href="#" className="block hover:text-blue-600 transition-colors">Privacy Charter</a>
            <a href="#" className="block hover:text-blue-600 transition-colors">Governance</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-8">
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">© 2024 Roborofl Collective</p>
        <div className="flex gap-4">
           <div className="w-3 h-3 bg-blue-600"></div>
           <div className="w-3 h-3 bg-red-600"></div>
           <div className="w-3 h-3 bg-yellow-400"></div>
           <div className="w-3 h-3 bg-purple-600"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
