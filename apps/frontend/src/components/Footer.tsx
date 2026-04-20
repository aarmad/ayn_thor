import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-container pt-16 pb-8 border-t-[1.5px] border-black/10 text-dark font-mono">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between gap-12">
        <div className="flex flex-col max-w-[300px]">
          <Link href="/" className="group flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-black/10 group-hover:scale-110 transition-transform">
               <svg viewBox="0 0 100 100" className="w-5 h-5">
                  <path d="M25 35 L50 30 L75 35 L75 45 L50 40 L25 45 Z" fill="#ff8a00" />
                  <path d="M45 40 L55 40 L55 75 L45 75 Z" fill="white" />
                  <path d="M35 70 L50 67 L65 70 L65 75 L50 72 L35 75 Z" fill="#ff8a00" />
               </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase text-black">AYN THOR</span>
          </Link>
          <p className="text-black/60 text-xs font-bold leading-relaxed mb-6">
            CONÇU POUR L'ÉLITE DU GAMING MOBILE. DOUBLE ÉCRAN, PUISSANCE MAXIMALE, POSSIBILITÉS INFINIES.
          </p>
          <div className="flex gap-2">
            <div className="w-10 h-10 rounded-full border-[1.5px] border-black/20 flex items-center justify-center font-bold text-black/50 hover:bg-black hover:text-white transition-colors cursor-pointer text-xs">IG</div>
            <div className="w-10 h-10 rounded-full border-[1.5px] border-black/20 flex items-center justify-center font-bold text-black/50 hover:bg-black hover:text-white transition-colors cursor-pointer text-xs">X</div>
            <div className="w-10 h-10 rounded-full border-[1.5px] border-black/20 flex items-center justify-center font-bold text-black/50 hover:bg-black hover:text-white transition-colors cursor-pointer text-xs">YT</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full md:w-auto flex-1 md:ml-12">
          {/* Menu 1 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-sm mb-2">PRODUIT</h4>
            <Link href="/product" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">ACHETER</Link>
            <Link href="/nouveautes" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">NOUVEAUTÉS</Link>
            <Link href="/#features" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">CARACTÉRISTIQUES</Link>
          </div>

          {/* Menu 2 */}
          <div className="flex flex-col gap-4">
            <h4 className="text-black font-bold text-sm mb-2">ENTREPRISE</h4>
            <Link href="/info" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">À PROPOS</Link>
            <Link href="/info" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">CONTACT</Link>
            <Link href="/subscribe" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">S'ABONNER</Link>
          </div>

          {/* Menu 3 (Legal) */}
          <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
            <h4 className="text-black font-bold text-sm mb-2">LÉGAL</h4>
            <Link href="/legal/terms" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">CONDITIONS D'UTILISATION</Link>
            <Link href="/legal/privacy" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">POLITIQUE DE CONFIDENTIALITÉ</Link>
            <Link href="/legal/refund" className="text-black/60 hover:text-black font-semibold text-xs tracking-wider transition-colors">POLITIQUE DE REMBOURSEMENT</Link>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 mt-16 pt-6 border-t-[1.5px] border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-black/40 text-[0.6rem] font-bold tracking-widest">
          &copy; {new Date().getFullYear()} AYN TEC. TOUS DROITS RÉSERVÉS.
        </p>
        <p className="text-black/40 text-[0.6rem] font-bold tracking-widest text-center md:text-right">
          SITE NON OFFICIEL. DÉMO DE DÉVELOPPEMENT.
        </p>
      </div>
    </footer>
  );
}
