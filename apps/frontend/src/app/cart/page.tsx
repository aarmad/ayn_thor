'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useCartStore } from '@/store/useCartStore';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = async () => {
    if (cart.length === 0) return;
    setIsCheckingOut(true);

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
      const response = await fetch(`${apiUrl}/checkout`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: cart }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        toast.error(data.message || 'Le paiement a échoué. Veuillez vérifier la configuration.');
        setIsCheckingOut(false);
      }
    } catch (error) {
       console.error("Checkout Error:", error);
       toast.error('Une erreur est survenue lors du paiement');
       setIsCheckingOut(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center bg-panel-2 font-mono text-ink overflow-x-hidden">
      <Navbar />

      <main className="w-full max-w-[1400px] flex-1 flex flex-col lg:flex-row gap-8 px-6 md:px-12 py-12">
        {/* Cart Items - Left */}
        <div className="flex-1 bg-surface md:rounded-[32px] p-8 md:p-12 shadow-[10px_10px_0_#1F2BFF] border border-ink/10">
          
          <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight text-ink mb-12">
            PANIER
          </h1>

          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-ink/50">
              <ShoppingBag className="w-16 h-16 mb-4 opacity-50" />
              <p className="text-mono-sm mb-6 font-bold">VOTRE PANIER EST VIDE</p>
              <Link 
                href="/product" 
                className="px-8 py-4 rounded-full bg-brand text-void font-bold uppercase tracking-wide hover:scale-105 active:scale-95 transition-all text-mono-xs shadow-md shadow-brand/20"
              >
                CONTINUER VOS ACHATS
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 bg-panel/50 rounded-3xl p-6 border border-ink/10 hover:border-ink/20 transition-colors">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-panel rounded-2xl flex-shrink-0 flex items-center justify-center overflow-hidden p-2">
                     <img src={item.image} alt={item.name} className="w-full h-full object-contain filter drop-shadow-md" draggable={false} />
                  </div>
                  
                  <div className="flex-1 w-full text-center md:text-left">
                    <h3 className="text-lg lg:text-xl font-bold uppercase tracking-tight mb-2 text-ink">{item.name}</h3>
                    <p className="text-ink/60 font-bold mb-4 font-sans">${item.price}</p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-4">
                      <div className="flex items-center bg-panel border border-ink/14 rounded-full h-10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-ink/5 rounded-l-full transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-sm font-bold font-sans">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-ink/5 rounded-r-full transition-colors"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto mt-4 md:mt-0 gap-4">
                    <p className="font-bold text-xl font-sans text-ink">${(item.price * item.quantity).toFixed(2)}</p>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-full text-ink hover:bg-mint hover:text-void transition-colors bg-panel shadow-sm border-[1.5px] border-ink/14 hover:border-ink/50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary - Right */}
        <div className="w-full lg:w-[400px] flex flex-col gap-6">
          <div className="bg-surface md:rounded-[32px] p-10 shadow-[10px_10px_0_#1F2BFF] border border-ink/10 h-fit sticky top-12">
            <h2 className="text-2xl font-black uppercase tracking-tight mb-12 text-ink">
              RÉCAPITULATIF
            </h2>
            
            <div className="flex flex-col gap-6 mb-12 text-mono-sm text-ink">
              <div className="flex justify-between items-center border-b border-ink/14 pb-4">
                <span className="opacity-60">SOUS-TOTAL</span>
                <span className="font-bold font-sans">${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center border-b border-ink/14 pb-4">
                <span className="opacity-60">LIVRAISON</span>
                <span className="font-bold text-brand">GRATUITE</span>
              </div>
            </div>
            
            <div className="border-t-[1.5px] border-ink/50 pt-6 mb-12 flex justify-between items-center text-xl font-black">
              <span>TOTAL</span>
              <span className="text-3xl font-sans">${getCartTotal().toFixed(2)}</span>
            </div>

            <button 
              onClick={handleCheckout}
              disabled={cart.length === 0 || isCheckingOut}
              className="w-full py-5 rounded-full bg-brand text-void font-bold uppercase tracking-wider text-mono-xs hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-4 disabled:opacity-50 disabled:pointer-events-none group shadow-lg shadow-brand/20"
            >
              {isCheckingOut ? (
                <span className="animate-pulse">TRAITEMENT...</span>
              ) : (
                 <>
                   PASSER LA COMMANDE <CreditCard className="w-5 h-5 group-hover:scale-110 transition-transform" />
                 </>
              )}
            </button>

            <p className="text-ink/30 text-[10px] text-center mt-6 font-bold tracking-widest uppercase">PAIEMENT SÉCURISÉ VIA STRIPE™</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
