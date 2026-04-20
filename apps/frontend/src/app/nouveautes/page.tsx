import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function NouveautesPage() {
  return (
    <div className="w-full min-h-screen bg-primary font-mono text-dark flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-4">NOUVEAUTÉS</h1>
          <p className="text-lg font-bold text-black/50 uppercase">DERNIÈRES MISES À JOUR ET ANNONCES SOFTWARE TCC.</p>
        </div>

        <div className="flex flex-col gap-8 max-w-[800px] mx-auto">
          {[
            { date: "12 MARS 2026", title: "TCC OS V2.4 - GESTION ÉNERGÉTIQUE", text: "Nous avons optimisé l'interface du centre de contrôle pour réduire la latence sur le transfert de l'AMOLED inférieur. Mode économie d'énergie prolongé ajouté." },
            { date: "02 FÉV 2026", title: "NOUVEAUX COLORIS PRO ET MAX", text: "Les précommandes de la nouvelle série Titanium sont officiellement ouvertes pour le batch 5 sur toutes les versions PRO et MAX." },
            { date: "15 JAN 2026", title: "UPDATE MAPPING ECRAN", text: "Mise à jour majeure pour le mapping des commandes tactiles sur l'écran inférieur vers l'écran principal. La communauté l'a demandé, nous l'avons fait." }
          ].map((news, idx) => (
            <article key={idx} className="bg-white border-[1.5px] border-black/10 p-8 rounded-3xl hover:border-brand transition-colors cursor-pointer group">
              <span className="inline-block bg-black/5 text-black/60 font-bold px-3 py-1 rounded-md text-mono-xs mb-4 border border-black/10">{news.date}</span>
              <h2 className="text-2xl font-black uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">{news.title}</h2>
              <p className="text-mono-sm font-bold text-black/70 leading-relaxed uppercase">{news.text}</p>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
