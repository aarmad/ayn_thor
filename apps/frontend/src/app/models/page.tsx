'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Battery, Zap, Shield, Monitor } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const models = [
  {
    id: 'lite',
    name: 'THOR LITE',
    price: '249€',
    processor: 'Snapdragon 865',
    ram: '8GB LPDDR5',
    storage: '128GB UFS 3.1',
    display: 'Main 60Hz + IPS 3.5"',
    color: 'Gris Sidéral',
    image: '/console_0.png',
    accent: 'border-black/10'
  },
  {
    id: 'base',
    name: 'THOR BASE',
    price: '349€',
    processor: 'Snapdragon 8 Gen 2',
    ram: '8GB LPDDR5X',
    storage: '128GB UFS 4.0',
    display: 'Dual AMOLED 120Hz',
    color: 'Blanc Pur',
    image: '/hero_transparent.png',
    accent: 'border-brand/20'
  },
  {
    id: 'pro',
    name: 'THOR PRO',
    price: '449€',
    processor: 'Snapdragon 8 Gen 2',
    ram: '12GB LPDDR5X',
    storage: '256GB UFS 4.0',
    display: 'Dual AMOLED 120Hz',
    color: 'Noir Profond',
    image: '/console_2.png',
    accent: 'border-brand'
  },
  {
    id: 'max',
    name: 'THOR MAX',
    price: '749€',
    processor: 'SD 8 Gen 2 (O.C.)',
    ram: '16GB LPDDR5X',
    storage: '1TB UFS 4.0',
    display: 'Dual AMOLED 120Hz',
    color: 'Édition Limitée',
    image: '/hero_transparent.png',
    accent: 'border-brand shadow-[0_0_30px_rgba(255,138,0,0.1)]'
  }
];

export default function ModelsPage() {
  return (
    <>
      <Navbar />
      
      <div className="w-full max-w-[1400px] px-6 py-20 flex flex-col items-center mx-auto">
        {/* Header */}
        <div className="text-center mb-24 flex flex-col items-center gap-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-brand font-black text-mono-xs tracking-widest uppercase px-4 py-1.5 border border-brand/20 rounded-full"
          >
            la gamme 2026
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-none text-black"
          >
            CHOISISSEZ <br /> VOTRE MÉTAL.
          </motion.h1>
          <motion.p 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.2 }}
             className="text-mono-sm font-bold text-black/40 max-w-xl uppercase pt-4"
          >
            DE LA PUISSANCE ÉQUILIBRÉE À L'ULTIME RÉGNE DU DOUBLE ÉCRAN.
            TROUVEZ LA THOT QUI CORRESPOND À VOTRE STYLE DE JEU.
          </motion.p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {models.map((model, idx) => (
            <motion.div
              key={model.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className={`group bg-container rounded-[4rem] p-8 md:p-12 border-2 ${model.accent} flex flex-col transition-all hover:scale-[1.01] hover:shadow-2xl relative overflow-hidden`}
            >
              {/* Background Glow for MAX */}
              {model.id === 'max' && (
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand opacity-10 blur-[100px] rounded-full"></div>
              )}

              <div className="flex justify-between items-start mb-12">
                <div className="flex flex-col gap-2">
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-black">{model.name}</h2>
                  <span className="text-mono-xs font-black text-black/30 uppercase tracking-widest">{model.color}</span>
                </div>
                <div className="text-2xl md:text-3xl font-black text-brand">{model.price}</div>
              </div>

              {/* Image Section */}
              <div className="relative w-full aspect-[16/10] mb-12 flex items-center justify-center">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-contain filter drop-shadow-[0_45px_100px_rgba(0,0,0,0.1)] group-hover:scale-105 transition-transform duration-700" 
                />
              </div>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 gap-6 pt-8 border-t border-black/5">
                <div className="flex flex-col gap-1.5 text-black">
                  <div className="flex items-center gap-2 opacity-30">
                    <Cpu className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase">PROCESSEUR</span>
                  </div>
                  <span className="text-mono-xs font-bold uppercase">{model.processor}</span>
                </div>
                <div className="flex flex-col gap-1.5 text-black">
                  <div className="flex items-center gap-2 opacity-30">
                    <Battery className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase">MÉMOIRE</span>
                  </div>
                  <span className="text-mono-xs font-bold uppercase">{model.ram}</span>
                </div>
                <div className="flex flex-col gap-1.5 text-black">
                  <div className="flex items-center gap-2 opacity-30">
                    <Monitor className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase">AFFICHAGE</span>
                  </div>
                  <span className="text-mono-xs font-bold uppercase">{model.display}</span>
                </div>
                <div className="flex flex-col gap-1.5 text-black">
                   <div className="flex items-center gap-2 opacity-30">
                    <Zap className="w-3 h-3" />
                    <span className="text-[10px] font-black uppercase">STOCKAGE</span>
                  </div>
                  <span className="text-mono-xs font-bold uppercase">{model.storage}</span>
                </div>
              </div>

              <Link 
                href={`/product?model=${model.id}`}
                className="mt-12 w-full py-6 rounded-2xl bg-black text-white text-mono-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-brand hover:text-black transition-all"
              >
                CONFIGURER MAINTENANT
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Comparison Bottom Section */}
        <section className="mt-32 w-full p-12 md:p-20 bg-black rounded-[5rem] text-white flex flex-col lg:flex-row items-center gap-16 overflow-hidden relative">
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-brand opacity-10 blur-[150px] rounded-full translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex-1 flex flex-col gap-8 relative z-10">
            <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">BESOIN D'AIDE POUR CHOISIR ?</h2>
            <p className="text-mono-sm font-bold text-white/40 leading-relaxed uppercase">
              NOTRE ÉQUIPE D'EXPERTS EST LÀ POUR VOUS GUIDER VERS LE MODÈLE QUI RÉPOND À VOS BESOINS, QUE CE SOIT POUR LE RETRO-GAMING OU LES DERNIERS TRIPLE-A ANDROID.
            </p>
            <div className="flex flex-wrap gap-4">
               <div className="px-6 py-3 border border-white/20 rounded-full text-mono-xs font-bold uppercase">Assistance 24/7</div>
               <div className="px-6 py-3 border border-white/20 rounded-full text-mono-xs font-bold uppercase">Garantie 2 ans</div>
               <div className="px-6 py-3 border border-white/20 rounded-full text-mono-xs font-bold uppercase">Livraison Global Express</div>
            </div>
          </div>

          <div className="flex-1 flex justify-center relative z-10">
             <Link 
               href="/product"
               className="group relative w-64 h-64 bg-brand rounded-full flex items-center justify-center transition-all hover:scale-110 active:scale-95 shadow-[0_0_50px_rgba(255,138,0,0.3)]"
             >
                <div className="absolute inset-2 border-[1.5px] border-black/20 rounded-full border-dashed group-hover:rotate-180 transition-transform duration-1000"></div>
                <span className="text-black font-black text-mono-sm text-center px-8 uppercase leading-tight">Accéder au configurateur</span>
             </Link>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
