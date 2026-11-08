'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCartStore } from '@/store/useCartStore';

const links = [
  { href: '/info', label: 'Info' },
  { href: '/nouveautes', label: 'Nouveautés', highlight: true },
  { href: '/#features', label: 'Fonctionnalités' },
  { href: '/models', label: 'Modèles' },
  { href: '/product', label: 'Acheter' },
];

export default function Navbar() {
  const cart = useCartStore((s) => s.cart);
  // the cart is persisted in localStorage: only show the count after hydration
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const count = mounted ? cart.reduce((n, i) => n + i.quantity, 0) : 0;

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3.5 bg-void/80 backdrop-blur-md border-b border-white/10">
      <nav aria-label="Navigation principale" className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2.5 text-ink">
          <span className="font-display gbg w-10 h-10 rounded-full text-void grid place-items-center font-black text-base">T</span>
          <span className="font-display font-bold text-[15px] tracking-[0.02em]">AYN/THOR</span>
        </Link>

        <div className="flex flex-wrap gap-1.5 bg-panel border border-white/10 p-[5px] rounded-full">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`pill font-mono text-xs px-4 min-h-11 rounded-full flex items-center ${
                l.highlight ? 'gbg text-void font-bold' : 'text-ink'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex gap-2 items-center">
          <Link
            href="/subscribe"
            className="font-mono text-xs text-ink px-4 min-h-11 flex items-center rounded-full border-[1.5px] border-ink/50 hover:border-lime hover:text-lime"
          >
            S&apos;abonner
          </Link>
          <Link
            href="/cart"
            aria-label={`Panier, ${count} article(s)`}
            className="relative w-11 h-11 rounded-full bg-brand text-void grid place-items-center hover:bg-mint transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 7h12l-1 13H7L6 7z" />
              <path d="M9 7a3 3 0 0 1 6 0" />
            </svg>
            <span className="font-mono absolute -top-1 -right-1 min-w-5 h-5 px-1 rounded-full bg-mint text-void text-[11px] font-bold grid place-items-center">
              {count}
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
