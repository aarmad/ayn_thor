'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCartStore } from '@/store/useCartStore';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sparkle from '@/components/Sparkle';

const GRAD = 'linear-gradient(100deg,#4FA8FF 0%,#7FF0D8 40%,#E9FF4A 100%)';

// image sent to Stripe must be an absolute URL
const CART_IMAGE =
  'https://www.ayntec.com/cdn/shop/files/4fe40f089696834c4906303a743d01c5_d891fc5b-3473-449a-85c1-56663e291fcf_1200x1200.jpg';

const VARIANTS = [
  { id: 'lite', name: 'Lite', soc: 'Snapdragon 865', col: 0, price: 249 },
  { id: 'base', name: 'Base', soc: 'Snapdragon 8 Gen 2', col: 1, price: 349 },
  { id: 'pro', name: 'Pro', soc: 'Snapdragon 8 Gen 2', col: 1, price: 449 },
  { id: 'max', name: 'Max', soc: '8 Gen 2 (OC)', col: 2, price: 749 },
] as const;

const SPEC_COLS = ['THOR LITE', 'THOR BASE / PRO', 'THOR MAX'];
const SPEC_ROWS: [string, string[]][] = [
  ['PROCESSEUR', ['SD865', 'SD 8 Gen 2', 'SD 8 Gen 2 (OC)']],
  ['RAM', ['8 Go LPDDR5', '8 Go / 12 Go', '16 Go LPDDR5X']],
  ['STOCKAGE', ['128 Go UFS 3.1', '128 Go / 256 Go', '1 To UFS 4.0']],
  ['ÉCRAN', ['AMOLED + IPS', 'Double AMOLED', 'Double AMOLED 120 Hz']],
];

const eur = (n: number) => n.toFixed(2).replace('.', ',') + ' €';

function Bars() {
  return (
    <span className="bars">
      <span className="bar" /><span className="bar" /><span className="bar" /><span className="bar" />
    </span>
  );
}

function Tag({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span className="font-mono inline-block text-void font-bold text-xs px-2.5 py-1.5 mb-[18px]" style={{ background: color }}>
      {children}
    </span>
  );
}

export default function ProductPage() {
  const [variantId, setVariantId] = useState<(typeof VARIANTS)[number]['id']>('base');
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const addToCart = useCartStore((s) => s.addToCart);

  const cur = VARIANTS.find((v) => v.id === variantId)!;
  const pick = (id: typeof variantId) => { setVariantId(id); setAdded(false); };

  const add = () => {
    addToCart({
      id: `pw_ayn_thor_${cur.id}`,
      name: `AYN THOR ${cur.name.toUpperCase()}`,
      price: cur.price,
      quantity: qty,
      image: CART_IMAGE,
    });
    setAdded(true);
    toast.success(`Thor ${cur.name} ajoutée au panier`);
  };

  return (
    <>
      <Navbar />

      {/* ================= HERO ================= */}
      <section id="top" className="gr px-6 pt-10 pb-[72px] border-b border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="relative bg-surface border-[1.5px] border-ink/20 rounded-[32px] p-[clamp(22px,4vw,48px)] mb-12 overflow-hidden shadow-[10px_10px_0_#1F2BFF]">
            <svg viewBox="0 0 1200 600" preserveAspectRatio="none" aria-hidden="true" className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              <g fill="none" stroke="#EEF0F4" strokeWidth="1.2">
                <path d="M420 0 C380 80 520 120 470 200 S360 320 450 400 S560 520 480 600" />
                <path d="M460 0 C420 80 560 130 510 210 S400 330 490 410 S600 520 520 600" />
                <path d="M500 0 C470 90 600 140 560 220 S450 340 530 420 S640 520 570 600" />
                <path d="M545 0 C520 100 650 150 610 230 S500 350 580 430 S680 520 620 600" />
                <path d="M590 0 C570 110 700 160 660 240 S560 360 630 440 S720 520 670 600" />
                <path d="M640 0 C620 120 745 170 710 250 S620 370 680 450 S765 520 720 600" />
                <path d="M690 0 C675 125 790 180 760 260 S680 380 730 460 S810 520 770 600" />
                <path d="M740 0 C730 130 835 190 810 270 S740 390 780 470 S855 520 820 600" />
              </g>
            </svg>

            <div className="relative flex flex-wrap justify-between items-start gap-5">
              <div aria-hidden="true">
                <div className="barcode w-[150px] h-[46px]" />
                <div className="font-mono text-xs tracking-[0.18em] mt-1.5 text-ink">7 88 9 8 0001</div>
                <div className="font-mono text-xs tracking-[0.18em] opacity-40 text-ink" style={{ transform: 'scaleY(-1)' }}>7 88 9 8 0001</div>
              </div>
              <div className="font-mono text-xs text-muted text-center pt-1.5">
                [ FICHE_PRODUIT // 001 ]<br />CONSOLE PORTABLE · ANDROID
              </div>
              <div className="border-[1.5px] border-ink rounded-xl overflow-hidden w-[116px]">
                <div className="h-[74px] grid place-items-center">
                  <svg width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#EEF0F4" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="5" y="2.5" width="14" height="9" rx="1.5" /><rect x="3" y="13" width="18" height="8.5" rx="2" />
                    <rect x="9" y="14.8" width="6" height="4.6" rx="0.6" /><circle cx="6" cy="17" r="1" /><circle cx="18" cy="17" r="1" />
                  </svg>
                </div>
                <div className="gbg font-mono text-void font-bold text-sm tracking-[0.2em] text-center py-1.5 border-t-[1.5px] border-ink">DUAL</div>
              </div>
            </div>

            <div aria-hidden="true" className="relative flex items-center gap-2.5 mt-[26px] mb-5">
              <span className="w-[1.5px] h-4 bg-ink" /><span className="flex-1 h-[1.5px] bg-ink/50" />
              <Sparkle className="w-[22px] h-[22px]" fill="#E9FF4A" />
              <span className="flex-1 h-[1.5px] bg-ink/50" /><span className="w-[1.5px] h-4 bg-ink" />
            </div>

            <h1 aria-label="AYN Thor" className="font-display relative m-0 flex flex-col items-center font-black text-center">
              <span aria-hidden="true" className="flex items-center justify-center gap-[clamp(12px,2vw,24px)] text-[clamp(36px,6.4vw,88px)] leading-none">
                <Bars />
                <span className="font-bold tracking-[0.32em] -mr-[0.32em] text-ink">AYN</span>
                <Bars />
              </span>
              <span aria-hidden="true" className="relative inline-block text-[clamp(88px,19vw,264px)] leading-[0.9] tracking-[-0.03em] mt-2.5">
                <span className="absolute left-0 top-0 text-deep" style={{ transform: 'translate(0.045em, 0.05em)' }}>THOR</span>
                <span className="absolute left-0 top-0 text-void" style={{ transform: 'translate(0.022em, 0.025em)' }}>THOR</span>
                <span className="grad relative">THOR</span>
                <span className="grad absolute left-0 top-0" style={{ transform: 'translateX(-0.06em)', clipPath: 'inset(46% 0 40% 0)', filter: 'hue-rotate(40deg) saturate(1.3)' }}>THOR</span>
                <span className="scan absolute inset-0 pointer-events-none" />
              </span>
            </h1>

            <Sparkle className="absolute left-[8%] top-[52%] w-[26px] h-[26px]" />
            <Sparkle className="absolute right-[10%] top-[42%] w-[34px] h-[34px]" />
            <Sparkle className="absolute right-[5%] bottom-[24%] w-[18px] h-[18px]" fill="#E9FF4A" />

            <div className="relative flex flex-wrap justify-between items-end gap-4 mt-6">
              <p className="font-mono m-0 max-w-[340px] text-xs leading-[1.7] text-muted">
                Double écran AMOLED · 120 Hz · Hall Effect · Snapdragon 8 Gen 2 · 6000 mAh · refroidissement actif.
              </p>
              <div className="text-right">
                <div className="font-mono text-xs tracking-[0.3em] text-ink">ÉDITION 2026.</div>
                <div className="font-mono inline-block mt-2 border-[1.5px] border-ink rounded-lg px-3 py-1.5 text-[13px] font-bold tracking-[0.2em] text-ink">
                  HANDHELD<br /><span className="inline-block opacity-50" style={{ transform: 'scaleY(-1)' }}>HANDHELD</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-10 items-start grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))]">
            {/* collage */}
            <div className="relative aspect-[1/1.02] min-h-[360px]">
              <div className="gbg absolute left-[4%] top-[8%] w-[74%] h-[84%]" />
              <div className="ht absolute right-0 top-0 w-[42%] h-[46%] opacity-90" />
              <svg viewBox="0 0 400 400" aria-hidden="true" className="absolute inset-0 w-full h-full pointer-events-none">
                <ellipse cx="210" cy="230" rx="196" ry="74" fill="none" stroke="#EEF0F4" strokeWidth="1" transform="rotate(-18 210 230)" />
                <ellipse cx="210" cy="230" rx="150" ry="150" fill="none" stroke="#E9FF4A" strokeWidth="1" strokeDasharray="3 6" />
                <line x1="0" y1="62" x2="400" y2="62" stroke="rgba(238,240,244,.4)" strokeWidth="1" />
                <line x1="356" y1="0" x2="356" y2="400" stroke="rgba(238,240,244,.4)" strokeWidth="1" />
              </svg>
              <div className="absolute left-[12%] top-[16%] w-[80%] bg-ink p-2.5 pb-[34px] shadow-[8px_8px_0_#0B0C10,12px_12px_0_#7FF0D8]" style={{ transform: 'rotate(-3deg)' }}>
                <img src="/thor_duo.jpg" alt="Deux consoles AYN Thor ouvertes, double écran visible" className="block w-full aspect-[891/696] object-cover" />
                <span className="font-mono absolute left-3 bottom-[9px] text-[11px] text-[#4A4E5A]">IMG_THOR_DUAL.RAW — 2 UNITÉS</span>
              </div>
              <div className="absolute left-0 bottom-[4%] w-[22%] aspect-square rounded-full bg-void border-[1.5px] border-brand" />
              <div className="absolute right-[6%] top-[4%] w-[18%] aspect-square rounded-full bg-mint grid place-items-center">
                <Sparkle className="w-[62%] h-[62%]" fill="#0B0C10" />
              </div>
              <div className="font-mono absolute right-[2%] bottom-[10%] bg-void border border-white/20 text-ink text-[11px] leading-[1.6] px-3 py-2.5 max-w-[220px]">
                &gt; dual_screen.init() <span className="text-lime">OK</span><br />
                &gt; hall_sensor[2] :: no drift<br />
                &gt; cooling.mode = <span className="text-mint">TURBO</span>
              </div>
              <span className="font-mono absolute left-[6%] top-[3%] bg-lime text-void text-xs font-bold px-2.5 py-1.5" style={{ transform: 'rotate(-4deg)' }}>● EN STOCK</span>
              <span aria-hidden="true" className="absolute left-[2%] top-[46%] text-ink text-lg">✦</span>
              <span aria-hidden="true" className="absolute right-[30%] bottom-[2%] text-lime text-2xl">✦</span>
            </div>

            {/* purchase module */}
            <div id="acheter" className="bg-panel border-[1.5px] border-white/15 rounded-[32px] p-7 flex flex-col gap-6 shadow-[10px_10px_0_#7FF0D8]">
              <div className="flex flex-wrap justify-between gap-3 items-center">
                <span className="font-mono text-xs bg-panel-2 rounded-full px-3.5 py-2">Console 6&quot; · Android</span>
                <span className="flex items-center gap-2">
                  <span aria-hidden="true" className="text-lime tracking-[2px]">★★★★★</span>
                  <span className="font-mono text-xs text-muted">127 avis clients</span>
                </span>
              </div>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div>
                  <div className="font-mono text-xs text-muted mb-1.5">Modèle sélectionné</div>
                  <div className="font-display text-[30px] font-bold">Thor {cur.name}</div>
                </div>
                <div className="font-display grad text-5xl font-black leading-[1.05]">{cur.price}€</div>
              </div>
              <p className="m-0 text-base leading-[1.55] text-body">
                Console portable Android à double écran, propulsée par un SoC Snapdragon. Écran supérieur AMOLED 1080p à 120 Hz, écran inférieur tactile AMOLED de 3,92 pouces.
              </p>

              <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(110px,1fr))]">
                {[['Rafraîch.', '120', ' Hz'], ['Couleurs', '100', ' % P3'], ['Batterie', '6000', ' mAh']].map(([l, v, u]) => (
                  <div key={l} className="bg-panel-2 rounded-[18px] p-3.5">
                    <div className="font-mono text-[11px] text-muted">{l}</div>
                    <div className="font-display text-[22px] font-bold">{v}<span className="text-[13px]">{u}</span></div>
                  </div>
                ))}
                <div className="gbg text-void rounded-[18px] p-3.5">
                  <div className="font-mono text-[11px] font-semibold">Puce</div>
                  <div className="font-display text-[15px] font-bold leading-[1.3]">{cur.soc}</div>
                </div>
              </div>

              <fieldset className="border-none m-0 p-0">
                <legend className="font-mono text-xs text-muted mb-2.5 p-0">Modèle de performance</legend>
                <div className="grid gap-2 grid-cols-[repeat(auto-fit,minmax(120px,1fr))]">
                  {VARIANTS.map((v) => {
                    const on = v.id === cur.id;
                    return (
                      <button
                        key={v.id}
                        aria-pressed={on}
                        onClick={() => pick(v.id)}
                        className="cursor-pointer text-left rounded-[20px] px-4 py-3.5 min-h-16 border-[1.5px]"
                        style={{ borderColor: on ? 'transparent' : 'rgba(255,255,255,.1)', background: on ? GRAD : '#1B1E28', color: on ? '#0B0C10' : '#EEF0F4' }}
                      >
                        <span className="font-display block text-[15px] font-bold">{v.name}</span>
                        <span className="font-mono block text-[11px] mt-1">{v.soc} · {v.price}€</span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <div className="flex flex-wrap gap-2.5">
                <div className="flex items-center border-[1.5px] border-ink/40 rounded-full p-1">
                  <button aria-label="Diminuer la quantité" onClick={() => { setQty((q) => Math.max(1, q - 1)); setAdded(false); }} className="w-11 h-11 rounded-full bg-transparent text-xl cursor-pointer text-ink hover:bg-panel-2">−</button>
                  <span className="font-mono min-w-8 text-center font-bold" aria-live="polite">{qty}</span>
                  <button aria-label="Augmenter la quantité" onClick={() => { setQty((q) => Math.min(9, q + 1)); setAdded(false); }} className="w-11 h-11 rounded-full bg-transparent text-xl cursor-pointer text-ink hover:bg-panel-2">+</button>
                </div>
                <button onClick={add} className="cta gbg flex-[1_1_220px] min-h-[54px] rounded-full text-void cursor-pointer flex items-center justify-between px-6 font-mono font-bold text-sm tracking-[0.04em]">
                  <span>{added ? 'AJOUTÉ ✓' : 'AJOUTER AU PANIER'}</span>
                  <span>{eur(cur.price * qty)}</span>
                </button>
              </div>
              <div className="font-mono flex flex-wrap gap-x-[18px] gap-y-1.5 text-[11px] text-muted">
                <span>↳ Livraison suivie</span><span>↳ Retours 30 jours</span><span>↳ Paiement sécurisé</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARQUEE ================= */}
      <div className="font-display gbg text-void font-bold text-xl py-4 whitespace-nowrap overflow-hidden" aria-hidden="true">
        <span className="animate-marquee pl-6">
          DOUBLE AMOLED ✦ 120 HZ ✦ HALL EFFECT ✦ SNAPDRAGON 8 GEN 2 ✦ 6000 MAH ✦ REFROIDISSEMENT ACTIF ✦&nbsp;
          DOUBLE AMOLED ✦ 120 HZ ✦ HALL EFFECT ✦ SNAPDRAGON 8 GEN 2 ✦ 6000 MAH ✦ REFROIDISSEMENT ACTIF ✦&nbsp;
        </span>
      </div>

      {/* ================= SYSTEM TIMELINE ================= */}
      <section id="systeme" className="px-6 py-24 bg-void">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
            <div>
              <Tag color="#4FA8FF">02 // INNOVATION EXCLUSIVE</Tag>
              <h2 className="font-display m-0 text-[clamp(40px,6vw,84px)] font-black leading-none tracking-[-0.03em]">
                Deux écrans.<br /><span className="grad">Zéro compromis.</span>
              </h2>
            </div>
            <p className="m-0 max-w-[400px] text-base leading-[1.55] text-body">
              Le premier système double écran AMOLED sur une console Android : l&apos;écran du haut pour jouer, celui du bas comme centre de commande, clavier ou écran secondaire.
            </p>
          </div>

          <div className="grid gap-y-10 grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))]">
            {/* 01 */}
            <div className="flex flex-col">
              <TimelineHead n="01" />
              <div className="w-[1.5px] h-10 bg-ink/35 ml-[21px]" />
              <div className="mr-4 bg-panel border-[1.5px] border-white/12 rounded-[26px] p-[22px]">
                <div className="font-mono text-[11px] text-muted">ÉCRAN SUPÉRIEUR</div>
                <div className="font-display text-[40px] font-black my-1.5">120<span className="text-base"> Hz</span></div>
                <div className="h-[34px] rounded-[10px] mt-1.5 mb-3" style={{ background: 'repeating-linear-gradient(90deg, #4FA8FF 0 3px, transparent 3px 8px)' }} />
                <p className="m-0 text-sm leading-normal text-body">AMOLED 1080p, fluidité totale en jeu.</p>
              </div>
            </div>
            {/* 02 */}
            <div className="flex flex-col">
              <TimelineHead n="02" />
              <div className="w-[1.5px] h-24 bg-ink/35 ml-[21px]" />
              <div className="gbg mr-4 text-void rounded-[26px] p-[22px]">
                <div className="font-mono text-[11px] font-semibold">ÉCRAN INFÉRIEUR</div>
                <div className="font-display text-[40px] font-black my-1.5">3,92<span className="text-base"> &quot;</span></div>
                <p className="m-0 text-sm leading-normal">Tactile AMOLED : carte, inventaire, clavier ou chat.</p>
              </div>
            </div>
            {/* 03 */}
            <div className="flex flex-col">
              <TimelineHead n="03" />
              <div className="w-[1.5px] h-10 bg-ink/35 ml-[21px]" />
              <div className="mr-4 bg-panel border-[1.5px] border-white/12 rounded-[26px] p-[22px]">
                <div className="font-mono text-[11px] text-muted">GAMUT COULEUR</div>
                <div className="font-display text-[40px] font-black my-1.5">100<span className="text-base"> %</span></div>
                <div className="flex gap-1 mt-1.5 mb-3">
                  {['#1F2BFF', '#4FA8FF', '#7FF0D8', '#E9FF4A'].map((c) => (
                    <span key={c} className="flex-1 h-[34px] rounded-lg" style={{ background: c }} />
                  ))}
                </div>
                <p className="m-0 text-sm leading-normal text-body">Couverture DCI-P3 intégrale.</p>
              </div>
            </div>
            {/* + */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="w-11 h-11 flex-none rounded-full bg-mint grid place-items-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0B0C10" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14" /></svg>
                </span>
                <span className="flex-1 h-[1.5px]" style={{ background: 'repeating-linear-gradient(90deg, rgba(238,240,244,.4) 0 6px, transparent 6px 12px)' }} />
              </div>
              <div className="w-[1.5px] h-24 bg-ink/35 ml-[21px]" />
              <div className="ht mr-4 bg-panel border-[1.5px] border-mint rounded-[26px] p-[22px]">
                <div className="font-mono inline-block bg-panel px-1 py-0.5 -mx-1 -my-0.5"><span className="text-[11px] text-[#C9CCFF]">MODE SECONDAIRE</span></div>
                <div className="font-display text-[26px] font-black my-2 leading-[1.1] bg-panel inline-block">Centre de commande</div>
                <p className="m-0 text-sm leading-normal text-ink bg-panel">Raccourcis, émulateurs, multitâche : l&apos;écran du bas s&apos;adapte.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ENGINEERING BLUEPRINT ================= */}
      <section id="ingenierie" className="gbg relative text-void px-6 py-24">
        <div className="bp absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-[1280px] mx-auto">
          <div className="font-mono flex flex-wrap justify-between gap-2 text-xs font-semibold mb-[18px]">
            <span>03 // SCHÉMA TECHNIQUE</span><span>ÉCH. 1:1 — RÉV. B</span>
          </div>
          <h2 className="font-display m-0 mb-14 text-[clamp(40px,6vw,84px)] font-black leading-[0.95] tracking-[-0.03em]">Ingénierie<br />de pointe.</h2>

          <div className="grid gap-8 items-center grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]">
            <div className="flex flex-col gap-7">
              <EngCard side="left" icon="bolt" color="#E9FF4A" title="Snapdragon 8 Gen 2" text="Le SoC le plus puissant jamais intégré dans une console AYN." />
              <EngCard side="left" icon="target" color="#E9FF4A" title="Joysticks Hall Effect" text="Précision magnétique sans contact physique : pas de drift." />
            </div>

            <div className="relative p-[18px]">
              <div className="absolute inset-0 border-[1.5px] border-dashed border-void/70 rounded-full" />
              <div className="relative bg-void rounded-[28px] p-3.5">
                <img src="/thor_open.jpg" alt="Console AYN Thor ouverte, vue de trois quarts" className="block w-full aspect-[620/496] object-cover rounded-[18px]" />
                <span className="font-mono absolute top-[26px] right-[26px] bg-lime text-void text-[11px] font-bold px-2.5 py-1 rounded-full">ACTIVE COOLING</span>
                <span className="font-mono absolute bottom-6 left-[26px] text-ink text-[11px] bg-void/70 px-1.5 py-0.5">FIG.03 — DUAL AMOLED TECH</span>
              </div>
            </div>

            <div className="flex flex-col gap-7">
              <EngCard side="right" icon="battery" color="#7FF0D8" title="6000 mAh Energy" text="Jusqu'à 8 heures de jeu intensif sur une seule charge." />
              <EngCard side="right" icon="fan" color="#7FF0D8" title="Refroidissement Turbo" text="Ventilation active pour tenir les performances sur la durée." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= BOX MANIFEST + ERGONOMICS ================= */}
      <section className="gr px-6 py-24 bg-void">
        <div className="max-w-[1280px] mx-auto grid gap-10 items-start grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))]">
          <div>
            <Tag color="#4FA8FF">04 // DÉBALLAGE</Tag>
            <h2 className="font-display m-0 mb-7 text-[clamp(36px,5vw,64px)] font-black leading-none tracking-[-0.03em]">Dans la <span className="grad">boîte.</span></h2>
            <div className="bg-ink text-void rounded-md shadow-[8px_8px_0_#4FA8FF]" style={{ transform: 'rotate(-1.5deg)' }}>
              <div className="h-3.5" style={{ background: 'radial-gradient(circle at 7px 0, #0B0C10 5px, transparent 5.5px)', backgroundSize: '14px 14px' }} />
              <div className="font-mono px-[26px] pt-[18px] pb-[26px]">
                <div className="flex justify-between text-[11px] text-[#4A4E5A] mb-3.5"><span>MANIFESTE // COLIS #THR-0001</span><span>4 ITEMS</span></div>
                {['Console AYN Thor', 'Câble USB-C textile (1,5 m)', 'Guide de démarrage rapide', "Protection d'écran pré-appliquée"].map((item, i, arr) => (
                  <div key={item} className={`flex justify-between gap-3 py-3 border-t border-dashed border-void/35 text-sm ${i === arr.length - 1 ? 'border-b' : ''}`}>
                    <span>[x] {item}</span><span className="text-deep font-bold">01</span>
                  </div>
                ))}
                <div aria-hidden="true" className="barcode-dark mt-[22px] h-[52px]" />
                <div className="text-[11px] text-[#4A4E5A] mt-2 tracking-[0.3em]">0 0 4 2 6 · T H O R · 2 0 2 6</div>
              </div>
            </div>
          </div>

          <div>
            <Tag color="#7FF0D8">05 // ERGONOMIE</Tag>
            <h2 className="font-display m-0 mb-7 text-[clamp(36px,5vw,64px)] font-black leading-none tracking-[-0.03em]">Maîtrise <span className="grad">absolue.</span></h2>
            <div className="flex flex-col gap-3.5">
              <ErgoRow badge={<span className="font-display w-[72px] h-[72px] flex-none rounded-full bg-brand text-void grid place-items-center font-black text-xl">A</span>} title="Joysticks Alpha" text="Clic tactile et retour précis pour une visée millimétrée." />
              <ErgoRow offset badge={<span className="font-display w-[72px] h-[72px] flex-none rounded-full bg-mint text-void grid place-items-center font-black text-lg">8mm</span>} title="Gâchettes analogiques" text="Course fluide de 8 mm, parfaite pour les jeux de course." />
              <ErgoRow badge={<span className="stripes w-[72px] h-[72px] flex-none rounded-full" />} title="Grip texturé" text="Revêtement anti-dérapant pour les longues sessions." />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SPECS ================= */}
      <section id="specs" className="px-6 py-24 bg-surface border-t border-white/10">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-5 mb-10">
            <div>
              <Tag color="#E9FF4A">06 // DÉTAILS DU MATÉRIEL</Tag>
              <h2 className="font-display m-0 text-[clamp(36px,5vw,64px)] font-black leading-none tracking-[-0.03em]">Spécifi<span className="grad">cations.</span></h2>
            </div>
            <div className="flex flex-wrap gap-1.5 bg-[#191B24] border border-white/10 p-[5px] rounded-full">
              {VARIANTS.map((v) => {
                const on = v.id === cur.id;
                return (
                  <button
                    key={v.id}
                    aria-pressed={on}
                    onClick={() => pick(v.id)}
                    className="font-mono cursor-pointer min-h-11 px-[18px] rounded-full text-xs font-bold"
                    style={{ background: on ? GRAD : 'transparent', color: on ? '#0B0C10' : '#EEF0F4' }}
                  >
                    {v.name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="overflow-x-auto border-[1.5px] border-white/15 rounded-[28px]">
            <table className="font-mono w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr>
                  <th scope="col" className="text-left px-6 py-5 text-[11px] text-muted font-semibold">CARACTÉRISTIQUE</th>
                  {SPEC_COLS.map((label, i) => (
                    <th key={label} scope="col" className="text-left px-6 py-5 text-xs" style={{ background: i === cur.col ? '#4FA8FF' : 'transparent', color: i === cur.col ? '#0B0C10' : '#EEF0F4' }}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map(([label, cells]) => (
                  <tr key={label} className="border-t border-white/10">
                    <th scope="row" className="text-left px-6 py-5 text-[11px] text-muted font-semibold">{label}</th>
                    {cells.map((v, i) => (
                      <td key={i} className="px-6 py-5 font-bold" style={{ background: i === cur.col ? 'rgba(79,168,255,.14)' : 'transparent', color: i === cur.col ? '#E9FF4A' : '#D6D8E4' }}>
                        {v}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function TimelineHead({ n }: { n: string }) {
  return (
    <div className="flex items-center">
      <span className="font-mono w-11 h-11 flex-none rounded-full bg-brand text-void grid place-items-center text-[13px] font-bold">{n}</span>
      <span className="flex-1 h-[1.5px] bg-ink/35" />
    </div>
  );
}

const ICONS: Record<string, React.ReactNode> = {
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></>,
  battery: <><rect x="3" y="7" width="16" height="10" rx="2" /><path d="M22 11v2" /></>,
  fan: <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />,
};

function EngCard({ side, icon, color, title, text }: { side: 'left' | 'right'; icon: string; color: string; title: string; text: string }) {
  const connector = (
    <span aria-hidden="true" className="w-12 mt-[30px] h-[1.5px] bg-void relative flex-none">
      <span className={`absolute -top-1 w-[9px] h-[9px] rounded-full bg-void ${side === 'left' ? '-right-[5px]' : '-left-[5px]'}`} />
    </span>
  );
  return (
    <div className="flex items-start gap-3.5">
      {side === 'right' && connector}
      <div className="flex-1 rounded-[22px] p-[18px] bg-void text-ink">
        <div className="flex items-center gap-2.5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{ICONS[icon]}</svg>
          <span className="font-display font-bold text-base">{title}</span>
        </div>
        <p className="mt-2 mb-0 text-sm leading-normal text-body">{text}</p>
      </div>
      {side === 'left' && connector}
    </div>
  );
}

function ErgoRow({ badge, title, text, offset }: { badge: React.ReactNode; title: string; text: string; offset?: boolean }) {
  return (
    <div className={`flex gap-[18px] items-center bg-panel border-[1.5px] border-white/15 rounded-full py-2.5 pl-2.5 pr-[26px] ${offset ? 'ml-8' : ''}`}>
      {badge}
      <div>
        <div className="font-display font-bold text-[17px]">{title}</div>
        <p className="mt-1 mb-0 text-sm leading-[1.45] text-body">{text}</p>
      </div>
    </div>
  );
}
