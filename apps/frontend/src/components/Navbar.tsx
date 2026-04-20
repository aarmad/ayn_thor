import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="relative z-50 w-full pt-4 md:pt-6 px-4 md:px-6 flex justify-center bg-transparent">
      <nav className="flex flex-wrap md:flex-nowrap items-center gap-1.5 md:gap-3 bg-primary p-2 md:p-3 rounded-full shadow-sm max-w-fit mx-auto border border-black/5">
        <Link href="/" className="group relative w-10 h-10 md:w-12 md:h-12 bg-black rounded-full flex items-center justify-center shrink-0 overflow-hidden transition-all hover:scale-110 active:scale-95 shadow-lg shadow-black/20">
           {/* Animated Background Glow */}
           <div className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-20 transition-opacity blur-md"></div>
           
           {/* Stylized 'T' Hammer Logo */}
           <svg viewBox="0 0 100 100" className="w-6 h-6 md:w-7 md:h-7 relative z-10 transition-transform duration-500 group-hover:rotate-[15deg]">
              <path 
                d="M25 35 L50 30 L75 35 L75 45 L50 40 L25 45 Z" 
                fill="currentColor" 
                className="text-brand"
              />
              <path 
                d="M45 40 L55 40 L55 75 L45 75 Z" 
                fill="currentColor" 
                className="text-white"
              />
              <path 
                d="M35 70 L50 67 L65 70 L65 75 L50 72 L35 75 Z" 
                fill="currentColor" 
                className="text-brand"
              />
           </svg>

           {/* Outer Ring Border */}
           <div className="absolute inset-0 rounded-full border border-white/10 group-hover:border-brand/40 transition-colors"></div>
        </Link>
        <Link href="/info" className="px-4 py-2 text-mono-xs font-bold hover:opacity-60 transition-opacity hidden sm:block">INFO</Link>
        <Link href="/nouveautes" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-white bg-gradient-to-r from-black to-brand transition-all hover:scale-105 active:scale-95">NOUVEAUTÉS</Link>
        <Link href="/#features" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black bg-brand transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand/20">FONCTIONNALITÉS</Link>
        <Link href="/product" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black bg-gray-btn transition-all hover:scale-105 active:scale-95">ACHETER</Link>
        <Link href="/models" className="px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black border-[1.5px] border-dashed border-black/40 hover:bg-black/5 transition-colors hidden xl:block">DÉCOUVREZ TOUS NOS MODÈLES</Link>
        <Link href="/subscribe" className="px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-white bg-black transition-all hover:scale-105 active:scale-95 hidden lg:block border-[1.5px] border-black">S'ABONNER</Link>
      </nav>
    </header>
  );
}
