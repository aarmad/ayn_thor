import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SubscribePage() {
  return (
    <div className="w-full min-h-screen bg-panel-2 font-mono text-ink flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-24 flex items-center justify-center">
        <div className="bg-surface border-[1.5px] border-ink/14 rounded-[32px] p-12 lg:p-24 shadow-[10px_10px_0_#1F2BFF] relative overflow-hidden text-center max-w-[800px] w-full">
           <div className="absolute -right-20 -top-20 bg-brand/10 w-64 h-64 rounded-full blur-[80px]"></div>
           <div className="absolute -left-20 -bottom-20 bg-ink/5 w-64 h-64 rounded-full blur-[80px]"></div>
           
           <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">RESTONS <br/>CONNECTÉS</h1>
           <p className="text-mono-sm font-bold text-ink/50 uppercase max-w-[500px] mx-auto mb-12">
              ABONNEZ-VOUS À NOTRE NEWSLETTER POUR RECEVOIR EN AVANT-PREMIÈRE LES MISES À JOUR DU BATCH 5, ET LES OFFRES D'ACCESSOIRES.
           </p>

           <form className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px] mx-auto">
              <input type="email" placeholder="ENTREZ VOTRE EMAIL" className="flex-1 bg-panel border-[1.5px] border-ink/14 px-6 py-4 rounded-full text-mono-xs font-bold outline-none focus:border-brand transition-colors text-ink" />
              <button className="bg-brand text-void font-black uppercase px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all text-mono-xs shadow-md">S'ABONNER</button>
           </form>
           <p className="text-[0.6rem] font-bold text-ink/30 mt-6 tracking-widest uppercase">EN VOUS INSCRIVANT, VOUS ACCEPTEZ NOS CONDITIONS.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
