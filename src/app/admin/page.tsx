'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Package, Users, Settings, Search, CheckCircle, Clock, ArrowLeft } from 'lucide-react';

// Mock data for admin page
const RECENT_ORDERS = [
  { id: '#ORD-7023', product: 'AYN Thor Base', amount: 349, status: 'Complétée', date: 'Aujourd\'hui' },
  { id: '#ORD-7022', product: 'AYN Thor Pro', amount: 449, status: 'En cours', date: 'Hier' },
  { id: '#ORD-7021', product: 'AYN Thor Base', amount: 349, status: 'Complétée', date: '11 Mar' }
];

export default function AdminDashboard() {
  return (
    <div className="w-full flex justify-center text-dark font-mono bg-primary">
      <div className="w-full min-h-[calc(100dvh-1rem)] md:min-h-[calc(100dvh-4rem)] bg-container md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row relative">
        
        {/* Navigation Overlay Container */}
        <div className="absolute top-6 left-6 md:top-10 md:left-10 z-30 flex items-center gap-4">
           <Link href="/" className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-black/10 hover:bg-black hover:text-white transition-colors shadow-sm">
              <ArrowLeft className="w-5 h-5" />
           </Link>
        </div>

        {/* Sidebar - Left */}
        <div className="w-full lg:w-[30%] xl:w-[25%] bg-primary/30 p-8 pt-24 lg:pt-32 lg:p-12 flex flex-col border-b lg:border-b-0 lg:border-r-[1.5px] border-dashed border-black/20">
          <Link href="/" className="text-3xl font-black tracking-tighter uppercase mb-12 block flex items-center gap-2 text-black">
            A.T. <span className="text-mono-xs text-brand border border-brand/20 bg-brand/10 px-2 py-0.5 rounded-full ml-2">/ADMIN</span>
          </Link>
          
          <nav className="flex flex-col gap-3 flex-1">
            <a href="#" className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-mono-xs shadow-md">
              <Package className="w-4 h-4 opacity-70" /> PRODUITS
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-black/5 px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-mono-xs transition-colors border border-transparent hover:border-black/10">
              <Users className="w-4 h-4 opacity-40" /> CLIENTS
            </a>
            <a href="#" className="flex items-center gap-4 hover:bg-black/5 px-6 py-4 rounded-xl font-bold uppercase tracking-wider text-mono-xs transition-colors border border-transparent hover:border-black/10">
              <Settings className="w-4 h-4 opacity-40" /> PARAMÈTRES
            </a>
          </nav>
          
          <div className="mt-12 pt-8 border-t-[1.5px] border-black/10 flex items-center gap-4">
             <div className="w-12 h-12 bg-black/10 rounded-full flex items-center justify-center font-bold text-black border-[1.5px] border-black/20">AD</div>
             <div>
                <p className="font-bold uppercase text-mono-xs">ACCÈS ADMIN</p>
                <p className="text-[0.65rem] text-black/50 tracking-widest">admin@ayntec.com</p>
             </div>
          </div>
        </div>

        {/* Main Content - Right */}
        <div className="flex-1 bg-white/50 p-6 md:p-10 lg:p-16 flex flex-col min-h-[600px] overflow-hidden overflow-y-auto noscrollbar">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 lg:mt-16">
             <h1 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-black">VUE D'ENSEMBLE</h1>
             <div className="flex items-center bg-white border-[1.5px] border-black/10 px-4 py-3 rounded-full w-full md:min-w-[300px] md:w-auto focus-within:border-brand transition-colors">
                <Search className="w-4 h-4 text-black/40 mr-3" />
                <input type="text" placeholder="RECHERCHER DES COMMANDES..." className="bg-transparent border-none outline-none w-full text-mono-xs font-bold font-mono placeholder:text-black/30" />
             </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
             {[
               { label: 'VENTES TOTALES', value: '$8,450', trend: '+12%' },
               { label: 'COMMANDES', value: '42', trend: '+5%' },
               { label: 'STOCK', value: '1,204', trend: 'SAIN' },
             ].map((stat, i) => (
               <div key={i} className="bg-white border-[1.5px] border-black/10 p-6 rounded-[1.5rem] flex flex-col relative overflow-hidden group hover:border-black/30 transition-colors cursor-default">
                  <div className="absolute -right-6 -top-6 w-24 h-24 bg-brand/5 rounded-full group-hover:scale-150 transition-transform"></div>
                  <p className="text-black/50 text-mono-xs font-bold uppercase tracking-wider mb-4 relative z-10">{stat.label}</p>
                  <div className="flex items-end justify-between relative z-10 mt-auto">
                     <p className="text-3xl font-black font-sans">{stat.value}</p>
                     <p className="text-mono-xs font-bold text-green-600 bg-green-100/50 px-2 py-1 rounded-md border border-green-200">{stat.trend}</p>
                  </div>
               </div>
             ))}
          </div>

          {/* Recent Orders List */}
          <div className="flex flex-col flex-1">
             <div className="flex items-center justify-between mb-8 pb-4 border-b-[1.5px] border-black/10">
                <h2 className="text-lg font-black uppercase tracking-wide text-black/80">COMMANDES RÉCENTES</h2>
                <button className="text-mono-xs font-bold uppercase tracking-wider text-brand hover:opacity-50 transition-opacity">VOIR TOUT</button>
             </div>
             
             <div className="flex flex-col gap-4">
                {RECENT_ORDERS.map((order, i) => (
                   <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between bg-white border-[1.5px] border-black/5 hover:border-black/20 transition-colors p-5 px-6 rounded-2xl group cursor-pointer shadow-sm gap-4">
                      <div className="flex items-center gap-6">
                         <div className="font-mono text-mono-xs font-bold text-black/60 bg-primary px-3 py-1.5 rounded-md border border-black/10">
                            {order.id}
                         </div>
                         <div>
                            <p className="font-bold text-mono-sm mb-1">{order.product}</p>
                            <p className="text-mono-xs text-black/40 font-medium">{order.date}</p>
                         </div>
                      </div>
                      
                      <div className="flex items-center justify-between sm:justify-end gap-8 w-full sm:w-auto">
                         <p className="font-black text-lg font-sans">${order.amount}</p>
                         <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-mono-xs font-bold border ${
                           order.status === 'Complétée' ? 'bg-green-50 text-green-700 border-green-200' : 'bg-orange-50 text-orange-700 border-orange-200'
                         }`}>
                            {order.status === 'Complétée' ? <CheckCircle className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                            {order.status === 'Complétée' ? 'COMPLÉTÉE' : 'EN COURS'}
                         </div>
                      </div>
                   </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
