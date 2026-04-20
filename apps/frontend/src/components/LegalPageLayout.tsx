import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function LegalPage({
  title, children
}: {
  title: string, children: React.ReactNode
}) {
  return (
    <div className="w-full min-h-screen bg-white font-mono text-dark flex flex-col justify-between">
      <div className="bg-primary/50"><Navbar /></div>
      
      <main className="flex-1 w-full max-w-[800px] mx-auto px-6 py-24 pb-32 pt-32">
        <h1 className="text-4xl lg:text-5xl font-black uppercase tracking-tight mb-12 pb-6 border-b-[1.5px] border-black/10">{title}</h1>
        <div className="text-mono-sm leading-relaxed text-black/70 font-semibold space-y-6">
           {children}
        </div>
      </main>

      <Footer />
    </div>
  );
}
