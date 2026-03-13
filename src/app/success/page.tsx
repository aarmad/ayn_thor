'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircle, Home, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  const { clearCart } = useCartStore();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="w-full min-h-screen bg-primary font-mono text-dark flex flex-col items-center">
      <Navbar />
      
      <main className="flex-1 w-full flex items-center justify-center p-6 md:p-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl bg-container rounded-[3rem] p-10 md:p-20 flex flex-col items-center justify-center text-center shadow-2xl relative overflow-hidden border-[1.5px] border-black/5"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand via-transparent to-transparent"></div>
          
          <motion.div
             initial={{ scale: 0 }}
             animate={{ scale: 1 }}
             transition={{ delay: 0.2, type: 'spring', stiffness: 200, damping: 15 }}
             className="w-24 h-24 rounded-full bg-brand flex items-center justify-center mb-8 text-white shadow-xl relative z-10"
          >
            <CheckCircle className="w-12 h-12" />
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-4 relative z-10">
            MERCI !
          </h1>
          
          <p className="text-black/50 text-mono-sm md:text-sm font-bold max-w-sm mx-auto mb-12 text-balance leading-relaxed relative z-10">
            VOTRE COMMANDE AYN THOR A ÉTÉ ENREGISTRÉE. UN RÉCAPITULATIF VOUS A ÉTÉ ENVOYÉ PAR EMAIL.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center relative z-10">
            <Link 
               href="/"
               className="w-full sm:w-auto px-10 py-5 rounded-full border-[1.5px] border-black/20 text-black font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all flex items-center justify-center gap-2 group text-mono-xs"
            >
               <Home className="w-4 h-4" />
               ACCUEIL
            </Link>
            <Link 
               href="/product"
               className="w-full sm:w-auto px-10 py-5 rounded-full bg-brand text-black font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group shadow-xl text-mono-xs shadow-brand/20"
            >
               CONTINUER
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
