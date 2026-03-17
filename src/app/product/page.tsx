'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingBag, Plus, Minus, Star, Cpu, Battery, Zap, Shield, ChevronDown } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import toast from 'react-hot-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const { addToCart, cart } = useCartStore();
  const detailSectionRef = useRef<HTMLDivElement>(null);

  const models = [
    { id: 'lite', name: 'LITE', processor: 'SNAPDRAGON 865', ram: '8GB', storage: '128GB', price: 249 },
    { id: 'base', name: 'BASE', processor: 'SNAPDRAGON 8 GEN 2', ram: '8GB', storage: '128GB', price: 349 },
    { id: 'pro', name: 'PRO', processor: 'SNAPDRAGON 8 GEN 2', ram: '12GB', storage: '256GB', price: 449 },
    { id: 'max', name: 'MAX', processor: 'SNAPDRAGON 8 GEN 2', ram: '16GB', storage: '1TB', price: 749 },
  ];

  const colors = [
    { id: 'black', name: 'NOIR', hex: '#1C1C1E', imgIndex: 0 },
    { id: 'white', name: 'BLANC', hex: '#F5F5F7', imgIndex: 1 },
    { id: 'violet', name: 'VIOLET', hex: '#6A4C93', imgIndex: 2 }
  ];

  const [selectedModel, setSelectedModel] = useState(models[1]);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const images = [
    "https://www.ayntec.com/cdn/shop/files/4fe40f089696834c4906303a743d01c5_d891fc5b-3473-449a-85c1-56663e291fcf_1200x1200.jpg",
    "https://www.ayntec.com/cdn/shop/files/548f6dfeb36e615cc62903b4eed35ece_1024x1024.jpg",
    "https://www.ayntec.com/cdn/shop/files/996c0314d3c9f4f6a92e228ed4c8e264_a5d230ab-c3a7-49bd-940b-1c63a39c40ae_1024x1024.jpg"
  ];

  const product = {
    id: `pw_ayn_thor_${selectedModel.id}_${selectedColor.id}`,
    name: `AYN THOR ${selectedModel.name} - ${selectedColor.name}`,
    price: selectedModel.price,
    description: "AYN THOR EST UNE CONSOLE PORTABLE 6 POUCES EXCLUSIVE À DOUBLE ÉCRAN, PROPULSÉE PAR UN PUISSANT SOC. ELLE OFFRE UN ÉCRAN AMOLED 1080P SUPÉRIEUR ET UN ÉCRAN TACTILE AMOLED INFÉRIEUR DE 3.92 POUCES.",
  };

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: images[selectedColor.imgIndex]
    });
    toast.success('AJOUTÉ AU PANIER');
  };

  const scrollToDetails = () => {
    detailSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      {/* ================= MAIN SELECTION SECTION ================= */}
      <section className="w-full lg:h-[calc(100vh-80px)] min-h-screen lg:min-h-0 flex flex-col lg:flex-row relative">
           
           {/* Cart Overlay Container */}
           <div className="absolute top-10 right-10 z-30 hidden md:block">
             <Link href="/cart" className="w-14 h-14 flex items-center justify-center rounded-full bg-white border border-black/10 hover:bg-black hover:text-white transition-all relative shadow-lg group">
                 <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
                 {cart.length > 0 && (
                   <span className="absolute -top-1 -right-1 w-6 h-6 bg-brand text-black text-[10px] font-black rounded-full border-2 border-white flex items-center justify-center">
                     {cart.length}
                   </span>
                 )}
             </Link>
           </div>

           {/* Left Side: Product Image Display */}
           <div className="flex-1 min-h-[50vh] py-12 lg:h-full lg:py-0 relative overflow-hidden bg-white/40 flex flex-col justify-center items-center">
              {/* Tech Marquee background */}
              <div className="absolute top-[20%] w-full overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none rotate-[-5deg] scale-110">
                 <div className="inline-block animate-marquee text-9xl font-black uppercase text-black">
                    8 CORE CPU • 120HZ AMOLED • ANDROID 13 • 6000MAH BATTERY • DUAL SCREEN MASTER • WIFI 6E • BLUETOOTH 5.3 • TURBO COOLING • 
                 </div>
              </div>

              {/* Glowing Brand Element */}
              <div className="absolute top-[20%] left-[20%] w-[30vw] h-[30vw] bg-brand/10 blur-[120px] rounded-full pointer-events-none"></div>

              <motion.div 
                key={activeImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-[75%] max-w-[550px] aspect-square flex items-center justify-center z-10"
              >
                 <img 
                   src={images[activeImage]} 
                   alt={product.name}
                   className="w-full h-full object-contain filter drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] rounded-[3rem]"
                   draggable={false}
                 />
              </motion.div>

              {/* Pagination Thumbnails */}
              <div className="absolute bottom-10 flex gap-4 z-20 px-8 max-w-full overflow-x-auto pb-4 noscrollbar">
                 {images.map((img, index) => (
                   <button 
                      key={index} 
                      onClick={() => setActiveImage(index)}
                      className={`shrink-0 flex items-center justify-center overflow-hidden transition-all ${
                        activeImage === index ? 'w-16 h-16 border-[2px] border-brand scale-110 shadow-xl bg-white' : 'w-14 h-14 border border-black/10 opacity-60 hover:opacity-100 bg-white/80'
                      } rounded-[2rem]`}
                   >
                     <img src={img} alt={`Thumb ${index}`} className="w-full h-full object-cover p-1 rounded-[1.5rem]" draggable={false} />
                   </button>
                 ))}
              </div>

              {/* Scroll Indicator */}
              <button 
                onClick={scrollToDetails}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity animate-bounce hidden lg:flex"
              >
                <span className="text-[10px] font-bold tracking-widest uppercase">détails</span>
                <ChevronDown className="w-4 h-4" />
              </button>
           </div>

           <div className="w-full lg:w-[45%] h-full flex flex-col lg:border-l-[1.5px] border-dashed border-black/20 bg-container relative overflow-hidden">
              <div className="flex-1 overflow-y-auto w-full p-8 md:p-12 lg:p-16 pb-40 noscrollbar flex flex-col text-dark">
                
                <div className="flex items-center gap-1.5 mb-8 text-brand">
                  {"★★★★★".split("").map((s, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  <span className="ml-2 text-mono-xs text-black/40 font-bold uppercase tracking-widest">(127 AVIS CLIENTS)</span>
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-4 text-black leading-none">
                  AYN THOR
                </h1>
                
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-3xl font-black font-sans bg-black text-white px-4 py-1 rounded-xl">{product.price}€</span>
                  <span className="text-mono-xs font-bold text-black/40 border border-black/10 px-3 py-1 rounded-full uppercase">EN STOCK</span>
                </div>
                
                <p className="text-mono-sm leading-relaxed mb-10 text-black/70 font-bold uppercase">
                  {product.description}
                </p>

                {/* Models */}
                <div className="mb-10">
                  <h3 className="text-mono-xs font-black text-black/30 mb-4 tracking-widest uppercase">MODÈLE DE PERFORMANCE</h3>
                  <div className="grid grid-cols-2 gap-3">
                     {models.map(model => (
                       <button 
                         key={model.id}
                         onClick={() => setSelectedModel(model)}
                         className={`p-6 rounded-[2rem] text-mono-xs font-bold transition-all border-[1.5px] flex flex-col gap-1 items-start relative ${
                           selectedModel.id === model.id 
                             ? 'bg-black text-white border-black shadow-xl scale-[1.02]' 
                             : 'border-black/5 text-black/60 hover:border-black/20 bg-white/30'
                         }`}
                       >
                         <span className="text-sm font-black tracking-wider">{model.name}</span>
                         <span className="opacity-50 text-[10px] uppercase">{model.processor}</span>
                         <span className="opacity-50 text-[10px] uppercase">{model.ram} / {model.storage}</span>
                         {selectedModel.id === model.id && <div className="absolute top-4 right-4 w-2 h-2 bg-brand rounded-full"></div>}
                       </button>
                     ))}
                  </div>
                </div>

                {/* Colors */}
                <div className="mb-10">
                  <h3 className="text-mono-xs font-black text-black/30 mb-4 tracking-widest uppercase flex justify-between">
                    <span>COULEUR TEXTURE</span>
                    <span className="text-black">{selectedColor.name}</span>
                  </h3>
                  <div className="flex gap-4">
                     {colors.map(c => (
                       <button 
                         key={c.id}
                         onClick={() => {
                           setSelectedColor(c);
                           setActiveImage(c.imgIndex);
                         }}
                         className={`w-14 h-14 rounded-full border-[2px] transition-all p-1.5 ${
                           selectedColor.id === c.id ? 'border-brand scale-110 shadow-lg' : 'border-transparent opacity-50 hover:opacity-100 hover:scale-105 bg-white/30 border-black/5'
                         }`}
                         title={c.name}
                       >
                         <div className="w-full h-full rounded-full shadow-inner border border-black/5" style={{ backgroundColor: c.hex }}></div>
                       </button>
                     ))}
                  </div>
                </div>

                {/* Icons Grid */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-black/5">
                   <div className="flex flex-col items-center gap-2 text-center opacity-60">
                      <Cpu className="w-5 h-5" />
                      <span className="text-[8px] font-black uppercase">SD 8 GEN 2</span>
                   </div>
                   <div className="flex flex-col items-center gap-2 text-center opacity-60">
                      <Battery className="w-5 h-5" />
                      <span className="text-[8px] font-black uppercase">6000mAh</span>
                   </div>
                   <div className="flex flex-col items-center gap-2 text-center opacity-60">
                      <Zap className="w-5 h-5" />
                      <span className="text-[8px] font-black uppercase">CHARGE RAPIDE</span>
                   </div>
                </div>

              </div>

              {/* Bottom Actions Bar */}
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-container via-container to-transparent z-20">
                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-2xl border border-black/5">
                  {/* Quantity */}
                  <div className="flex items-center bg-transparent border border-black/10 rounded-full shrink-0">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-l-full transition-colors text-black"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center text-mono-sm font-black text-black font-sans">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-12 h-12 flex items-center justify-center hover:bg-black/5 rounded-r-full transition-colors text-black"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Add to Cart */}
                  <button 
                    onClick={handleAddToCart}
                    className="flex-1 h-14 rounded-full bg-brand text-black font-black text-mono-xs uppercase hover:bg-black hover:text-white transition-all flex items-center justify-center gap-3 group shadow-lg"
                  >
                    <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    AJOUTER AU PANIER
                    <span className="font-sans ml-1 text-sm">{(product.price * quantity).toFixed(2)}€</span>
                  </button>
                </div>
              </div>

           </div>
      </section>

      {/* ================= EXTRA CONTENT SECTIONS (SCROLLABLE) ================= */}
      <div ref={detailSectionRef} className="w-full max-w-[1200px] flex flex-col gap-24 py-32 px-6 mx-auto">
        
        {/* Detail: Dual Screen Tech */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             viewport={{ once: true }}
             className="relative rounded-[5rem] overflow-hidden bg-white p-12 border border-black/5 shadow-xl"
           >
              <img 
                src="https://droix.eu/wp-content/uploads/2025/08/AYN-THOR-BLACK-LISTING-DONE-02.jpg" 
                alt="Dual Screen Tech" 
                className="w-full h-auto object-cover transform rotate-3 hover:rotate-0 transition-transform duration-700 rounded-[3rem]"
              />
           </motion.div>

           <div className="flex flex-col gap-8 text-dark">
              <span className="text-brand font-black text-mono-xs tracking-widest uppercase">innovation exclusive</span>
              <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none text-black">DEUX ÉCRANS. <br/>ZÉRO COMPROMIS.</h2>
              <p className="text-mono-sm font-bold text-black/60 leading-relaxed uppercase">
                AYN THOR INTRODUIT LE TOUT PREMIER SYSTÈME DE DOUBLE ÉCRAN AMOLED SUR UNE CONSOLE PORTABLE ANDROID. L'ÉCRAN SUPÉRIEUR 120HZ OFFRE UNE FLUIDITÉ INCROYABLE POUR VOS JEUX, TANDIS QUE L'ÉCRAN INFÉRIEUR TACTILE 3.92" SERT DE CENTRE DE COMMANDE, DE CLAVIER OU D'INTERACTION SECONDAIRE.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                 <div className="p-6 bg-white border border-black/5 rounded-[2rem] flex flex-col gap-2 shadow-sm">
                    <span className="text-2xl font-black font-sans">120HZ</span>
                    <span className="text-[10px] font-bold text-black/40 uppercase">Taux de Rafraîchissement</span>
                 </div>
                 <div className="p-6 bg-white border border-black/5 rounded-[2rem] flex flex-col gap-2 shadow-sm">
                    <span className="text-2xl font-black font-sans">100%</span>
                    <span className="text-[10px] font-bold text-black/40 uppercase">DCI-P3 Color Gamut</span>
                 </div>
              </div>
           </div>
        </div>

        {/* Feature Grid: Performance & Engineering */}
        <section className="w-full py-24 bg-black text-white rounded-[5rem] px-12 md:px-24 relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[50%] h-full bg-brand/5 blur-[120px] rounded-full"></div>
           
           <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="flex flex-col gap-8">
                 <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none">INGÉNIERIE <br/>DE POINTE.</h2>
                 <p className="text-mono-sm font-bold text-white/50 leading-relaxed uppercase">
                    CHAQUE COMPOSANT DE L'AYN THOR A ÉTÉ SÉLECTIONNÉ POUR SA DURABILITÉ ET SES PERFORMANCES. DES JOYSTICKS À EFFET HALL POUR ÉVITER LE DRIFT, JUSQU'À NOTRE SYSTÈME DE REFROIDISSEMENT ACTIF TURBO.
                 </p>
                 
                 <div className="flex flex-col gap-6 mt-12">
                    {[
                      { icon: <Zap className="w-6 h-6 text-brand" />, title: "SNAPDRAGON 8 GEN 2", desc: "LE SOC LE PLUS PUISSANT JAMAIS INTÉGRÉ DANS UNE CONSOLE AYN." },
                      { icon: <Shield className="w-6 h-6 text-brand" />, title: "JOYSTICKS HALL EFFECT", desc: "PRÉCISION MAGNÉTIQUE INFINIE SANS AUCUN CONTACT PHYSIQUE." },
                      { icon: <Battery className="w-6 h-6 text-brand" />, title: "6000MAH ENERGY", desc: "JUSQU'À 8 HEURES DE JEU INTENSIF AVEC UNE SEULE CHARGE." }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start">
                         <div className="mt-1">{item.icon}</div>
                         <div className="flex flex-col gap-1">
                            <h4 className="font-black text-mono-sm uppercase">{item.title}</h4>
                            <p className="text-[10px] font-bold text-white/30 uppercase leading-relaxed">{item.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative flex items-center justify-center p-8 bg-white/5 rounded-[5rem] border border-white/10"
              >
                 <img 
                   src="https://www.ayntec.com/cdn/shop/files/996c0314d3c9f4f6a92e228ed4c8e264_a5d230ab-c3a7-49bd-940b-1c63a39c40ae_1024x1024.jpg" 
                   alt="Internal Hardware" 
                   className="w-full h-auto filter grayscale invert brightness-200 opacity-60 rounded-[3rem]"
                 />
                 {/* Floating Labels */}
                 <div className="absolute top-1/4 right-[5%] bg-brand text-black px-4 py-1 rounded-full text-[10px] font-black uppercase animate-pulse">active cooling</div>
                 <div className="absolute bottom-1/4 left-[5%] bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-[10px] font-black uppercase">dual amoled tech</div>
              </motion.div>
           </div>
        </section>

        {/* Unboxing Section */}
        <section className="w-full py-24">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col gap-8 text-dark">
                 <span className="text-brand font-black text-mono-xs tracking-widest uppercase">déballage</span>
                 <h2 className="text-4xl lg:text-6xl font-black uppercase tracking-tight leading-none text-black">DANS LA BOÎTE.</h2>
                 <p className="text-mono-sm font-bold text-black/60 leading-relaxed uppercase">
                    CHAQUE AYN THOR EST ACCOMPAGNÉE D'ACCESSOIRES PREMIUM CONÇUS POUR DURER.
                 </p>
                 <ul className="flex flex-col gap-4 text-mono-sm font-bold uppercase text-black/80">
                    <li className="flex items-center gap-3"><div className="w-6 h-px bg-brand"></div> CONSOLE AYN THOR</li>
                    <li className="flex items-center gap-3"><div className="w-6 h-px bg-brand"></div> CÂBLE USB-C TEXTILE (1.5M)</li>
                    <li className="flex items-center gap-3"><div className="w-6 h-px bg-brand"></div> GUIDE DE DÉMARRAGE RAPIDE</li>
                    <li className="flex items-center gap-3"><div className="w-6 h-px bg-brand"></div> PROTECTION D'ÉCRAN PRÉ-APPLIQUÉE</li>
                 </ul>
              </div>
              <div className="bg-container rounded-[5rem] p-12 aspect-[4/3] flex items-center justify-center border border-black/5 shadow-inner">
                 <img src="/hero_transparent.png" alt="Box content" className="w-[60%] h-auto opacity-40 grayscale rounded-[2rem]" />
              </div>
           </div>
        </section>

        {/* Ergonomics Section */}
        <section className="w-full py-24 bg-black text-white rounded-[5rem] px-12 md:px-24 mb-12 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
           <div className="relative z-10 flex flex-col items-center text-center gap-8 mb-16">
              <span className="text-brand font-black text-mono-xs tracking-widest uppercase">ergonomie</span>
              <h2 className="text-4xl lg:text-7xl font-black uppercase tracking-tight leading-none">MAÎTRISE ABSOLUE.</h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
              {[
                { title: "JOYSTICKS ALPHA", desc: "Sensation de clic tactile et retour précis pour une visée millimétrée." },
                { title: "GÂCHETTES ANALOGIQUES", desc: "Course fluide de 8mm pour un contrôle parfait dans les jeux de course." },
                { title: "GRIP TEXTURÉ", desc: "Revêtement anti-dérapant pour des sessions de jeu prolongées sans fatigue." }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4 p-8 border border-white/10 rounded-[2.5rem] hover:bg-white/5 transition-all bg-white/5">
                   <h4 className="font-black text-mono-sm uppercase text-brand">{item.title}</h4>
                   <p className="text-[10px] font-bold text-white/40 uppercase leading-relaxed">{item.desc}</p>
                </div>
              ))}
           </div>
        </section>

        {/* Comparison Table Mini */}
        <section className="w-full flex flex-col gap-12 py-24 pb-40">
           <div className="text-center text-dark">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-4 text-black">SPÉCIFICATIONS TECHNIQUES</h2>
              <p className="text-mono-xs font-bold text-black/40 uppercase">DÉTAILS DU MATÉRIEL.</p>
           </div>
           
           <div className="overflow-x-auto bg-white rounded-[3rem] border border-black/5 shadow-xl p-10">
              <table className="w-full text-left font-mono border-collapse">
                 <thead>
                    <tr className="border-b-[1.5px] border-black/10">
                       <th className="py-6 text-mono-xs font-black uppercase tracking-widest text-black/30">FEATURE</th>
                       <th className="py-6 text-mono-xs font-black uppercase text-black">THOR LITE</th>
                       <th className="py-6 text-mono-xs font-black uppercase text-brand">THOR BASE / PRO</th>
                       <th className="py-6 text-mono-xs font-black uppercase text-black">THOR MAX</th>
                    </tr>
                 </thead>
                 <tbody className="text-mono-xs font-bold uppercase tracking-wider text-black">
                    <tr className="border-b border-black/5">
                       <td className="py-6 text-black/40">PROCESSOR</td>
                       <td className="py-6">SD865</td>
                       <td className="py-6">SD 8 GEN 2</td>
                       <td className="py-6 font-black">SD 8 GEN 2 (OC)</td>
                    </tr>
                    <tr className="border-b border-black/5">
                       <td className="py-6 text-black/40">RAM</td>
                       <td className="py-6">8GB LPDDR5</td>
                       <td className="py-6">8GB / 12GB</td>
                       <td className="py-6">16GB LPDDR5X</td>
                    </tr>
                    <tr className="border-b border-black/5">
                       <td className="py-6 text-black/40">STORAGE</td>
                       <td className="py-6">128GB UFS 3.1</td>
                       <td className="py-6">128GB / 256GB</td>
                       <td className="py-6">1TB UFS 4.0</td>
                    </tr>
                    <tr className="text-black">
                       <td className="py-6 text-black/40">SCREEN</td>
                       <td className="py-6">AMOLED + IPS</td>
                       <td className="py-6">DUAL AMOLED</td>
                       <td className="py-6">DUAL AMOLED 120HZ</td>
                    </tr>
                 </tbody>
              </table>
           </div>
         </section>
      </div>

      <Footer />
    </>
  );
}
