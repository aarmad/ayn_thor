import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SubscribePage() {
  return (
    <div className="w-full min-h-screen bg-primary font-mono text-dark flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-24 flex items-center justify-center">
        <div className="bg-container border-[1.5px] border-black/10 rounded-[3rem] p-12 lg:p-24 shadow-2xl relative overflow-hidden text-center max-w-[800px] w-full">
           <div className="absolute -right-20 -top-20 bg-brand/10 w-64 h-64 rounded-full blur-[80px]"></div>
           <div className="absolute -left-20 -bottom-20 bg-black/5 w-64 h-64 rounded-full blur-[80px]"></div>
           
           <h1 className="text-4xl lg:text-6xl font-black uppercase tracking-tight mb-6">RESTONS <br/>CONNECTÉS</h1>
           <p className="text-mono-sm font-bold text-black/50 uppercase max-w-[500px] mx-auto mb-12">
              ABONNEZ-VOUS À NOTRE NEWSLETTER POUR RECEVOIR EN AVANT-PREMIÈRE LES MISES À JOUR DU BATCH 5, ET LES OFFRES D'ACCESSOIRES.
           </p>

           <form className="flex flex-col sm:flex-row gap-4 w-full max-w-[600px] mx-auto">
              <input type="email" placeholder="ENTREZ VOTRE EMAIL" className="flex-1 bg-white border-[1.5px] border-black/10 px-6 py-4 rounded-full text-mono-xs font-bold outline-none focus:border-brand transition-colors text-black" />
              <button className="bg-brand text-black font-black uppercase px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all text-mono-xs shadow-md">S'ABONNER</button>
           </form>
           <p className="text-[0.6rem] font-bold text-black/30 mt-6 tracking-widest uppercase">EN VOUS INSCRIVANT, VOUS ACCEPTEZ NOS CONDITIONS.</p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
