import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function InfoPage() {
  return (
    <div className="w-full min-h-screen bg-primary font-mono text-dark flex flex-col justify-between">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-6 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tight mb-8">À PROPOS D'AYN</h1>
        <p className="max-w-[800px] text-lg lg:text-xl font-bold text-black/70 leading-relaxed mb-12 uppercase">
          NOTRE MISSION EST DE REPOUSSER LES LIMITES DU GAMING PORTABLE. 
          AYN TEC CRÉE DES APPAREILS CONÇUS POUR L'ÉLITE QUI EXIGENT LES MEILLEURES PERFORMANCES ET L'INNOVATION.
          LE AYN THOR EST LE RÉSULTAT DE MILLIERS D'HEURES D'INGÉNIERIE ACHACHARNÉE.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12 text-left">
          <div className="bg-white border-[1.5px] border-black/10 p-8 rounded-3xl">
            <h3 className="text-xl font-black mb-4">INNOVATION</h3>
            <p className="text-mono-xs text-black/60 font-bold leading-relaxed">Nous ne suivons pas les tendances, nous les créons. Le double écran n'est qu'un début.</p>
          </div>
          <div className="bg-container border-[1.5px] border-black/10 p-8 rounded-3xl">
            <h3 className="text-xl font-black mb-4">PUISSANCE</h3>
            <p className="text-mono-xs text-black/60 font-bold leading-relaxed">Optimisation extrême du Snapdragon 8 Gen 2 pour éviter tout throttling de la batterie.</p>
          </div>
          <div className="bg-brand text-black p-8 rounded-3xl border border-black/10">
            <h3 className="text-xl font-black mb-4">COMMUNAUTÉ</h3>
            <p className="text-mono-xs font-bold leading-relaxed opacity-80">Plus qu'une marque, une communauté open-source qui participe activement à notre développement logiciel.</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
