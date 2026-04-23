'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="relative w-full min-h-[100vh] flex flex-col bg-white">
        <Navbar />

        <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-16 gap-12 max-w-[1400px] mx-auto w-full">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex flex-col gap-8"
          >
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-tight text-black mb-6">
                DÉCOUVREZ<br/>AYN THOR
              </h1>
              <p className="text-lg md:text-xl text-black/60 font-bold max-w-md leading-relaxed">
                LA CONSOLE PORTABLE À DOUBLE ÉCRAN AVEC SNAPDRAGON 8 GEN 2. PERFORMANCES EXTRÊMES POUR L'ÉMULATION ET LE GAMING ANDROID.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/product"
                className="px-10 py-5 bg-black text-white rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-mono-xs inline-block text-center"
              >
                ACHETER MAINTENANT
              </Link>
              <Link
                href="#details"
                className="px-10 py-5 border-2 border-black text-black rounded-full font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all text-mono-xs inline-block text-center"
              >
                EN SAVOIR PLUS
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex gap-8 pt-8 border-t border-black/10">
              <div>
                <div className="text-3xl font-black text-brand">6"</div>
                <div className="text-mono-xs text-black/50 font-bold">ÉCRAN PRINCIPAL</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand">3.9"</div>
                <div className="text-mono-xs text-black/50 font-bold">ÉCRAN TACTILE</div>
              </div>
              <div>
                <div className="text-3xl font-black text-brand">6000</div>
                <div className="text-mono-xs text-black/50 font-bold">MAH BATTERIE</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Product Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 w-full flex items-center justify-center"
          >
            <img
              src="/hero_transparent.png"
              alt="Ayn Thor Device"
              className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= DETAILS SECTION ================= */}
      <section id="details" className="w-full bg-[#f5f5f5] text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Product Image & Features */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div className="relative aspect-[3/4] bg-white rounded-[2rem] overflow-hidden shadow-lg border border-black/5 flex items-center justify-center">
                <img
                  src="/hero_transparent.png"
                  alt="Product Details"
                  className="w-[80%] h-auto object-contain"
                />
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-4 overflow-x-auto">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-20 h-20 bg-white rounded-lg border border-black/10 flex-shrink-0 flex items-center justify-center cursor-pointer hover:border-brand transition-colors">
                    <span className="text-mono-xs font-bold text-black/40">{i}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Specifications & Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-8"
            >
              <div>
                <div className="text-brand text-mono-xs font-bold mb-4 tracking-widest">SPECIFICATIONS</div>
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-6">
                  CONÇU POUR<br/>L'EXTRÊME
                </h2>
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-6">
                {[
                  { icon: "🎮", title: "DOUBLE ÉCRAN AMOLED", desc: "120Hz principal + écran tactile 3.9\" pour contrôles optimaux" },
                  { icon: "⚡", title: "SNAPDRAGON 8 GEN 2", desc: "Performance maximale avec refroidissement actif intégré" },
                  { icon: "🔋", title: "BATTERIE 6000 MAH", desc: "Autonomie extrême pour des sessions illimitées" },
                  { icon: "🎯", title: "JOYSTICKS HALL EFFECT", desc: "Anti-drift magnétique pour précision sans compromis" }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors">
                    <div className="text-3xl flex-shrink-0">{feature.icon}</div>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-bold text-mono-sm text-black">{feature.title}</h3>
                      <p className="text-mono-xs text-black/60">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price Variants */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-black/10">
                {[
                  { name: "BASE", price: "$349", specs: "8GB RAM / 128GB" },
                  { name: "PRO", price: "$549", specs: "12GB RAM / 256GB" },
                  { name: "MAX", price: "$749", specs: "16GB RAM / 512GB" }
                ].map((variant, i) => (
                  <div key={i} className="p-4 bg-white rounded-xl border border-black/10 text-center">
                    <div className="text-brand font-black text-sm mb-1">{variant.name}</div>
                    <div className="text-2xl font-black text-black mb-2">{variant.price}</div>
                    <div className="text-mono-xs text-black/60">{variant.specs}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/product"
                className="px-8 py-5 bg-brand text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-mono-sm text-center mt-4"
              >
                AJOUTER AU PANIER
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">DES RÉSULTATS QUI PARLENT</h2>
            <p className="text-mono-sm text-white/60 font-bold">LES CHIFFRES DERRIÈRE LA RÉVOLUTION AYN THOR.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: "+97%", label: "utilisateurs satisfaits" },
              { stat: "+5k", label: "heures de gaming testées" },
              { stat: "0°C", label: "gestion thermique optimale" },
              { stat: "30j", label: "autonomie en veille" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl md:text-6xl font-black text-brand mb-3">{item.stat}</div>
                <div className="text-mono-sm text-white/60 font-bold uppercase">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS SECTION ================= */}
      <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">CE QUE NOS CLIENTS DISENT</h2>
            <p className="text-mono-sm text-black/60 font-bold">DÉCOUVREZ LES RETOURS DE LA COMMUNAUTÉ AYN THOR</p>
            <div className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-full font-bold text-mono-xs">
              ★★★★★ 4.9/5 - 127 AVIS
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "ALEX M.",
                role: "TECH REVIEWER",
                text: "Le double écran AMOLED est révolutionnaire pour l'émulation. Le Snapdragon 8 Gen 2 ne bronche jamais.",
                avatar: "🎮"
              },
              {
                name: "SARAH P.",
                role: "HARDCORE GAMER",
                text: "L'ergonomie avec les joysticks Hall effect est parfaite. Je peux jouer pendant des heures.",
                avatar: "👾"
              },
              {
                name: "THOMAS B.",
                role: "DEVELOPER",
                text: "Magnifiquement conçu. L'intégration des deux écrans ouvre des possibilités inédites.",
                avatar: "💻"
              },
              {
                name: "MARIE L.",
                role: "EMULATION EXPERT",
                text: "La meilleure console portable pour la rétro émulation. Incomparable.",
                avatar: "🕹️"
              },
              {
                name: "LUCAS D.",
                role: "CONTENT CREATOR",
                text: "Parfait pour le streaming en direct. La batterie tient vraiment bien.",
                avatar: "📱"
              },
              {
                name: "EMMA R.",
                role: "CASUAL GAMER",
                text: "Incroyablement confortable à tenir. C'est devenu mon appareil indispensable.",
                avatar: "🎯"
              }
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-[#f5f5f5] border border-black/10 p-8 rounded-2xl flex flex-col gap-4 hover:border-brand transition-colors"
              >
                <div className="flex text-brand gap-1">
                  {"★★★★★".split("").map((star, idx) => (
                    <span key={idx} className="text-lg">{star}</span>
                  ))}
                </div>
                <p className="text-mono-sm text-black/70 flex-1">"{review.text}"</p>
                <div className="border-t border-black/10 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{review.avatar}</div>
                    <div>
                      <div className="font-bold text-black text-mono-sm">{review.name}</div>
                      <div className="text-mono-xs text-black/50">{review.role}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES DEEP DIVE ================= */}
      <section className="w-full bg-[#f5f5f5] text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <div className="text-brand text-mono-xs font-bold mb-4 tracking-widest">CARACTÉRISTIQUES</div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">CHAQUE DÉTAIL COMPTE</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Display Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-black/5"
            >
              <div className="text-4xl">🎮</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">DOUBLE ÉCRAN AMOLED</h3>
                <p className="text-mono-sm text-black/60">Écran principal 6" 120Hz 1080P pour les jeux, écran tactile 3.9" AMOLED pour les contrôles.</p>
              </div>
              <ul className="space-y-2 text-mono-xs text-black/60">
                <li>✓ Taux de rafraîchissement synchronisé 120Hz</li>
                <li>✓ Couleurs HDR calibrées en usine</li>
                <li>✓ Temps de réponse &lt;1ms</li>
              </ul>
            </motion.div>

            {/* Performance Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-black/5"
            >
              <div className="text-4xl">⚡</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">SNAPDRAGON 8 GEN 2</h3>
                <p className="text-mono-sm text-black/60">Processeur haut de gamme avec GPU Adreno 740 et refroidissement turbo intégré.</p>
              </div>
              <ul className="space-y-2 text-mono-xs text-black/60">
                <li>✓ 8 cores jusqu'à 3.2 GHz</li>
                <li>✓ Ray Tracing GPU</li>
                <li>✓ 0 throttling sur sessions longues</li>
              </ul>
            </motion.div>

            {/* Battery Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-black/5"
            >
              <div className="text-4xl">🔋</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">BATTERIE 6000 MAH</h3>
                <p className="text-mono-sm text-black/60">Autonomie massive pour des sessions de gaming sans fin. Charge rapide USB-C incluse.</p>
              </div>
              <ul className="space-y-2 text-mono-xs text-black/60">
                <li>✓ 10+ heures de gameplay</li>
                <li>✓ Charge complète en 2h</li>
                <li>✓ Gestion thermique optimale</li>
              </ul>
            </motion.div>

            {/* Controls Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-black/5"
            >
              <div className="text-4xl">🎯</div>
              <div>
                <h3 className="text-2xl font-black uppercase mb-2">JOYSTICKS HALL EFFECT</h3>
                <p className="text-mono-sm text-black/60">Magnétique sans contact pour zéro drift et durée de vie extrême.</p>
              </div>
              <ul className="space-y-2 text-mono-xs text-black/60">
                <li>✓ Zéro dérive magnétique</li>
                <li>✓ 10 millions clics minimum</li>
                <li>✓ Calibrage fin en temps réel</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FAQ SECTION ================= */}
      <section className="w-full bg-white text-black py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[900px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">QUESTIONS FRÉQUENTES</h2>
            <p className="text-mono-sm text-black/60 font-bold">TOUT CE QUE VOUS DEVEZ SAVOIR</p>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "EST-CE QUE L'ÉCRAN INFÉRIEUR EST TOTALEMENT TACTILE ?",
                a: "OUI. L'ÉCRAN AMOLED INFÉRIEUR DE 3.92 POUCES EST ENTIÈREMENT TACTILE ET PEUT ÊTRE UTILISÉ COMME CLAVIER, TRACKPAD, OU POUR AFFICHER DES APPLICATIONS COMPAGNONS."
              },
              {
                q: "QUELLE EST LA DIFFÉRENCE ENTRE LES MODÈLES BASE, PRO ET MAX ?",
                a: "BASE: 8GB RAM / 128GB, PRO: 12GB RAM / 256GB, MAX: 16GB RAM / 512GB. Tous partagent le même hardware."
              },
              {
                q: "COMBIEN DE TEMPS DURE LA BATTERIE ?",
                a: "Entre 8-12 heures selon l'utilisation. Charge complète en 2 heures avec l'adaptateur USB-C inclus."
              },
              {
                q: "EST-CE COMPATIBLE GOOGLE PLAY STORE ?",
                a: "OUI. AYN THOR TOURNE SOUS ANDROID 13 AVEC SUPPORT COMPLET DE GOOGLE PLAY SERVICES."
              },
              {
                q: "PUIS-JE ÉMULER DES JEUX RÉTRO ?",
                a: "ABSOLUMENT. C'EST L'UNE DE NOS UTILISATIONS PRINCIPALES. LE SNAPDRAGON 8 GEN 2 GÈRE TOUS LES ÉMULATEURS SANS EFFORT."
              },
              {
                q: "QUELLE EST LA GARANTIE ?",
                a: "2 ANS DE GARANTIE MONDIALE COMPLÈTE. SUPPORT TECHNIQUE 24/7 INCLUS."
              }
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#f5f5f5] border border-black/10 rounded-xl p-6 cursor-pointer hover:border-brand transition-colors"
              >
                <summary className="flex justify-between items-center font-bold text-mono-sm text-black">
                  {faq.q}
                  <span className="text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="mt-4 text-mono-sm text-black/70 pt-4 border-t border-black/10">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="w-full bg-black text-white py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-[1000px] mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tight leading-tight">
              PRÊT À REJOINDRE LA RÉVOLUTION ?
            </h2>
            <p className="text-mono-sm font-bold text-white/60 mx-auto max-w-lg">
              COMMANDEZ MAINTENANT ET REJOIGNEZ DES MILLIERS DE JOUEURS SATISFAITS DANS LE MONDE ENTIER.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/product"
                className="px-12 py-6 bg-brand text-black rounded-full font-bold uppercase tracking-widest hover:scale-105 active:scale-95 transition-all text-mono-sm"
              >
                ACHETER MAINTENANT
              </Link>
              <Link
                href="/models"
                className="px-12 py-6 border-2 border-white text-white rounded-full font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all text-mono-sm"
              >
                COMPARER LES MODÈLES
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
