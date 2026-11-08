import type { Metadata } from 'next';
import { Unbounded, JetBrains_Mono, Inter_Tight } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from 'react-hot-toast';

const display = Unbounded({
  variable: '--font-unbounded',
  subsets: ['latin'],
  weight: ['500', '700', '900'],
});

const mono = JetBrains_Mono({
  variable: '--font-jetbrains',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
});

const sans = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Ayn Thor - Console Portable Double Écran',
  description: 'AYN Thor est une console portable de jeu exclusive à double écran avec processeur Snapdragon.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={cn(
          display.variable,
          mono.variable,
          sans.variable,
          'antialiased bg-void text-ink min-h-[100dvh] font-sans overflow-x-hidden'
        )}
      >
        {/* SYSTEM BAR */}
        <div className="font-mono bg-black text-muted text-[11px] tracking-[0.08em] px-6 py-2 flex flex-wrap justify-between gap-x-6 gap-y-2 border-b border-white/10">
          <span><span className="text-brand">◢</span> AYN//THOR_OS v2.6</span>
          <span className="hidden sm:inline">LINK: SECURE · NODE: FR-PAR · LATENCY 08MS</span>
          <span><span className="text-mint">■</span> ONLINE_</span>
        </div>

        <div className="w-full min-h-screen flex flex-col">{children}</div>

        <Toaster
          toastOptions={{
            style: {
              background: '#13151C',
              color: '#EEF0F4',
              border: '1.5px solid rgba(255,255,255,.14)',
              borderRadius: '999px',
              fontFamily: 'var(--font-jetbrains), monospace',
              fontSize: '0.75rem',
            },
            iconTheme: { primary: '#7FF0D8', secondary: '#0B0C10' },
          }}
        />
      </body>
    </html>
  );
}
