'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
        {/* ================= HERO SECTION ================= */}
        <section className="relative w-full h-[90vh] flex flex-col">
          <Navbar />

          {/* Abstract Background Typography & Shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
            {/* Giant Monospace Letters */}
            <div className="absolute left-[5%] xl:left-[10%] top-1/2 -translate-y-[60%] flex gap-4 md:gap-12 tracking-tight text-[#000000] font-black text-[25vw] leading-none opacity-[0.03]">
               <span>A</span>
               <span>T</span>
            </div>
            
            {/* Pixelated/Blocky Orange glowing background element */}
            <div className="absolute right-[15%] xl:right-[20%] top-[25%] opacity-80 mix-blend-multiply">
               {/* Glow */}
               <div className="absolute inset-0 bg-brand blur-[100px] rounded-full scale-150 transform -translate-x-10 translate-y-10"></div>
               {/* Blocky '7' or Abstract Shape shape */}
               <div className="relative flex flex-col items-end">
                  <div className="w-[15vw] h-[5vw] bg-brand"></div>
                  <div className="w-[5vw] h-[5vw] bg-brand mr-[5vw]"></div>
                  <div className="w-[5vw] h-[5vw] bg-brand mr-[10vw]"></div>
                  <div className="w-[5vw] h-[5vw] bg-brand mr-[15vw]"></div>
               </div>
            </div>

            {/* Ambient background glows */}
            <div className="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-brand opacity-20 blur-[150px] rounded-full"></div>
          </div>

          {/* Main Content (Center Product & Floating Texts) */}
          <div className="relative z-10 flex-1 w-full h-full flex items-center justify-center">
            
            {/* Center Product Image */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.6, y: 50 }}
               animate={{ opacity: 1, scale: 0.8, y: 0 }}
               transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
               className="relative w-full max-w-[90vw] md:max-w-[600px] lg:max-w-[850px] xl:max-w-[1000px] flex items-center justify-center pointer-events-none select-none z-20"
            >
               <img 
                  src="/hero_transparent.png"
                  alt="Ayn Thor Device"
                  className="w-full h-auto object-contain filter drop-shadow-[0_45px_100px_rgba(0,0,0,0.15)]"
               />
            </motion.div>

            {/* Tech Marquee Section - Addition */}
            <div className="absolute top-[35%] w-full overflow-hidden whitespace-nowrap opacity-5 pointer-events-none">
               <div className="inline-block animate-marquee text-9xl font-black uppercase text-black">
                  Snapdragon 8 Gen 2 • DOUBLE ÉCRAN AMOLED • REFROIDISSEMENT ACTIF • JOYSTICKS HALL EFFECT • BATTERIE 6000MAH • SNAPDRAGON 8 GEN 2 • DOUBLE ÉCRAN AMOLED • REFROIDISSEMENT ACTIF • JOYSTICKS HALL EFFECT • BATTERIE 6000MAH • 
               </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 select-none">
               <span className="text-[10px] font-black uppercase tracking-widest text-black">scroll</span>
               <div className="w-px h-12 bg-gradient-to-b from-black to-transparent"></div>
            </div>

            {/* Floating Text Overlay - TOP RIGHT */}
            <div className="absolute top-[20%] right-[3%] lg:right-[8%] max-w-[280px] hidden md:block text-black">
               <p className="text-mono-xs leading-relaxed opacity-60 text-right">
                 CONSOLE MULTICONNECTIVITÉ EXCLUSIVE.
                 <br/><br/>
                 INCLUANT L'USB-C, FONCTIONS BLUETOOTH.
                 PROCESSEUR SNAPDRAGON 8 GEN 2 DISPONIBLE POUR DES PERFORMANCES EXTRÊMES.
               </p>
            </div>

            {/* Floating Text Overlay - BOTTOM LEFT (Description) */}
            <div className="absolute bottom-[20%] lg:bottom-[15%] left-[5%] lg:left-[10%] max-w-[320px] text-black">
               <p className="text-mono-xs leading-relaxed opacity-60 hidden sm:block">
                 LA CONSOLE PORTABLE À DOUBLE ÉCRAN.
                 ENREGISTREZ ET JOUEZ EN UTILISANT L'ÉCRAN
                 TACTILE INFÉRIEUR, OU UTILISEZ UN NOMBRE
                 INFINI D'APPLICATIONS ANDROID.
               </p>
            </div>

            {/* Floating Headers Row (Bottom) */}
            <div className="absolute bottom-[5%] w-full flex justify-between px-[5%] lg:px-[10%] pointer-events-none text-black font-bold">
               <div className="text-mono-sm">$349 - $749</div>
               <div className="text-mono-sm hidden xs:block uppercase">batch 004 / 2026</div>
               <div className="text-mono-sm hidden md:block uppercase">designed by ayn team</div>
               <div className="text-mono-sm hidden lg:block uppercase">limited edition</div>
               <div className="text-mono-sm uppercase">dual amoled</div>
               <div className="text-mono-sm uppercase">handheld</div>
            </div>

            {/* Floating Text Overlay - BOTTOM RIGHT (Specs) */}
            <div className="absolute bottom-[15%] right-[5%] lg:right-[10%] max-w-[280px] text-black hidden md:block text-right">
               <ul className="text-mono-xs space-y-1 opacity-60">
                 <li>- DOUBLE ÉCRAN AMOLED 120HZ</li>
                 <li>- SOC SNAPDRAGON 8 GEN 2</li>
                 <li>- TCC (THOR CONTROL CENTER)</li>
                 <li>- BATTERIE RECHARGEABLE 6000MAH</li>
               </ul>
            </div>
          </div>
        </section>

        {/* ================= DETAILS & FEATURES SECTIONS ================= */}
        <div id="features" className="w-full bg-container flex flex-col pt-20">
          
          {/* Divider */}
          <div className="w-full px-10 mb-20 flex justify-center">
             <div className="w-[80%] h-px bg-black/10"></div>
          </div>

          {/* Section 1: Screens */}
          <section className="w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-12 lg:px-24 mb-24">
             <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="flex-1 max-w-xl"
             >
                <div className="text-brand text-mono-xs font-bold mb-4 tracking-widest">DISPLAY / 01</div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 text-black" style={{ fontFamily: 'var(--font-sans)', fontStretch: 'condensed' }}>
                  DOUBLE<br/>ÉCRAN<br/>AMOLED.
                </h2>
                <p className="text-mono-sm text-black/60 leading-relaxed mb-8 max-w-md">
                  VIVEZ UNE EXPÉRIENCE DE JEU UNIQUE AVEC NOTRE CONFIGURATION À DEUX ÉCRANS. L'ÉCRAN SUPÉRIEUR DE 6 POUCES (1080P, 120HZ) OFFRE DES VISUELS ÉPOUSTOUFLANTS, TANDIS QUE L'ÉCRAN INFÉRIEUR TACTILE AMOLED DE 3.92 POUCES RÉVOLUTIONNE L'INTERACTION.
                </p>
                <Link href="/product" className="inline-block px-8 py-4 rounded-full border-2 border-dashed border-black hover:bg-black hover:text-white transition-all text-mono-sm font-bold">
                  VOIR LES ÉCRANS
                </Link>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="flex-1 w-full relative aspect-[4/3] md:aspect-square lg:aspect-video bg-black/5 rounded-[3rem] overflow-hidden"
             >
                <img 
                  src="/thor_dual_screen.png" 
                  alt="Thor Dual Screen"
                  className="w-full h-full object-cover"
                />
             </motion.div>
          </section>

          {/* Section 2: Power */}
          <section className="w-full min-h-[70vh] flex flex-col md:flex-row-reverse items-center justify-center gap-10 px-6 md:px-12 lg:px-24 mb-24">
             <motion.div 
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="flex-1 max-w-xl"
             >
                <div className="text-brand text-mono-xs font-bold mb-4 tracking-widest">PERFORMANCE / 02</div>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter mb-6 text-black" style={{ fontFamily: 'var(--font-sans)' }}>
                  SNAPDRAGON<br/>8 GEN 2.
                </h2>
                <div className="flex flex-col gap-4 text-mono-sm text-black/60 mb-8 max-w-md">
                   <p>ALIMENTÉ PAR UNE PUCE DE CLASSE MONDIALE. LE MODÈLE DE BASE, PRO ET MAX EMBARQUENT LE SOC QUALCOMM SNAPDRAGON 8 GEN 2</p>
                   <ul className="space-y-2 mt-2">
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> ARCHITECTURE KRYO JUSQU'À 3.2 GHZ</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> GPU ADRENO 740 POUR LE RAY TRACING</li>
                     <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-brand rounded-full"></div> REFROIDISSEMENT ACTIF OPTIMISÉ</li>
                   </ul>
                </div>
                <Link href="/product" className="inline-block px-8 py-4 rounded-full bg-brand text-black shadow-lg hover:scale-105 active:scale-95 transition-all text-mono-sm font-bold">
                  ACHETER MAINTENANT
                </Link>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.6 }}
               className="flex-1 w-full relative aspect-[4/3] md:aspect-square lg:aspect-video bg-black/5 rounded-[3rem] overflow-hidden"
             >
                <img 
                  src="/thor_cooling_performance.png" 
                  alt="Thor Cooling Performance"
                  className="w-full h-full object-cover"
                />
             </motion.div>
          </section>

          {/* Section 3: Engineering Grid */}
          <section className="w-full bg-[#121212] text-white rounded-t-[3rem] md:rounded-[4rem] px-6 md:px-12 lg:px-24 py-24 mb-6">
             <div className="text-center mb-20">
                <div className="text-brand text-mono-xs font-bold mb-4 tracking-widest">INGÉNIERIE / 03</div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter" style={{ fontFamily: 'var(--font-sans)' }}>
                  CONÇUE POUR DURER
                </h2>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
               {[
                 { title: "JOYSTICKS HALL EFFECT", desc: "Anti-drift magnétique. Précision parfaite et durée de vie supérieure à celle des composants classiques." },
                 { title: "BATTERIE 6000 MAH", desc: "Autonomie énorme pour des sessions de jeu ininterrompues. Câble USB-C inclus pour une charge rapide." },
                 { title: "THOR CONTROL CENTER", desc: "Logiciel propriétaire AYN. Configurez facilement les performances, l'écran inférieur et le mapping des touches." }
               ].map((feat, idx) => (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, y: 30 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: idx * 0.1 }}
                   className="flex flex-col border border-white/10 rounded-[2rem] p-8 hover:bg-white/5 transition-colors"
                 >
                   <div className="text-brand font-black text-2xl mb-4">0{idx + 1}</div>
                   <h3 className="text-xl font-bold font-sans uppercase mb-4">{feat.title}</h3>
                   <p className="text-mono-xs text-white/50 leading-relaxed">{feat.desc}</p>
                 </motion.div>
               ))}
             </div>
          </section>

          {/* New Section: Reviews (Avis) */}
          <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24 border-t-[1.5px] border-black/10">
             <div className="max-w-[1200px] mx-auto">
               <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                 <div>
                   <h2 className="text-3xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-black">AVIS DES <br />JOUEURS</h2>
                   <p className="text-mono-xs text-black/50 font-bold max-w-[400px]">DÉCOUVREZ CE QUE LA COMMUNAUTÉ PENSE DE L'EXPÉRIENCE AYN THOR.</p>
                 </div>
                 <div className="flex gap-4">
                   <div className="bg-black text-white px-6 py-3 rounded-full font-bold text-mono-xs">4.9/5 - 127 AVIS</div>
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                 {[
                   { name: "ALEX M.", role: "TECH REVIEWER", text: "Le double écran AMOLED est tout simplement révolutionnaire pour l'émulation et le multitâche Android. Le Snapdragon 8 Gen 2 ne bronche jamais." },
                   { name: "SARAH P.", role: "HARDCORE GAMER", text: "L'ergonomie avec les joysticks Hall effect est parfaite. Je peux jouer pendant des heures. La batterie de 6000mAh tient vraiment la route." },
                   { name: "THOMAS B.", role: "DEVELOPER", text: "Un appareil magnifiquement conçu. L'interface TCC est fluide et l'intégration des deux écrans ouvre des possibilités de jeu inédites." }
                 ].map((review, i) => (
                   <div key={i} className="bg-container border-[1.5px] border-black/10 p-8 rounded-3xl flex flex-col hover:border-black/30 transition-colors">
                     <div className="flex text-brand mb-6">
                       {"★★★★★".split("").map((star, idx) => <span key={idx}>{star}</span>)}
                     </div>
                     <p className="text-mono-sm text-black/70 mb-8 flex-1">"{review.text}"</p>
                     <div className="border-t-[1.5px] border-black/10 pt-4 flex justify-between items-end">
                       <span className="font-bold font-sans text-xl text-black">{review.name}</span>
                       <span className="text-mono-xs text-black/40">{review.role}</span>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
          </section>

           {/* New Section: Internal Engineering (Exploded View Concept) */}
           <section className="w-full bg-white text-black py-32 px-6 md:px-12 lg:px-24">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <motion.div 
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   transition={{ duration: 0.8 }}
                   className="relative aspect-square bg-[#f5f5f5] rounded-[4rem] p-12 flex items-center justify-center overflow-hidden border border-black/5"
                 >
                    <img src="/hero_transparent.png" alt="Engineering" className="w-[80%] h-auto opacity-20 absolute rotate-12" />
                    <div className="relative z-10 w-full flex flex-col gap-8">
                       <div className="flex justify-between border-b border-black/10 pb-4">
                          <span className="text-mono-xs font-black">COMPONENT ID</span>
                          <span className="text-mono-xs font-black">STATUS</span>
                       </div>
                       {[
                         { id: "SOC_SD8G2", name: "Qualcomm Snapdragon 8 Gen 2", status: "OPTIMIZED" },
                         { id: "DISP_D_AMOLED", name: "Dual AMOLED 120Hz Panel", status: "CALIBRATED" },
                         { id: "BATT_6000_AH", name: "High Density 6000mAh Battery", status: "LOADED" },
                         { id: "HALL_EFFECT_J", name: "Alpha Hall Joysticks", status: "ACTIVE" },
                         { id: "COOL_TURBO", name: "Active Turbo Cooling", status: "READY" }
                       ].map((comp, i) => (
                         <div key={i} className="flex justify-between items-center group cursor-crosshair">
                            <div className="flex flex-col">
                               <span className="text-[10px] text-black/40 font-bold">{comp.id}</span>
                               <span className="text-mono-sm font-black uppercase text-black group-hover:text-brand transition-colors">{comp.name}</span>
                            </div>
                            <div className="w-20 h-px bg-black/10 transition-all group-hover:w-32 group-hover:bg-brand"></div>
                            <span className="text-[10px] font-black text-black/20 group-hover:text-black">{comp.status}</span>
                         </div>
                       ))}
                    </div>
                 </motion.div>
                 
                 <div className="flex flex-col gap-10">
                    <span className="text-brand font-black text-mono-xs tracking-widest uppercase">architecture interne</span>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none text-black">CHAQUE MILLIMÈTRE COMPTE.</h2>
                    <p className="text-mono-sm font-bold text-black/60 leading-relaxed uppercase">
                       NOUS AVONS REPOUSSÉ LES LIMITES DE L'INGÉNIERIE POUR INTÉGRER UNE PUISSANCE DE CALCUL MASSIVE ET DEUX ÉCRANS DANS UN CHÂSSIS ERGONOMIQUE ET LÉGER. LE RÉSULTAT EST UNE MACHINE ÉQUILIBRÉE, CAPABLE DE TOURNER LES TITRES LES PLUS EXIGEANTS SANS SURCHAUFFE.
                    </p>
                 </div>
              </div>
           </section>

           {/* Feature: Dual Screen Master */}
           <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] text-white overflow-hidden">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <div className="flex flex-col gap-10">
                    <span className="text-brand font-black text-mono-xs tracking-widest uppercase">technologie d'affichage</span>
                    <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tight leading-none">LA RÉVOLUTION DU DOUBLE ÉCRAN.</h2>
                    <p className="text-mono-sm font-bold text-white/40 leading-relaxed uppercase">
                       L'AYN THOR N'EST PAS UNE CONSOLE ORDINAIRE. SON SYSTÈME À DOUBLE ÉCRAN AMOLED OFFRE UNE SURFACE DE JEU TOTALE INÉGALÉE. UTILISEZ L'ÉCRAN INFÉRIEUR POUR VOS CONTRÔLES, VOS MESSAGES OU VOS OUTILS DE STREAMING SANS JAMAIS QUITTER VOTRE PARTIE DES YEUX.
                    </p>
                    <div className="flex gap-4">
                       <div className="flex-1 p-6 bg-white/5 rounded-3xl border border-white/10">
                          <span className="block text-2xl font-black text-brand mb-1">6"</span>
                          <span className="text-[10px] font-bold opacity-50 uppercase">Écran Principal 120Hz</span>
                       </div>
                       <div className="flex-1 p-6 bg-white/5 rounded-3xl border border-white/10">
                          <span className="block text-2xl font-black text-brand mb-1">3.9"</span>
                          <span className="text-[10px] font-bold opacity-50 uppercase">Écran Tactile AMOLED</span>
                       </div>
                    </div>
                 </div>
                 <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[4rem] overflow-hidden border border-white/10 shadow-2xl"
                 >
                    <img src="/feature_dual.jpg" alt="Dual Screen Tech" className="w-full h-auto" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                 </motion.div>
              </div>
           </section>

           {/* Feature: Performance / Cooling */}
           <section className="w-full py-32 px-6 md:px-12 lg:px-24 bg-white text-black">
              <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                 <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[4rem] overflow-hidden border border-black/5 shadow-2xl order-2 lg:order-1"
                 >
                    <img src="/feature_cooling.jpg" alt="Active Cooling" className="w-full h-auto" />
                 </motion.div>
                 <div className="flex flex-col gap-10 order-1 lg:order-2">
                    <span className="text-brand font-black text-mono-xs tracking-widest uppercase">refroidissement turbo</span>
                    <h2 className="text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none text-black">DOMINEZ LA CHALEUR.</h2>
                    <p className="text-mono-sm font-bold text-black/60 leading-relaxed uppercase">
                       AVEC LE SOC SNAPDRAGON 8 GEN 2, LA PUISSANCE EST BRUTE. NOTRE SYSTÈME DE REFROIDISSEMENT ACTIF TURBO GARANTIT DES PERFORMANCES STABLES, MÊME LORS DES SESSIONS LES PLUS INTENSES. NE LAISSEZ JAMAIS LE "THROTTLING" CASSER VOTRE RYTHME.
                    </p>
                    <ul className="flex flex-col gap-4 text-mono-xs font-black uppercase">
                       <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand rounded-full"></div> VENTILATEUR HAUTE VITESSE 5000 RPM</li>
                       <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand rounded-full"></div> CHAMBRE À VAPEUR EN CUIVRE</li>
                       <li className="flex items-center gap-4"><div className="w-2 h-2 bg-brand rounded-full"></div> CONTRÔLE INTELLIGENT DE LA TEMPÉRATURE</li>
                    </ul>
                 </div>
              </div>
           </section>

           {/* Ecosystem Section */}
           <section className="w-full bg-brand p-1 md:p-4 mb-24 overflow-hidden">
              <div className="w-full bg-black rounded-[4rem] py-32 px-6 md:px-12 lg:px-24 text-white relative flex flex-col items-center text-center overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                 <div className="relative z-10 max-w-[800px] flex flex-col items-center gap-8">
                    <span className="text-brand font-black text-mono-xs tracking-widest uppercase">expérience logicielle</span>
                    <h2 className="text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none mb-4">THOR CONTROL CENTER</h2>
                    <p className="text-mono-sm font-bold text-white/40 leading-relaxed uppercase">
                       L'INTERFACE TCC (THOR CONTROL CENTER) PERSONNALISÉE VOUS OFFRE UN CONTRÔLE TOTAL SUR VOTRE EXPÉRIENCE. GÉREZ LA LUMINOSITÉ INDÉPENDANTE DES ÉCRANS, MAPPEZ VOS TOUCHES EN UN CLIN D'OEIL ET OPTIMISEZ LE TDP SELON VOS BESOINS.
                    </p>
                 </div>
              </div>
           </section>

           {/* Community Section */}
           <section className="w-full py-24 px-6 md:px-12 lg:px-24 mb-12">
              <div className="max-w-[1200px] mx-auto bg-white rounded-[4rem] p-12 md:p-20 flex flex-col items-center text-center gap-10 border border-black/5 shadow-xl">
                 <div className="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center">
                    <div className="w-10 h-10 bg-brand rounded-full"></div>
                 </div>
                 <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight text-black">REJOIGNEZ LA COMMUNAUTÉ.</h2>
                 <p className="text-mono-sm font-bold text-black/50 max-w-xl uppercase leading-relaxed">
                    PARTAGEZ VOS CONFIGURATIONS, VOS JEUX PRÉFÉRÉS ET RESTEZ AU COURANT DES PROCHAINES MISES À JOUR DU FIRMWARE SUR NOTRE DISCORD OFFICIEL.
                 </p>
                 <button className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-mono-xs">
                    SERVER DISCORD
                 </button>
              </div>
           </section>

           {/* Newsletter Section */}
           <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-black text-white mb-24 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand opacity-10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
                 <div className="flex-1 flex flex-col gap-6">
                    <span className="text-brand font-black text-mono-xs tracking-widest uppercase">newsletter</span>
                    <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-none text-white">RESTEZ DANS LE FLUX.</h2>
                    <p className="text-mono-sm font-bold text-white/40 leading-relaxed uppercase">
                       INSCRIVEZ-VOUS POUR RECEVOIR LES DERNIÈRES NOUVELLES SUR LES FUTURS BATCHS ET ACCESSOIRES EXCLUSIFS.
                    </p>
                 </div>
                 <div className="flex-1 w-full max-w-md">
                    <div className="flex flex-col sm:flex-row gap-4">
                       <input 
                         type="email" 
                         placeholder="VOTRE EMAIL" 
                         className="flex-1 bg-white/5 border border-white/10 rounded-full px-8 py-5 text-mono-xs font-bold focus:outline-none focus:border-brand transition-colors uppercase" 
                       />
                       <button className="px-10 py-5 bg-brand text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-mono-xs">
                          OK
                       </button>
                    </div>
                 </div>
              </div>
           </section>

           {/* Previous Sections continue... FAQ */}
           <section className="w-full bg-primary text-black py-24 px-6 md:px-12 lg:px-24 border-t-[1.5px] border-black/10">
             <div className="max-w-[800px] mx-auto flex flex-col gap-12">
                <div className="text-center">
                  <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight mb-4 text-black">QUESTIONS FRÉQUENTES</h2>
                  <p className="text-mono-xs text-black/50 font-bold">TOUT CE QUE VOUS DEVEZ SAVOIR SUR AYN THOR.</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  {[
                    { q: "EST-CE QUE L'ÉCRAN INFÉRIEUR EST TOTALEMENT TACTILE ?", a: "OUI, L'ÉCRAN AMOLED INFÉRIEUR DE 3.92 POUCES EST ENTIÈREMENT TACTILE ET PEUT ÊTRE UTILISÉ COMME CLAVIER, TRACKPAD, OU POUR AFFICHER DES APPLICATIONS COMPAGNONS LORSQUE VOUS JOUEZ." },
                    { q: "QUELLE EST LA DIFFÉRENCE ENTRE LES MODÈLES BASE ET PRO ?", a: "LE MODÈLE BASE POSSÈDE 8 GO DE RAM ET 128 GO DE STOCKAGE, TANDIS QUE LE MODÈLE PRO EST ÉQUIPÉ DE 12 GO DE RAM ET 256 GO DE STOCKAGE POUR DES PERFORMANCES MULTITÂCHES OPTIMALES." },
                    { q: "LA CONSOLE EST-ELLE COMPATIBLE AVEC LE GOOGLE PLAY STORE ?", a: "ABSOLUMENT. AYN THOR TOURNE SOUS ANDROID 13 ET INCLUT LE SUPPORT COMPLET DU GOOGLE PLAY SERVICES." }
                  ].map((faq, idx) => (
                    <div key={idx} className="bg-white border-[1.5px] border-black/10 p-6 rounded-2xl flex flex-col gap-4 group hover:border-brand transition-colors cursor-pointer">
                      <div className="flex justify-between items-center">
                         <h3 className="font-bold text-mono-xs text-black pr-8">{faq.q}</h3>
                         <div className="w-8 h-8 rounded-full border-[1.5px] border-black/20 flex items-center justify-center group-hover:bg-brand group-hover:text-black group-hover:border-brand text-black/40 transition-all font-sans font-medium text-lg">+</div>
                      </div>
                    </div>
                   ))}
                </div>
             </div>
           </section>
        </div>
        <Footer />
    </>
  );
}
