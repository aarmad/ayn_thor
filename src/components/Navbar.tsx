import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="relative z-50 w-full pt-4 md:pt-6 px-4 md:px-6 flex justify-center bg-transparent">
      <nav className="flex flex-wrap md:flex-nowrap items-center gap-1.5 md:gap-3 bg-primary p-2 md:p-3 rounded-full shadow-sm max-w-fit mx-auto border border-black/5">
        <Link href="/" className="w-10 h-10 md:w-12 md:h-12 bg-[#121212] rounded-full flex items-center justify-center shrink-0">
           <div className="flex gap-0.5 relative transform rotate-45">
              <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-white rounded-full absolute top-[7px]"></div>
           </div>
        </Link>
        <Link href="/info" className="px-4 py-2 text-mono-xs font-bold hover:opacity-60 transition-opacity hidden sm:block">INFO</Link>
        <Link href="/nouveautes" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-white bg-gradient-to-r from-black to-brand transition-all hover:scale-105 active:scale-95">NOUVEAUTÉS</Link>
        <Link href="/#features" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black bg-brand transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand/20">FONCTIONNALITÉS</Link>
        <Link href="/product" className="px-4 md:px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black bg-gray-btn transition-all hover:scale-105 active:scale-95">ACHETER</Link>
        <Link href="/product" className="px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-black border-[1.5px] border-dashed border-black/40 hover:bg-black/5 transition-colors hidden xl:block">DÉCOUVREZ TOUS NOS MODÈLES</Link>
        <Link href="/subscribe" className="px-6 py-2 md:py-3 rounded-full text-mono-xs font-bold text-white bg-black transition-all hover:scale-105 active:scale-95 hidden lg:block border-[1.5px] border-black">S'ABONNER</Link>
      </nav>
    </header>
  );
}
