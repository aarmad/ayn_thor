'use client';

import Link from 'next/link';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Sparkle from '@/components/Sparkle';

const columns = [
  { title: '[01] PRODUIT', links: [['/product', 'Acheter'], ['/nouveautes', 'Nouveautés'], ['/#features', 'Caractéristiques']] },
  { title: '[02] ENTREPRISE', links: [['/info', 'À propos'], ['/info', 'Contact'], ['/subscribe', "S'abonner"]] },
  { title: '[03] LÉGAL', links: [['/legal/terms', "Conditions d'utilisation"], ['/legal/privacy', 'Confidentialité'], ['/legal/refund', 'Remboursement']] },
];

function Bars({ n, w }: { n: number; w: number }) {
  return (
    <span className="bars" style={{ gap: 6 }}>
      {Array.from({ length: n }).map((_, i) => (
        <span key={i} className="bar" style={{ width: w }} />
      ))}
    </span>
  );
}

export default function Footer() {
  const [email, setEmail] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Inscription enregistrée');
    setEmail('');
  };

  return (
    <footer id="footer" className="gr relative bg-void text-ink pt-20 pb-7 px-6 overflow-hidden border-t border-white/10">
      <div
        aria-hidden="true"
        className="absolute -right-40 -top-50 w-[600px] h-[600px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(31,43,255,.5), rgba(127,240,216,.12) 45%, transparent 70%)' }}
      />
      <svg viewBox="0 0 1200 700" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none">
        <g fill="none" stroke="#EEF0F4" strokeWidth="1.2">
          <path d="M0 400 C150 350 260 460 420 420 S700 320 860 390 S1080 470 1200 420" />
          <path d="M0 440 C150 390 260 500 420 460 S700 360 860 430 S1080 510 1200 460" />
          <path d="M0 480 C160 430 270 540 430 500 S710 400 870 470 S1090 550 1200 500" />
          <path d="M0 520 C160 470 280 580 440 540 S720 440 880 510 S1100 590 1200 540" />
          <path d="M0 560 C170 510 290 620 450 580 S730 480 890 550 S1100 630 1200 580" />
          <path d="M0 600 C170 550 300 660 460 620 S740 520 900 590 S1110 670 1200 620" />
          <path d="M0 640 C180 590 310 700 470 660 S750 560 910 630 S1120 710 1200 660" />
        </g>
      </svg>

      <div className="relative max-w-[1280px] mx-auto">
        {/* Newsletter */}
        <div className="grid gap-10 items-end mb-16 grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))]">
          <div>
            <span className="font-mono inline-block text-xs text-muted mb-[18px]">[ 07 // TRANSMISSION ]</span>
            <h2 className="font-display m-0 mb-4 text-[clamp(36px,5vw,68px)] font-black leading-none tracking-[-0.03em]">
              Rejoins<br />le <span className="grad">réseau.</span>
            </h2>
            <p className="m-0 max-w-[420px] text-base leading-[1.55] text-body">
              Sorties, mises à jour firmware et drops en avant-première. Pas de spam, promis.
            </p>
          </div>
          <div className="bg-panel border-[1.5px] border-white/15 rounded-[28px] p-[22px] shadow-[8px_8px_0_#4FA8FF]">
            <div className="font-mono flex justify-between text-[11px] text-muted mb-3.5">
              <span>&gt; subscribe --newsletter</span>
              <span className="text-lime">● READY</span>
            </div>
            <form onSubmit={onSubmit} className="flex flex-wrap gap-2">
              <label htmlFor="nl" className="font-mono w-full text-xs text-ink">Adresse e-mail</label>
              <input
                id="nl"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ton@email.fr"
                className="flex-[1_1_200px] min-w-0 min-h-[52px] border-[1.5px] border-ink/30 rounded-full bg-void px-5 text-[15px] text-ink"
              />
              <button type="submit" className="font-mono gbg cta min-h-[52px] px-6 rounded-full text-void text-[13px] font-bold cursor-pointer">
                S&apos;abonner →
              </button>
            </form>
          </div>
        </div>

        {/* Columns */}
        <div className="grid gap-8 py-8 border-y border-white/12 grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))]">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center gap-3">
              <span className="font-display gbg w-11 h-11 rounded-full text-void grid place-items-center font-black">T</span>
              <span className="font-display font-bold text-lg">AYN/THOR</span>
            </div>
            <p className="m-0 text-sm leading-normal text-body max-w-[260px]">
              Conçu pour l&apos;élite du gaming mobile : double écran, puissance maximale, possibilités infinies.
            </p>
          </div>
          {columns.map((c) => (
            <div key={c.title} className="font-mono flex flex-col items-start gap-3 text-[13px]">
              <span className="text-lime text-[11px]">{c.title}</span>
              {c.links.map(([href, label]) => (
                <Link key={label} className="flink" href={href}>{label}</Link>
              ))}
            </div>
          ))}
        </div>

        <div aria-hidden="true" className="flex items-center gap-2.5 mt-12">
          <span className="w-[1.5px] h-4 bg-ink" /><span className="flex-1 h-[1.5px] bg-ink/45" />
          <span className="font-mono text-[11px] tracking-[0.3em] text-muted">END_OF_TRANSMISSION</span>
          <span className="flex-1 h-[1.5px] bg-ink/45" /><span className="w-[1.5px] h-4 bg-ink" />
        </div>

        {/* Wordmark */}
        <div aria-hidden="true" className="relative flex flex-col items-center mt-8">
          <Sparkle className="absolute left-[3%] top-[8%] w-[30px] h-[30px]" />
          <Sparkle className="absolute right-[8%] top-0 w-5 h-5" fill="#E9FF4A" />
          <Sparkle className="absolute right-[1%] top-[40%] w-[34px] h-[34px]" />
          <div className="flex items-center gap-[clamp(10px,2vw,22px)] text-[clamp(22px,3.6vw,48px)] leading-none mb-3.5">
            <Bars n={3} w={11} />
            <span className="font-display font-bold tracking-[0.4em] -mr-[0.4em] text-ink">AYN</span>
            <Bars n={3} w={11} />
          </div>
          <div className="font-display relative font-black text-[clamp(96px,24vw,330px)] leading-[0.86] tracking-[-0.035em]">
            <span className="absolute left-0 top-0 text-deep" style={{ transform: 'translate(0.04em, 0.045em)' }}>THOR</span>
            <span className="absolute left-0 top-0 text-void" style={{ transform: 'translate(0.02em, 0.022em)' }}>THOR</span>
            <span className="grad relative">THOR</span>
            <span className="scan absolute inset-0 pointer-events-none" />
          </div>
          <div
            className="font-display font-black text-[clamp(96px,24vw,330px)] leading-[0.86] tracking-[-0.035em] h-[0.32em] overflow-hidden opacity-30"
            style={{ transform: 'scaleY(-1)', maskImage: 'linear-gradient(to top, #000, transparent)', WebkitMaskImage: 'linear-gradient(to top, #000, transparent)' }}
          >
            <span className="grad">THOR</span>
          </div>
        </div>

        <div className="font-mono flex flex-wrap justify-between items-center gap-3 text-[11px] mt-7 text-muted">
          <span>© {new Date().getFullYear()} AYN TEC. TOUS DROITS RÉSERVÉS.</span>
          <span className="flex gap-2">
            {['IG', 'X', 'YT'].map((s) => (
              <span key={s} className="w-11 h-11 rounded-full border-[1.5px] border-ink/30 grid place-items-center text-ink font-bold">{s}</span>
            ))}
          </span>
          <span>SITE NON OFFICIEL — DÉMO DE DÉVELOPPEMENT.</span>
        </div>
      </div>
    </footer>
  );
}
